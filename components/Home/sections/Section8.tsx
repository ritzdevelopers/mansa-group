function Section8() {
    return (
        <section className="w-full flex justify-center items-center pb-[56px]">
            {/* Centered Align Container   */}
            <div className="w-full pl-18 flex justify-between items-center">
                {/* Left Side Container  */}
                <div className="w-[calc(100%-829px)] h-full flex  justify-start items-start">
                    <div className="flex flex-col justify-center items-start gap-4">
                        <h3 className="font-[550] text-[36px] font-optima">Discover Our Finest <br />
                            Selection</h3>
                        <p className="font-[400] font-open-sans text-[16px] text-[#666666]"> Mansha buildcon private limited, a trusted real estate developer, <br /> aims to provide accurate project information including pricing, <br /> layouts, and availability.</p>
                        <button className="w-[156px] h-[37px] text-white bg-[#144168]">
                            <p className="font-[500] text-[16px] font-optima">Explore Now</p>
                        </button>
                    </div>
                </div>

                {/* Right Side Container  */}
                <div className="w-[829px]">
                    <img src="/home/s8/s8-img1.jpg" alt="" className="w-full h-auto" />
                </div>
            </div>
        </section>
    )
}

export default Section8;