'use client'

import { Building2, CalendarDays, CalendarMinus, Check, User } from "lucide-react";
import React, { useState } from "react";
const Pricing = () => {
    const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
    const togglePlan = () => {
        setIsMonthlyPlan(!isMonthlyPlan);
    };
    return (
        <main className="flex flex-col items-center justify-center pb-20 space-y-10">
            <section className="flex flex-col px-10 pt-20 space-y-6 text-center md:px-0">
                <h2 className="text-xl text-gray-800">PRICING</h2>
                <h3 className="text-5xl">Easily organize your work. Start free.</h3>
                <div className="text-2xl text-gray-500">
                    Access AgileFlows features. No credit card required
                </div>
            </section>
            <div className="flex px-10 md:px-0">
                <button
                    className={`${isMonthlyPlan
                        ? "bg-blue-500 text-white "
                        : "bg-gray-100 text-gray-600"
                        } p-4 rounded-l-lg focus:outline-none w-40 md:w-80`}
                    onClick={() => setIsMonthlyPlan(true)}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarMinus size={24} />
                        <div className="text-2xl">Monthly</div>
                    </div>
                </button>
                <button
                    className={`${!isMonthlyPlan
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600"
                        } p-4 rounded-r-lg focus:outline-none w-40 md:w-80`}
                    onClick={() => setIsMonthlyPlan(false)}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarDays size={24} />
                        <div className="text-2xl">Yearly</div>
                    </div>
                </button>
            </div>
            <div className="">
                <div
                    className={`${isMonthlyPlan ? "block" : "hidden"
                        } text-center  text-2xl`}
                ></div>
                <div className="items-center justify-center space-y-10 md:p-10 md:flex md:space-x-10 md:space-y-0 lg:w-3/4 md:mx-auto">
                    <div className="p-10 space-y-8 border border-gray-500 rounded-lg md:w-1/2 ">
                        <h4 className="text-2xl">Basic</h4>
                        <div className="text-xl">
                            For teams that need to create project plans with confidence.
                        </div>
                        <div className="text-5xl font-semibold">&#8377;0</div>
                        <div className="">
                            Per user, per month billed annually &#8377;1440
                        </div>
                        <div className="text-center">
                            <button className="w-full px-4 py-2 text-xl text-white bg-blue-500 rounded-lg">
                                Contact Sales
                            </button>
                        </div>

                        <div className="text-2xl text-center underline">Purchase Now</div>
                        <div>Manage tasks and personal to-dos:</div>
                        <ul className="flex flex-col space-y-6">
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline</div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Unlimited free viewers
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    5 Participants
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    5 GB Storage
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Unlimited Projects
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Unlimited Project boards

                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    2 Factor Authentication
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    24/7 Customer Support
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    1 Company
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    1 Team
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    1 Owner
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Custom Domain
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="p-10 space-y-8 border border-purple-500 rounded-lg md:w-1/2">
                        <h4 className="text-2xl">Premium</h4>
                        <div className="text-xl">
                            For teams that need to create project plans with confidence.
                        </div>
                        {isMonthlyPlan ? (
                            <div>
                                <div className="text-5xl font-semibold"> &#8377;1200</div>
                            </div>
                        ) : (
                            <div className="text-5xl font-semibold"> &#8377;12999</div>
                        )
                        }
                        <div className="">
                            Per user, per month billed annually  &#8377;1440
                        </div>
                        <div className="text-center">
                            <button className="w-full px-4 py-2 text-xl text-white bg-blue-500 rounded-lg">
                                Contact Sales
                            </button>
                        </div>
                        <div className="text-2xl text-center underline">Purchase Now</div>
                        <div>Everything in Basic, plus :</div>
                        <ul className="flex flex-col space-y-6">
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Unlimited free viewers
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Unlimited Participants
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    100 GB Storage

                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Unlimited Projects
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">

                                    Unlimited Project boards
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Forms
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Rules</div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Permissions</div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Templates</div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Builder</div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Search</div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Milestones</div>
                            </li>
                        </ul>
                    </div>


                    <div className="p-10 space-y-8 border border-teal-500 rounded-lg md:w-1/2">
                        <h4 className="text-2xl">Business</h4>
                        <h4 className="text-xl">
                            For teams that need to create project plans with confidence.
                        </h4>
                        {isMonthlyPlan ? (
                            <div>
                                <div className="text-5xl font-semibold">&#8377;3999</div>
                            </div>
                        ) : (
                            <div className="text-5xl font-semibold">&#8377;32999</div>
                        )
                        }
                        <div className="">
                            Per user, per month billed annually &#8377;1440
                        </div>

                        <div className="text-center">
                            <button className="w-full px-4 py-2 text-xl text-white bg-blue-500 rounded-lg">
                                Contact Sales
                            </button>
                        </div>

                        <div className="text-2xl text-center underline">Purchase Now</div>

                        <div>Everything in Premium, plus :</div>
                        <ul className="flex flex-col space-y-6">
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Portfolios
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Product Roadmap
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">

                                    Calendar
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">

                                    Timeline
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">

                                    Gantt Chart
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Advanced Integrations
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Forms
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Rules
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Permissions
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Templates
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Builder
                                </div>
                            </li>
                            <li className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Search
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>




        </main>
    );
};

export default Pricing;
