"use client"

import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "Curious Queries",
    rows: [
        {
            title: "What home appliances has Suresh specialized?",
            content: `Suresh’s expertise spans Electric Rice Cooker, Gas Stove, Conventional Cooker, and Lunch Box manufacturing lines.`,
        },
        {
            title: "What’s his secret ingredient for success?",
            content:
                "Suresh’s secret is a blend of continuous innovation, embracing new technologies and unrelenting quest for quality and efficiency in production.",
        },
        {
            title: "Which skill set sets him apart?",
            content: `Skill set pertaining to Mixer Grinder, Motor, Electric Rice Cooker, and Gas Stove Manufacturing Line setup distinguishes him.`,
        },
        {
            title: "How can he drive my sales?",
            content: `With his exceptional expertise in obtaining Export Certifications, he can unlock international markets for your products.`,
        },
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextSize: '80px',
    titleTextColor: "#000C40",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

const FAQ = () => {
    return (
        <div className="w-full h-full lg:px-24 lg:pt-12 md:p-14 px-4 py-16 bg-primary-foreground">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    )
}

export default FAQ;