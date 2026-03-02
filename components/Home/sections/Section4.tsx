import S4Card from "./cards/S4Card";

function Section4() {
    return (
        <section className="w-full py-[56px]  flex justify-center items-center overflow-hidden">
            {/* Centered Align Container  */}
            <div className="w-full flex flex-col gap-12 justify-center items-center pl-20">
                {/* Section Heading  */}
                <div className="w-full flex justify-between items-center pr-20">
                    <h2 className="font-[550] text-[36px] font-optima uppercase">Our best projects</h2>
                    <div className="flex gap-3">
                        <div className="px-2 py-2">
                            <p className="font-550 text-18px uppercase text-[#333333] font-optima">residential</p>
                        </div>
                        <div className="px-2 py-2">
                            <p className="font-550 text-18px uppercase text-[#333333] font-optima">commercial</p>
                        </div>
                    </div>
                </div>


                {/* Projects Slider Container  */}
                <div className="w-full flex justify-center relative overflow-hidden items-center gap-8">
                    {
                        [1, 2, 3].map((index) => (
                            <S4Card index={index} key={index} />
                        ))
                    }

                    {/* Slider Buttons Absolute Positioned */}
                    <div className="w-full absolute inset-0 flex justify-between items-center px-8">
                        <button>

                            <svg width="28" height="51" viewBox="0 0 28 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.0215 0.989864L1.9799 25.0315L26.0215 49.0731" stroke="white" stroke-width="2.8" />
                            </svg>

                        </button>

                        <button>
                            <svg width="28" height="51" viewBox="0 0 28 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.989986 0.989864L25.0316 25.0315L0.989986 49.0731" stroke="white" stroke-width="2.8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4;