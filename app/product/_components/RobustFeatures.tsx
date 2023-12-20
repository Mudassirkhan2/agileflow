import Image from 'next/image'
import React from 'react'

const RobustFeatures = () => {
    return (
        <section>
            <div className="py-20 space-y-20 px-10 items-center justify-center flex flex-col bg-[#E5E4E2]">
                <h2 className="text-4xl text-center md:w-2/5">Robust features to achieve any business objective as your company grows</h2>
                <div className="space-y-10 md:space-x-40 md:flex md:space-y-0">
                    <div className="flex flex-col space-y-4 w-96 ">
                        <Image
                            src="/images/icons/gears.png"
                            width={300}
                            height={300}
                            alt="logo"
                            className="w-20 h-20"
                        />
                        <h4 className="text-2xl font-semibold">Drive cross-team efficiency</h4>
                        <ul className="ml-6 space-y-4">
                            <li className="text-xl"> • Connect teams and automate work to improve productivity.</li>
                            <li className="text-xl"> • Gain clarity on bottlenecks and allocate work with Workload</li>
                            <li className="text-xl"> • Manage resourcing for teams with messaging, comments, and unique views</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4 w-96">
                        <Image
                            src="/images/icons/puzzle.png"
                            width={300}
                            height={300}
                            alt="logo"
                            className="w-20 h-20"
                        />
                        <h4 className="text-2xl font-semibold">Automate processes</h4>
                        <ul className="ml-6 space-y-4">
                            <li className="text-xl"> • Systemize intakes with Workflow Builder and Forms</li>
                            <li className="text-xl"> • Reduce manual work with custom Rules like assigning tasks and updating statuses</li>
                            <li className="text-xl"> • Automate work in one place with 200+ integrations</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4 w-96">
                        <Image
                            src="/images/icons/refresh-2.png"
                            width={500}
                            height={500}
                            alt="logo"
                            className="w-20 h-20"
                        />
                        <h4 className="text-2xl font-semibold">Get real-time insights</h4>
                        <ul className="ml-6 space-y-4">
                            <li className="text-xl"> • Monitor progress across teams, without manual work</li>
                            <li className="text-xl"> • Build personalized visualizations with Custom Fields and Charts</li>
                            <li className="text-xl"> • Save time on creating reports with a robust Charts template library</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-10 md:space-x-40 md:flex md:space-y-0">
                    <div className="flex flex-col space-y-4 w-96">
                        <Image
                            src="/images/icons/lock.png"
                            width={300}
                            height={300}
                            alt="logo"
                            className="w-20 h-20"
                        />
                        <h4 className="text-2xl font-semibold">Protect sensitive data</h4>
                        <ul className="ml-6 space-y-4">
                            <li className="text-xl"> • Connect teams and automate work to improve productivity.</li>
                            <li className="text-xl"> • Gain clarity on bottlenecks and allocate work with Workload</li>
                            <li className="text-xl"> • Manage resourcing for teams with messaging, comments, and unique views</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4 w-96">
                        <Image
                            src="/images/icons/contacts.png"
                            width={300}
                            height={300}
                            alt="logo"
                            className="w-20 h-20"
                        />
                        <h4 className="text-2xl font-semibold">Manage permissions and settings</h4>
                        <ul className="ml-6 space-y-4">
                            <li className="text-xl"> • Control permissions, privacy settings, security requirements and more from a centralized admin console</li>
                            <li className="text-xl"> • Reduce manual work with custom Rules like assigning tasks and updating statuses</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4 w-96">
                        <Image
                            src="/images/icons/menu.png"
                            width={500}
                            height={500}
                            alt="logo"
                            className="w-20 h-20"
                        />
                        <h4 className="text-2xl font-semibold">Set goals and drive alignment</h4>
                        <ul className="ml-6 space-y-4">
                            <li className="text-xl"> • Align your organization and inspire ownership with Goals</li>
                            <li className="text-xl"> • Track all of your team&apos;s projects in a single view with Portfolios
                            </li>
                            <li className="text-xl"> • Save time on creating reports with a robust Charts template library</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RobustFeatures
