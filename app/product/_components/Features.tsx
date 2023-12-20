'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const options = [
    {
        index: 0,
        title: "Marketing",
        description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
        action: "Explore Marketing ",
        image: "/images/tab-3.webp"
    },
    {
        index: 1,
        title: "Operations",
        description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
        action: "Explore Operations ",
        image: "/images/tab-2.webp"
    },
    {
        index: 2,
        title: "IT",
        description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
        action: "Explore IT  ",
        image: "/images/tab-3.webp"
    },
    {
        index: 3,
        title: "Product",
        description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
        action: "Explore Product ",
        image: "/images/tab-1.webp"
    },
    {
        index: 4,
        title: "Sales",
        description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
        action: "Explore Sales ",
        image: "/images/tab-2.webp"
    }
];

const Features = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleAccordionChange = (value: any) => {
        const selected = options.find((option) => option.title === value);
        if (selected) {
            setSelectedOption(selected);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center py-10 space-y-10">
            <div className="text-4xl text-center">Built to support any team and any workflow</div>

            <div className="flex items-center justify-center px-10 space-x-10">
                <div className="">
                    {options.map((option, index) => (
                        <Accordion
                            key={index}
                            type="single"
                            defaultValue="Marketing"
                        >
                            <AccordionItem key={index} value={option.title}>
                                <AccordionTrigger
                                    className="text-3xl w-96" value={option.title}>
                                    {option.title}
                                </AccordionTrigger>
                                <AccordionContent className="border-b border-blue-500">
                                    <div className="items-center space-x-20 md:flex">
                                        <div className="px-10 md:w-1/2">
                                            <div className="pt-4 text-xl">
                                                {option.description}
                                            </div>
                                            <div className="flex pt-4 text-blue-400">
                                                <div className="text-lg">{option.action}</div>
                                                <ArrowRight className="w-6 h-6 ml-4" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <Image
                                                src={option.image}
                                                alt="Image"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;