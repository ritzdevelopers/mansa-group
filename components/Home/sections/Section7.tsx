function Section7() {
    return (
        <section className="w-full px-16 py-[66px] flex justify-center bg-[#652A27] items-center relative">
            <div className="w-full">
                <div className="flex flex-col gap-4">
                    <h3 className="font-[400] text-[36px] uppercase text-white font-optima">
                        Let the experts help you make the <br /> <span className="font-[550]">right investment</span>
                    </h3>
                    <form className="flex flex-col gap-3 w-[918px]">
                        <div className="flex gap-3">
                            <input type="text" className="w-[298px] font-open-sans bg-white h-[60px] rounded-[10px] text-[#00000099] pl-4 font-[400] text-[14px] placeholder:text-[#00000099] pl-4 border-none" placeholder="Name *" />
                            <input type="text" className="w-[298px] font-open-sans bg-white h-[60px] rounded-[10px] text-[#00000099] pl-4 font-[400] text-[14px] placeholder:text-[#00000099] pl-4 border-none" placeholder="Phone No *" />
                            <input type="text" className="w-[298px] font-open-sans bg-white h-[60px] rounded-[10px] text-[#00000099] pl-4 font-[400] text-[14px] placeholder:text-[#00000099] pl-4 border-none" placeholder="Email *" />
                        </div>
                        <textarea className="w-full font-open-sans h-[125px] pt-4 resize-none bg-white rounded-[10px] text-[#00000099] pl-4 font-[400] text-[14px] placeholder:text-[#00000099] pl-4 border-none" placeholder="Message *"></textarea>
                        <button className="w-full font-open-sans h-[60px] rounded-[10px] bg-[#C49B64] text-[#ffffff] font-[400] text-[16px] cursor-pointer">Get in touch with us.</button>
                    </form>
                </div>
            </div>

            {/* Absolute Positioned Overlay  */}
            <div className="absolute bottom-0 right-20 z-10">
                <img src="/home/s7/girl.png" alt="Section 7" className="w-auto h-[503px] object-cover" />
            </div>
        </section>
    )
}

export default Section7;