import { useLayoutEffect, useRef } from "react"
import { Icon } from "@iconify/react"

export type LinkKind = "github" | "website" | "paper" | "itch"

export interface ProjectLink {
    kind: LinkKind;
    url: string;
}

// Icon and label for each kind of external link
const linkMeta: Record<LinkKind, { icon: string; label: string }> = {
    github: { icon: "mdi:github", label: "GitHub" },
    website: { icon: "mdi:web", label: "Website" },
    paper: { icon: "mdi:file-document-outline", label: "Paper" },
    itch: { icon: "simple-icons:itchdotio", label: "itch.io" },
}

// Desktop shows this many tags, the rest collapse into "+N" until hover
const VISIBLE_TAGS = 4

const darkTag = "items-center whitespace-nowrap rounded-full border border-white/35 bg-white/15 px-[9px] py-[3px] font-sans text-xs font-medium leading-[1.4] text-white shadow-[inset_0_0_6px_rgb(255_255_255/0.2)] backdrop-blur-sm"
const lightTag = "inline-flex items-center whitespace-nowrap rounded-full border border-white/75 bg-white/45 px-2.5 py-1 font-sans text-xs font-medium leading-[1.4] shadow-[inset_0_0_6px_rgb(255_255_255/0.5)]"

// Eased stops so the fade has no visible edge over light images
const restGradient = "bg-[linear-gradient(to_top,rgb(0_0_0/0.75)_0%,rgb(0_0_0/0.62)_12%,rgb(0_0_0/0.45)_24%,rgb(0_0_0/0.28)_35%,rgb(0_0_0/0.14)_44%,rgb(0_0_0/0.05)_51%,transparent_57%)]"

interface ProjectItemProps {
    title: string;
    summary: string;
    imgPath: string;
    year: string;
    role: string;
    tags: Array<string>;
    links: Array<ProjectLink>;
}

function ProjectItem({ title, summary, imgPath, year, role, tags, links }: ProjectItemProps) {
    const hiddenCount = tags.length - VISIBLE_TAGS
    const panelRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)

    // At rest the panel is pushed down so only the header shows at the card's bottom edge
    useLayoutEffect(() => {
        const panel = panelRef.current
        const header = headerRef.current
        if (panel === null || header === null) return

        const update = () => panel.style.setProperty("--header-h", `${header.offsetHeight}px`)
        update()
        const observer = new ResizeObserver(update)
        observer.observe(header)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            {/* Desktop: image fills the card, a blurred panel slides up on hover */}
            <article className="group relative aspect-3/2 overflow-hidden rounded-2xl border-[2px] light-border text-white backdrop-blur-[4px] backdrop-brightness-117 max-[600px]:hidden">
                <img src={imgPath} alt="" className="absolute inset-0 size-full object-cover" />
                {/* Gradient behind the title at rest */}
                <div className={`absolute inset-0 ${restGradient}`} />

                {/* Header, summary and links travel together from the bottom to the top */}
                <div ref={panelRef}
                    className="absolute inset-0 flex translate-y-[calc(100%-var(--header-h,0px))] flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-focus-within:translate-y-0 group-hover:translate-y-0"
                >
                    {/* Blurred backdrop fades in as the panel rises */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/60 opacity-0 backdrop-blur-[5px] transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100" />

                    {/* Year/role sit level with the tags at rest, level with the title on hover */}
                    <div ref={headerRef} className="relative flex items-end justify-between gap-4 px-5.5 pt-5 pb-4.5 group-focus-within:items-start group-hover:items-start">
                        <div className="flex min-w-0 flex-col gap-2">
                            <h3>{title}</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {tags.map((tag, i) => (
                                    <span key={tag}
                                        className={`${darkTag} ${i < VISIBLE_TAGS ? "inline-flex" : "hidden group-focus-within:inline-flex group-hover:inline-flex"}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {hiddenCount > 0 && (
                                    <span className={`${darkTag} inline-flex group-focus-within:hidden group-hover:hidden`}>
                                        +{hiddenCount}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="shrink-0 text-right font-sans">
                            <div className="text-xl font-semibold leading-[1.3] tracking-[-0.01em]">{year}</div>
                            <div className="text-xs font-medium leading-[1.4] text-white/85">{role}</div>
                        </div>
                    </div>

                    {/* Sits below the card at rest, rises into view with the panel */}
                    <div className="relative flex flex-col items-start gap-3.5 px-5.5">
                        <p>{summary}</p>
                        <div className="flex flex-wrap gap-2">
                            {links.map((link) => (
                                <a key={link.url} href={link.url} target="_blank" rel="noreferrer"
                                    className="flex items-center gap-1.5 rounded-full border border-white/40 bg-white/20 px-3 py-1.5 font-sans text-[13px] font-semibold leading-[1.3] shadow-[inset_0_0_6px_rgb(255_255_255/0.25)] backdrop-blur-sm transition-colors hover:bg-white/30"
                                >
                                    <Icon icon={linkMeta[link.kind].icon} className="size-3.5" />
                                    {linkMeta[link.kind].label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Glass inner glow, layered above the image so it stays visible */}
                <div className="pointer-events-none absolute inset-0 rounded-[14px] shadow-[inset_0_0_8px_1px_rgb(255_255_255/0.3)]" />
            </article>

            {/* Mobile: no hover, so everything is shown in a vertical glass card */}
            <article className="hidden flex-col gap-3.5 rounded-2xl border-[2px] light-border bg-white/28 p-3 shadow-[inset_0_0_8px_1px_rgb(255_255_255/0.3)] backdrop-blur-[4px] backdrop-brightness-117 max-[600px]:flex">
                <img src={imgPath} alt="" className="aspect-16/10 w-full rounded-[10px] object-cover" />
                <div className="flex flex-col gap-3 px-1 pb-0.5">
                    <div className="flex flex-col gap-1">
                        <h3>{title}</h3>
                        <span className="font-sans text-[13px] font-medium leading-[1.4]">{year} · {role}</span>
                    </div>
                    <p>{summary}</p>
                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <span key={tag} className={lightTag}>{tag}</span>
                        ))}
                    </div>
                    <div className="flex gap-2 pt-1">
                        {links.map((link) => (
                            <a key={link.url} href={link.url} target="_blank" rel="noreferrer"
                                aria-label={linkMeta[link.kind].label}
                                className="flex size-11 items-center justify-center rounded-full border border-white/75 bg-white/45 shadow-[inset_0_0_6px_rgb(255_255_255/0.5)]"
                            >
                                <Icon icon={linkMeta[link.kind].icon} className="size-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}

export default ProjectItem;
