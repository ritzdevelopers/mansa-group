import S3Card from "./cards/S3Card";
function Section3() {
    return (
        <section 
            className="w-full py-[56px] px-16 flex justify-center overflow-hidden items-center bg-black"
            style={{
                backgroundImage: "url('/home/s3/s3-banner.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Centered Align Container  */}
            <div className="w-full flex flex-col justify-center items-center gap-4">
                {/* Section Heading  */}
                <div className="flex flex-col w-full  justify-center items-center gap-2 text-center">
                    <h2 className="font-[500] text-[46px] font-optima text-white uppercase">Branded
                         Luxury Collection</h2>
                    <img src="/home/s3/border-bottom.png" alt="Mansa Group" className="w-[279px] h-[59px]" />
                </div>

                {/* Main Container  */}
                <div className="w-full flex justify-center items-center gap-6">
                    {/* Slider Container */}
                    {[1, 2, 3].map((index) => (
                        <S3Card index={index} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section3;