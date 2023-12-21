import Image from "next/image";

import { ArrowRight } from "lucide-react"

const HeroSection = () => {
    return (
        <section>
            <div className="flex flex-col-reverse items-center justify-center py-20 space-y-10 lg:flex-row lg:space-x-20">
                <div className="flex flex-col space-y-10 2xl:px-10 md:w-2/3 lg:w-1/3">
                    <h3 className="text-3xl text-center md:text-3xl lg:text-6xl">
                        The #1 software in product and project management
                    </h3>
                    <div className="text-2xl ">
                        AgileFlow connects company-wide goals to the work needed to achieve
                        them—across teams and functions.
                    </div>

                    <div className="flex space-x-4 ">
                        <div className="p-4 text-xl text-white bg-black rounded-md">
                            Get Started
                        </div>

                        <div className="p-4 text-xl border rounded-md">View Demo</div>
                    </div>
                </div>

                <Image src="/images/tab-6.webp" alt="Image" width={700} height={700} className="lg:px-10" />
            </div>
        </section>
    )
}

export default HeroSection
