import { Icon } from "@iconify/react"

// Iconify logo for each skill name listed in AboutPage's techItems
const techIcons: Record<string, string> = {
    "Python": "logos:python",
    "TypeScript": "logos:typescript-icon",
    "JavaScript": "logos:javascript",
    "C#": "logos:c-sharp",
    "C++": "logos:c-plusplus",
    "SQL": "carbon:sql",
    "React": "logos:react",
    "SvelteKit": "logos:svelte-icon",
    "HTML + CSS": "logos:html-5",
    "FastAPI": "logos:fastapi-icon",
    "Node": "logos:nodejs-icon",
    "Unity": "logos:unity",
    "Godot": "logos:godot-icon",
    "GitHub": "logos:github-icon",
    "Docker": "logos:docker-icon",
    "AWS": "logos:aws",
    "PostgreSQL": "logos:postgresql",
    "Claude": "logos:claude-icon",
    "MCP": "logos:model-context-protocol-icon",
}

interface TechItemProps {
    item: string;
}

function TechItem({item}: TechItemProps) {
    return(
        <div className="group relative flex flex-col items-center gap-1.5 max-[600px]:w-14">
            {/* Name pops up above the icon on hover (desktop only) */}
            <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/85 px-2.25 py-1 font-sans text-[11px] font-medium leading-[1.4] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 max-[600px]:hidden">
                {item}
            </span>
            <Icon icon={techIcons[item]} className="size-10" />
            {/* No hover on touch screens, so the name stays visible */}
            <span className="hidden text-center font-sans text-[11px] font-medium leading-[1.3] max-[600px]:block">
                {item}
            </span>
        </div>
    )
}

export default TechItem
