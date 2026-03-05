import styles from "../page.module.css";

function Section7() {
    return (
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 flex justify-center bg-[#652A27] items-center">
            <div className={`${styles.container} w-full relative py-8 sm:py-10 md:py-12 lg:py-[66px]`}>
                <div className="flex flex-col gap-3 sm:gap-6 text-center lg:text-left">
                    <h3 className="font-[400] text-xl sm:text-2xl md:text-[30px] lg:text-[36px] uppercase text-white font-optima">
                        Let the experts help you make the <br className="hidden lg:block" /> <span style={{ fontWeight: "600" }}>right investment</span>
                    </h3>
                    <form className="flex flex-col gap-3 sm:gap-4 w-full max-w-[918px] lg:w-[600px] xl:w-[918px]">
                        <div className="flex flex-col lg:flex-row gap-3">
                            <input type="text" className="w-full lg:w-[298px] font-open-sans bg-white h-[52px] sm:h-[60px] rounded-[10px] text-[#00000099] pl-4 font-[400] text-sm sm:text-[14px] placeholder:text-[#00000099] border-none" placeholder="Name *" />
                            <input type="text" className="w-full lg:w-[298px] font-open-sans bg-white h-[52px] sm:h-[60px] rounded-[10px] text-[#00000099] pl-4 font-[400] text-sm sm:text-[14px] placeholder:text-[#00000099] border-none" placeholder="Phone No *" />
                            <input type="text" className="w-full lg:w-[298px] font-open-sans bg-white h-[52px] sm:h-[60px] rounded-[10px] text-[#00000099] pl-4 font-[400] text-sm sm:text-[14px] placeholder:text-[#00000099] border-none" placeholder="Email *" />
                        </div>
                        <textarea className="w-full font-open-sans h-[100px] sm:h-[125px] pt-4 resize-none bg-white rounded-[10px] text-[#00000099] pl-4 font-[400] text-sm sm:text-[14px] placeholder:text-[#00000099] border-none" placeholder="Message *"></textarea>
                        <button className="w-full font-open-sans h-[52px] sm:h-[60px] rounded-[10px] bg-[#C49B64] text-[#ffffff] font-[400] text-sm sm:text-[16px] cursor-pointer">Get in touch with us.</button>
                    </form>
                </div>
                {/* Absolute Positioned Overlay  */}
                <div className="absolute bottom-0 right-0 sm:right-4 md:right-10 lg:right-0 xl:right-20 z-10 pointer-events-none">
                    <img src="/home/s7/girl.png" alt="Section 7" className="w-auto hidden lg:block h-[180px] sm:h-[280px] md:h-[380px] lg:h-[503px] object-cover" />
                </div>
            </div>

         
        </section>
    )
}

export default Section7;