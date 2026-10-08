import backdrop1920 from "../assets/backdrop-1920.webp";
import backdrop2880 from "../assets/backdrop-2880.webp";

// Light gradient that shows through the photo's transparent sky
const skyGradient = "bg-[linear-gradient(135deg,hsl(210_45%_96%)_0%,hsl(230_35%_92%)_50%,hsl(200_40%_97%)_100%)]";

// Static photo backdrop. It is drawn at least 1920px wide and never shrinks,
// so narrower screens crop the sides; its 4:3 height always covers the screen.
function Backdrop() {
    return (
        <div aria-hidden="true" className={`fixed inset-0 -z-100 overflow-hidden opacity-80 ${skyGradient}`}>
            <img
                src={backdrop1920}
                srcSet={`${backdrop1920} 1920w, ${backdrop2880} 2880w`}
                sizes="(max-width: 1920px) 1920px, 100vw"
                alt=""
                className="absolute top-0 left-1/2 w-[max(1920px,100%)] max-w-none -translate-x-1/2"
            />
        </div>
    )
}

export default Backdrop
