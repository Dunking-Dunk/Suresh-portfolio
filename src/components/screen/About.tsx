"use client"

import React from "react";
import { DotBackground } from "../global/dot-background";
import Lottie from "lottie-react";
import ConveyorAnimation from '../../../public/animation/conveyor.json'

const About = () => {
    return (
        <div id='about' className="w-full h-full bg-primary-foreground">
            <DotBackground className={'lg:p-28 md:p-12 p-4 py-16'}>
                <div className="flex lg:flex-row lg:gap-0 gap-16 flex-col-reverse justify-between">
                    <h2 className="font-bold lg:text-8xl md:text-6xl text-3xl text-primary w-4/5">
                        Senior consultant harnessing the industry’s waves of innovation for over three decades.
                    </h2>
                    <Lottie className="lg:w-96 w-60 self-center" animationData={ConveyorAnimation} loop={true} />
                </div>

            </DotBackground>

        </div>
    )
}

export default About