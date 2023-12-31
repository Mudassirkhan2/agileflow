"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const images = [
    {
        src: "/images/tab-1.webp",

    },
    {
        src: "/images/tab-2.webp",
    },
    {
        src: "/images/tab-3.webp",
    },
];

const Features = () => {
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <section className="flex flex-col items-center justify-center space-y-10 md:px-20 ">
            <div className="flex py-20 ">
                <div className="flex flex-col space-y-6 ">
                    <div className="text-xl text-gray-800 md:px-10">
                        DRIVE EFFICIENCY ACROSS TEAMS
                    </div>
                    <div className="text-4xl md:px-10">Manage complex work easily</div>
                    <div className="text-xl text-gray-600 md:px-10">
                        Connect what needs to get done, who is responsible, and how to get
                        it done.
                    </div>

                    <div className="items-center space-y-10 lg:p-10 md:flex md:space-x-60">

                        <div className="">
                            <Image
                                src='/images/tab-1.webp'
                                alt="Image"
                                width={700}
                                height={700}
                                className="w-[95%]"
                            />
                        </div>

                        <div className="p-2 space-y-10 border-b">
                            <div className="text-3xl">Timeline</div>
                            <div className="text-lg text-gray-600 md:text-xl w-96">
                                See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks—and create plans your team can count on.
                            </div>
                            <div className="flex ">
                                <div className="text-lg">Get Started</div>
                                <ArrowRight className="w-6 h-6 ml-4 " />
                            </div>
                        </div>
                    </div>
                    <div className="items-center space-y-10 lg:p-10 md:flex md:space-x-60">

                        <div className="">
                            <Image
                                src='/images/tab-2.webp'
                                alt="Image"
                                width={700}
                                height={700}
                                className="w-[95%]"
                            />
                        </div>

                        <div className="p-2 space-y-10 border-b">
                            <div className="text-3xl">Boards</div>
                            <div className="text-lg text-gray-600 md:text-xl w-96">
                                Make it easy for your team to focus on tasks currently at hand. Define each stage of work to see what is important and where things are getting stuck.
                            </div>
                            <div className="flex ">
                                <div className="text-lg">Get Started</div>
                                <ArrowRight className="w-6 h-6 ml-4 " />
                            </div>
                        </div>
                    </div>
                    <div className="items-center space-y-10 lg:p-10 md:flex md:space-x-60">

                        <div className="">
                            <Image
                                src='/images/tab-1.webp'
                                alt="Image"
                                width={700}
                                height={700}
                                className="w-[95%]"
                            />
                        </div>

                        <div className="p-2 space-y-10 border-b">
                            <div className="text-3xl">Timeline</div>
                            <div className="text-lg text-gray-600 md:text-xl w-96">
                                See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks—and create plans your team can count on.
                            </div>
                            <div className="flex ">
                                <div className="text-lg">Get Started</div>
                                <ArrowRight className="w-6 h-6 ml-4 " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
