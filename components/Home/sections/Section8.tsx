import styles from "../page.module.css";

function Section8() {
    return (
        <section className="w-full flex justify-center bg-white items-center py-8 md:py-12 lg:pt-0 lg:pb-[56px]">
            {/* Centered Align Container   */}
            <div className={`${styles.container} w-full px-4 sm:px-6 md:px-10 lg:px-0 lg:pl-18 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0`}>
                {/* Left Side Container  */}
                <div className="w-full lg:w-[calc(100%-600px)] xl:w-[calc(100%-829px)] h-full flex justify-start items-start">
                    <div className="flex flex-col justify-center items-center lg:items-start gap-6 sm:gap-8">
                        <div className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
                            <h3 className="font-[550] text-xl sm:text-2xl md:text-[30px] xl:text-[36px] font-optima uppercase">Discover Our Finest <br className="hidden lg:block"/>
                                Selection</h3>
                            <p className="font-[400] font-open-sans text-sm sm:text-base lg:text-[16px] text-[#666666]"> Mansha buildcon private limited, a trusted real estate developer, <br className="hidden lg:block"/> aims to provide accurate project information including pricing, <br className="hidden lg:block"/> layouts, and availability.</p>
                        </div>
                        <button className="w-[140px] sm:w-[156px] h-[34px] sm:h-[37px] text-white bg-[#144168] flex items-center justify-center">
                            <p className="font-[500] text-sm sm:text-[16px] font-optima uppercase">Explore Now</p>
                        </button>
                    </div>
                </div>

                {/* Right Side Container  */}
                <div className="w-full lg:w-[550px] xl:w-[829px]">
                    <img src="/home/s8/s8-img1.jpg" alt="" className="w-full h-auto" />
                </div>
            </div>
        </section>
    )
}

export default Section8;