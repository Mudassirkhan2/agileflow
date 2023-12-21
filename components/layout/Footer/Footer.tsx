import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex flex-col py-20  items-center justify-center bg-[#28282B]">
            <div className="flex flex-col items-center justify-center pb-20 text-center ">
                <Image
                    src="/images/logo/logo-13.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="mx-auto w-60 h-60"
                />
                <h4
                    className="flex justify-center w-2/3 pb-20 text-4xl text-white md:text-6xl md:px-20 "
                >
                    Try the #1 software in project and product management
                </h4>
                <button className="flex items-center justify-center w-40 p-6 text-xl bg-white rounded-lg">
                    Get started
                </button>
            </div>
            <div className="flex-wrap justify-center hidden gap-2 pt-40 border-t md:space-x-20 lg:space-x-40 md:flex">
                <div>
                    <Image
                        src="/images/logo/logo-17.svg"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="flex flex-col space-y-6 ">
                    <div className="pb-10 text-xl text-gray-200">AgileFlow</div>
                    <div className="text-gray-200">Home</div>
                    <div className="text-gray-200">Product</div>
                    <div className="text-gray-200">What&apos;s New</div>
                    <div className="text-gray-200">Pricing</div>
                    <div className="text-gray-200">Premium</div>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="pb-10 text-xl text-gray-200">About Us</div>
                    <div className="text-gray-200">Company</div>
                    <div className="text-gray-200">Leadership</div>
                    <div className="text-gray-200">Customers</div>
                    <div className="text-gray-200">Diversity</div>
                </div>

                <div className="flex flex-col space-y-6">
                    <div className="pb-10 text-xl text-gray-200">
                        Workflow Solutions
                    </div>
                    <div className="text-gray-200">Project Management</div>
                    <div className="text-gray-200">Goal Management</div>
                    <div className="text-gray-200">Increase Productvity</div>
                    <div className="text-gray-200">Work Management</div>
                    <div className="text-gray-200">Project Planning</div>
                    <div className="text-gray-200">To Do Lists</div>
                </div>

                <div className="flex flex-col space-y-6">
                    <div className="pb-10 text-xl text-gray-200">Resources</div>
                    <div className="text-gray-200">Help Center</div>
                    <div className="text-gray-200">Forum</div>
                    <div className="text-gray-200">Support</div>
                    <div className="text-gray-200">App Directory</div>
                    <div className="text-gray-200">Developers & API</div>
                </div>

                <div className="flex flex-col space-y-6">
                    <div className="pb-10 text-xl text-gray-200">Learn</div>
                    <div className="text-gray-200">11 Leadership Styles</div>
                    <div className="text-gray-200">What are OKRs?</div>
                    <div className="text-gray-200">SMART GOALS</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
