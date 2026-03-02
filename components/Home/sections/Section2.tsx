import Image from "next/image";
function Section2() {
    return (
        <section className="w-full h-[686px] relative">


            {/* Slider Container  */}
            <div className="w-full h-full relative">
                {/* Slider Cards  */}
                <div className="w-full h-full">
                    <Image src="/home/s2/s2-img1.jpg" alt="Slider Card" fill className="object-cover z-1" />
                    <div className="absolute inset-0 w-full h-full flex justify-center pt-22 z-10">
                        <h2 className="font-[400] text-[48px] text-white uppercase font-optima">
                            Aagman <span className="font-[500]">by mansha</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Slider Buttons  */}
            <div className="absolute px-10 inset-0 w-full h-full flex justify-between items-center z-10">
                <button className="w-[58px] h-[58px] rounded-full border cursor-pointer border-white flex justify-center items-center">
                    <div className="w-[42px] h-[42px] bg-white rounded-full flex justify-center items-center">

                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.8284 6.36398L7.77818 1.41421L6.36396 0L0 6.36398L6.36396 12.7279L7.77818 11.3137L2.8284 6.36398Z" fill="#666666" />
                        </svg>

                    </div>
                </button>
                <button className="w-[58px] h-[58px]  rounded-full border border-white flex cursor-pointer justify-center items-center">
                    <div className="w-[42px] h-[42px] bg-white rounded-full flex justify-center items-center">

                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.94978 6.36398L0 1.41421L1.41422 0L7.77818 6.36398L1.41422 12.7279L0 11.3137L4.94978 6.36398Z" fill="#666666" />
                        </svg>

                    </div>
                </button>
            </div>
        </section>
    );
}

export default Section2;