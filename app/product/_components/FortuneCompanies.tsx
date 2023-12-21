import Image from 'next/image'
import React from 'react'
const FortuneCompanies = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 md:space-y-20">
            <div className="text-4xl text-center">80% of Fortune 100 companies use AgileFlow</div>
            <div className="flex-wrap items-center justify-center md:flex md:space-x-20">
                <div className="border-b 2xl:border-r 2xl:border-b-0 md:w-40 2xl:w-80 ">
                    <Image
                        src="/images/logo/logo-6.svg"
                        width={250}
                        height={250}
                        alt="logo"
                        className="h-40"
                    />
                </div>
                <div className="border-b 2xl:border-r 2xl:border-b-0 md:w-40 2xl:w-80 ">
                    <Image
                        src="/images/logo/logo-8.svg"
                        width={250}
                        height={250}
                        alt="logo"
                        className="h-40"
                    />
                </div>
                <div className="border-b 2xl:border-r 2xl:border-b-0 md:w-40 2xl:w-80 ">
                    <Image
                        src="/images/logo/logo-5.svg"
                        width={250}
                        height={250}
                        alt="logo"
                        className="h-40"
                    />
                </div>
                <div className="border-b 2xl:border-r 2xl:border-b-0 md:w-40 2xl:w-80 ">
                    <Image
                        src="/images/logo/logo-9.svg"
                        width={250}
                        height={250}
                        alt="logo"
                        className="h-40"
                    />
                </div>
            </div>
        </section>
    )
}

export default FortuneCompanies
