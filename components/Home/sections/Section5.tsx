function Section5() {
    return (
        <section className="w-full flex justify-center items-center px-16 py-[56px]"
            style={{
                backgroundImage: "url('/home/s5/s5-banner.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            {/* Centered Align Containerr  */}
            <div className="w-full flex flex-col justify-center items-center gap-10">
                {/* Section Heading  */}
                <div className="flex flex-col w-full  justify-center items-center   text-center">
                    <h2 className="font-[500] text-[46px] text-white uppercase font-optima">
                        AWARDS & RECOGNITIONS
                    </h2>
                    <img src="/home/s3/border-bottom.png" alt="Mansa Group" className="w-[279px] h-[59px]" />
                </div>

                {/* Main Container  */}
                <div className="w-full flex justify-center items-center gap-4">
                    <div className="w-[394px] h-[394px] shrink-0 relative">
                        <img src="/home/s5/s5-awward-img1.png" alt="S5 Card" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-[394px] h-[394px] shrink-0 relative
                    ">
                        <img src="/home/s5/s5-awward-img1.png" alt="S5 Card" className="w-full h-full object-cover " />
                    </div>

                    <div className="w-[394px] h-[394px] shrink-0 relative">
                        <img src="/home/s5/s5-awward-img1.png" alt="S5 Card" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5;