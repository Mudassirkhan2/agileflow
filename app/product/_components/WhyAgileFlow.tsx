import Image from 'next/image'
import React from 'react'

const WhyAgileFlow = () => {
    return (
        <section className="flex flex-col items-center justify-center py-10 space-y-10">
            <div className="text-5xl ">Why AgileFlow ?</div>
            <div className="text-2xl text-center">
                According to JDA, AgileFlow improves employee productivity by 45%.
            </div>
            <div className="space-y-10 text-xl md:flex md:space-y-0 md:space-x-20">
                <div className="p-8 border rounded-lg w-80 text-amber-300">
                    <div className="flex items-center space-x-2">
                        <div>
                            <Image
                                src="/images/icons/lightbulb.png"
                                width={250}
                                height={250}
                                alt="logo"


                                className="w-20 h-20 " />
                        </div>

                        <div className="text-3xl">82% +</div>
                    </div>
                    <div className="pt-4 w-80">Increased creativity</div>
                </div>
                <div className="p-8 border rounded-lg w-80">
                    <div className="flex items-center space-x-2">
                        <div>
                            <Image
                                src="/images/icons/clock.png"
                                width={250}
                                height={250}
                                alt="logo"


                                className="w-20 h-20 " />
                        </div>

                        <div className="text-3xl">37% +</div>
                    </div>
                    <div className="pt-4 w-80">Increased on-time completion</div>
                </div>
                <div className="p-8 text-blue-400 border rounded-lg w-80">
                    <div className="flex items-center space-x-2">
                        <div>
                            <Image
                                src="/images/icons/refresh.png"
                                width={250}
                                height={250}
                                alt="logo"


                                className="w-20 h-20 " />
                        </div>

                        <div className="text-3xl">24% +</div>
                    </div>
                    <div className="pt-4 w-80">
                        Increased productivity and efficiency
                    </div>
                </div>
                <div className="p-8 text-green-400 border rounded-lg w-80">
                    <div className="flex items-center space-x-2">
                        <div>
                            <Image
                                src="/images/icons/checkmark.png"
                                width={250}
                                height={250}
                                alt="logo"


                                className="w-20 h-20 " />
                        </div>

                        <div className="text-3xl">999 +</div>
                    </div>
                    <div className="pt-4 w-80">Happy clients</div>
                </div>
            </div>
        </section>
    )
}

export default WhyAgileFlow
