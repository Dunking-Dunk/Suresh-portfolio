import React from "react";
import Image from "next/image";
import { AuroraBackground } from "../global/aurora-background";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { CardContainer } from "../global/3d-card";

const Experience = () => {
    return (
        <div className="relative bg-card-foreground h-full w-full">
            <AuroraBackground className="w-full h-full lg:p-28 md:p-14 px-4 py-16 md:gap-20 gap-10">
                <h3 className="text-6xl text-secondary w-full">Experience</h3>
                <div className="flex flex-col space-y-14 z-10 w-full h-full">
                    <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-4 border-b-1 w-full lg:text-2xl text-xl  border-b pb-6 border-b-muted-foreground">
                        <p className="text-muted font-semibold">March 2024 – June 2024</p>
                        <p className="text-secondary">Senior Vice President – LLM Appliances (P) Ltd.</p>
                        <Button className=" cursor-pointer">
                            < ArrowRightIcon width={32} height={32} className="text-secondary" />
                        </Button>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-4 border-b-1 w-full lg:text-2xl text-xl  border-b pb-6 border-b-muted-foreground">
                        <p className="text-muted font-semibold">September 2022 – March 2024</p>
                        <p className="text-secondary">Vice President – Sivanesan Group of Company</p>
                        <Button className=" cursor-pointer">
                            < ArrowRightIcon width={32} height={32} className="text-secondary" />
                        </Button>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-4 border-b-1 w-full lg:text-2xl text-xl  border-b pb-6 border-b-muted-foreground">
                        <p className="text-muted font-semibold">October 2010 – September 2022</p>
                        <p className="text-secondary">Deputy General Manager – Philips Domestic Appliances India Limited</p>
                        <Button className=" cursor-pointer">
                            < ArrowRightIcon width={32} height={32} className="text-secondary" />
                        </Button>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-4 border-b-1 w-full lg:text-2xl text-xl  border-b pb-6 border-b-muted-foreground">
                        <p className="text-muted font-semibold">July 2004 – September 2010</p>
                        <p className="text-secondary">Manager – Yazaki Wiring Technology, India Limited (TATA)</p>
                        <Button className=" cursor-pointer">
                            < ArrowRightIcon width={32} height={32} className="text-secondary" />
                        </Button>
                    </div>
                </div>
            </AuroraBackground>
            <div className="grid lg:grid-cols-3 grid-rows-1 gap-14 text-secondary mt-10 lg:p-28 md:p-14 px-4 py-16 md:gap-20">
                <CardContainer>
                    <div className="space-y-6">
                        <Image alt='experience image' src={require('../../../public/img/machine/1.webp')} className="h-96 rounded-3xl" />
                        <h4 className="font-medium text-3xl">Mixer Grinder</h4>
                        <p className="text-muted-foreground font-semibold">Expert in setting up manufacturing line for Mixer Grinders.</p>
                    </div>
                </CardContainer>
                <CardContainer>
                    <div className="space-y-6">
                        <Image alt='experience image' src={require('../../../public/img/machine/4.webp')} className="h-96 rounded-3xl" />
                        <h4 className="font-medium text-3xl">Electric Cooker</h4>
                        <p className="text-muted-foreground font-semibold">Proficient in Electric Rice Cooker, Gas Stove, Conventional Cooker, and Lunch Box Manufacturing Line Setup.</p>
                    </div>
                </CardContainer>
                <CardContainer>
                    <div className="space-y-6">
                        <Image alt='experience image' src={require('../../../public/img/loader/3.webp')} className="h-96 rounded-3xl" />
                        <h4 className="font-medium text-3xl">Export Certification</h4>
                        <p className="text-muted-foreground font-semibold">Helping you clear Export Certification with ease and efficiency.</p>
                    </div>
                </CardContainer>
            </div>

        </div>
    )
}

export default Experience