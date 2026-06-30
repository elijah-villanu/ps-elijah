import { useEffect, useRef } from "react";
import type { Section } from "../types";

interface BackdropProps {
    activeSection: Section;
}

interface Orb {
    cx: number;
    cy: number;
    r: number;
    phase: number;
}

// Each section will have a different hue
const sectionHues: Record<Section, number> = {
    about: 210,
    projects: 270,
    contact: 180,
};

// Send in active section via props
function Backdrop({ activeSection }: BackdropProps) {
    // Draw functions for animated background
    // useRef to prevent rerenders
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const timeRef = useRef<number>(0);
    const targetHueRef = useRef<number>(210);
    const currentHueRef = useRef<number>(210);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        targetHueRef.current = sectionHues[activeSection] ?? 210;
    }, [activeSection]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) return;
        const ctx = canvas.getContext("2d");
        if (ctx === null) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;
            timeRef.current += 0.008;
            const t = timeRef.current;

            // Linear interpolate hue
            const diff = targetHueRef.current - currentHueRef.current;
            currentHueRef.current += diff * 0.03;
            const hue = currentHueRef.current;

            // Gradient factor of hue
            const bg = ctx.createLinearGradient(0, 0, W, H);
            bg.addColorStop(0, `hsl(${hue}, 45%, 96%)`);
            bg.addColorStop(0.5, `hsl(${hue + 20}, 35%, 92%)`);
            bg.addColorStop(1, `hsl(${hue - 10}, 40%, 97%)`);

            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // Draw flowing wave lines
            const numWaves = 12;
            for (let i = 0; i < numWaves; i++) {
                const progress = i / (numWaves - 1);
                const baseY = H * 0.3 + progress * H * 0.5;
                const amplitude = 20 + i * 6 + Math.sin(t * 0.7 + i) * 15;
                const frequency = 0.004 + i * 0.0003;
                const speed = t * (0.4 + i * 0.02);
                const alpha = 0.09 + (1 - progress) * 0.12 + Math.sin(t + i) * 0.02;
                const lineHue = hue + i * 5;

                ctx.beginPath();
                ctx.strokeStyle = `hsla(${lineHue},90%,65%,${alpha})`;
                ctx.lineWidth = 1.2 + (1 - progress) * 0.9;

                for (let x = 0; x <= W; x += 3) {
                    const y =
                        baseY +
                        Math.sin(x * frequency + speed) * amplitude +
                        Math.sin(x * frequency * 2.3 + speed * 1.3 + i) * (amplitude * 0.4) +
                        Math.cos(x * frequency * 0.5 + speed * 0.6) * (amplitude * 0.3);
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }

            // Subtle floating orbs
            const orbs: Orb[] = [
                { cx: W * 0.15, cy: H * 0.25, r: 180, phase: 0 },
                { cx: W * 0.8, cy: H * 0.6, r: 220, phase: 2 },
                { cx: W * 0.5, cy: H * 0.8, r: 150, phase: 4 },
            ];

            // Per orb calculations
            for (const orb of orbs) {
                const ox = orb.cx + Math.sin(t * 0.3 + orb.phase) * 30;
                const oy = orb.cy + Math.cos(t * 0.2 + orb.phase) * 20;
                const grd = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
                grd.addColorStop(0, `hsla(${hue + 30},80%,60%,0.06)`);
                grd.addColorStop(1, `hsla(${hue},70%,50%,0)`);
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
                ctx.fill();
            }

            rafRef.current = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-100 block"
        />
    )
}

export default Backdrop