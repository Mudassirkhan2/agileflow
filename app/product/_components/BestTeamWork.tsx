import Image from 'next/image'
import React from 'react'
const BestTeamWork = () => {
    return (
        <section>
            <div className="items-center justify-center py-0 space-y-20 md:py-20 ">
                <div className="text-4xl text-center">The best platform for cross-team work</div>
                <div className="items-center justify-center px-10 md:flex md:space-x-10 ">
                    <div
                        className="flex items-center justify-center p-10 rounded-md bg-gradient-to-r from-gray-400 to-gray-100"
                    >
                        <Image
                            src="/images/tab-1.webp"
                            width={530}
                            height={500}
                            alt="logo"
                            className="rounded-md w-80 h-60 md:w-96 md:h-80 "
                        />
                    </div>
                    <div className="flex items-center justify-center py-6 md:w-1/2">
                        <div className="flex flex-col space-y-10 text-4xl md:space-y-20">
                            <div>
                                Quickly connect complex work across teams
                            </div>

                            <div className="text-2xl">
                                Decrease duplicate work and increase cross-team visibility. Add the same task to multiple projects and see it update automatically.
                            </div>
                            <div className="w-40 p-6 text-xl border rounded-xl">
                                Get started
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center justify-center px-10 py-20 md:flex ">
                <div className="items-center justify-center pb-20 space-y-20 md:w-1/2 md:pb-0">
                    <div className="flex text-4xl ">The best platform for cross-team work</div>
                    <div className="text-2xl md:w-5/6 ">
                        Get more work done across teams with unlimited monthly actions, the ability to track hundreds of projects in one place, and by reporting against your entire organization.
                    </div>
                    <div className="w-40 p-6 text-xl border rounded-xl">
                        Get started
                    </div>
                </div>
                <div
                    className="flex items-center justify-center p-6 rounded-md bg-gradient-to-r from-gray-400 to-gray-100"
                >
                    <Image
                        src="/images/tab-3.webp"
                        width={530}
                        height={500}
                        alt="logo"
                        className="rounded-md w-80 h-60 md:w-96 md:h-80 "
                    />
                </div>
            </div>
        </section>
    )
}

export default BestTeamWork
