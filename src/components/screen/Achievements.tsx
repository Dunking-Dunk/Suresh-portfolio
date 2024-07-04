import React from "react";
import { HoverEffect } from "../global/card-hover-effect";

export const achievement = [
    {
        title: "Special Contribution Award 2006-07",
        description:
            "For making innovative changes in Manufacturing Layout.",
        link: "/",
    },
    {
        title: "New Product launches",
        description:
            "A relentless pursuer of growth, who has aided in multiple new product launches.",
        link: "/",
    },
    {
        title: "Environment, Health, Safety Role Model",
        description:
            "Exceptional performance in these fields was not unnoticed. Indeed, he’s been prudently awarded.",
        link: "/",
    },
    {
        title: "Unit Consolidation Contributor",
        description:
            "His key role in unit consolidation and innovation projects is well known and acknowledged.",
        link: "/",
    },
    {
        title: "Best Innovation Award",
        description:
            "Multiple winnings just attest to his expertise and commitment.",
        link: "/",
    },
    {
        title: "Tech Introduction Master",
        description:
            "Introduced new technology machines to the workflow that actually boosted the overall efficiency.",
        link: "/",
    },
];

const Achievement = () => {
    return (
        <div className="lg:p-28 md:p-16 px-4 py-20 bg-card-foreground w-full h-full md:space-y-12">
            <h3 className="text-secondary md:text-6xl text-5xl font-medium">Achievements</h3>
            <HoverEffect items={achievement} />
        </div>
    )
}

export default Achievement