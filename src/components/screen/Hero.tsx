import { Button } from "@/components/ui/button";
import React from "react";
import { TextGenerateEffect } from "../global/text-generate-effect";
import { GridBackground } from "../global/dot-background";

const Hero = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-primary-foreground">
            <GridBackground className={'h-full lg:p-28 md:p-12 p-4'}>
                <div className="flex flex-row justify-between w-full mb-8">
                    <p className="text-3xl text-primary font-medium">Suresh SR</p>
                    <p className="text-xl text-primary font-bold">2024</p>
                </div>
                <div className="lg:space-y-20 space-y-10">
                    <h1 className="lg:text-[180px] md:text-8xl text-5xl font-semibold text-primary">SSR CONSULTANCY</h1>
                    <TextGenerateEffect className="md:w-2/3 w-full" words={'Welcome to an exclusive tour into the professional life of a phenomenal senior consultant specializing in Manufacturing Business Excellence. Prepare your senses to be astounded as we delve deep into a world filled with new product development, operations strategy and quality enhancement.'} />
                    <Button>Continue Exploration</Button>
                </div>
            </GridBackground>
        </div>
    )
}

export default Hero