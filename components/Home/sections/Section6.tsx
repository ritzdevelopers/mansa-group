import S6Card from "./cards/S6Card";
function Section6() {
    return (
        <section className="w-full px-16 py-[56px]  bg-[#F9F9F9]">
            {/* Centered Align Container  */}
            <div className="w-full flex flex-col justify-center items-center gap-4 h-full">
                {/* Section Heading  */}
                <div className="flex justify-center items-center gap-4 text-center">
                    <h2 className="font-[500] text-[36px] text-black uppercase">
                        customer's feedback
                    </h2>
                </div>
                {/* Main Container  */}
                <div className="flex justify-center items-center gap-8 flex-1 w-full">

                    <button className="w-[50px] h-[50px] rounded-full border border-[#5F5F5F] flex justify-center items-center cursor-pointer">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.8284 6.36398L7.77818 1.41421L6.36396 0L0 6.36398L6.36396 12.7279L7.77818 11.3137L2.8284 6.36398Z" fill="#666666" />
                        </svg>
                    </button>

                    {/* Main Slider Containner  */}
                    <div className="w-[864px] relative h-full ">
                        {/* Slider Card  */}
                       {
                       (() => {
                           const cards = [1, 2, 3];
                           return cards.map((index) => (
                               <S6Card index={index} key={index} totalCards={cards.length} />
                           ));
                       })()
                       }
                    </div>
                    <button className="w-[50px] h-[50px] rounded-full border border-[#5F5F5F] flex justify-center items-center cursor-pointer">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.94978 6.36398L0 1.41421L1.41422 0L7.77818 6.36398L1.41422 12.7279L0 11.3137L4.94978 6.36398Z" fill="#666666" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section6;