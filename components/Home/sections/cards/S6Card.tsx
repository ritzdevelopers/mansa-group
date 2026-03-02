"use client"
import Image from "next/image";
function S6Card({ index, totalCards }: { index: number; totalCards: number }) {
    const isLastCard = index === totalCards;
    const baseWidth = 864;
    const widthDecrease = 50; 
    
    return (
        <div 
            className="h-[450px] shadow-lg absolute left-[50%] translate-x-[-50%] rounded-[10px] flex bg-white justify-center items-center"
            style={{
                bottom: `${index * 20}px`,
                zIndex: index,
                width: isLastCard ? "100%" : `${baseWidth - ((totalCards - index) * widthDecrease)}px`
            }}
        >
            {/* Centered Align Container  */}
            <div className="flex flex-col gap-6">
                {/* Top Row  */}
                <div className="flex flex-col gap-2 justify-center items-center text-center">
                    <div className="w-[106px] h-[106px] relative shrink-0 rounded-full overflow-hidden">
                        <Image src="/home/s6/dm-dp.jpg" alt="S6 Avatar" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <p className="font-[550] text-[18px] font-optima">Stephan Louis</p>
                        <p className="font-[400] text-[14px] text-[#333333] font-open-sans">Developer</p>
                    </div>
                </div>

                {/* Bottom Row  */}
                <div className="flex justify-center items-center text-center">
                    <p className="font-[400] text-[16px] text-[#666666] max-w-[700px] font-open-sans">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</p>
                </div>
            </div>
        </div>
    )
}

export default S6Card;