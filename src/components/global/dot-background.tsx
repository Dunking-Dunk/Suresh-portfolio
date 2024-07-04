import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children, className }) {
    return (
        <div className={cn("h-[50rem] w-full  bg-primary-foreground  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center", className)
        } >
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary-foreground [mask-image:linear-gradient(to_bottom,transparent_10%,black,transparent_10%,black)]"></div>
            <div className="z-10">
                {children}
            </div>
        </div>
    );
}
export function DotBackground({ children, className }) {
    return (
        <div className={cn("w-full bg-primary-foreground bg-dot-black/[0.5] relative flex items-center justify-center", className)} >
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="z-10">
                {children}
            </div>
        </div>
    );
}