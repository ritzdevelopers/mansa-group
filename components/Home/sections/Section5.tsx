import GhostCursor from "@/components/GhostCursor";

function Section5() {
    return (
        <section
            className="w-full flex justify-center min-h-[80vh] sm:min-h-[90vh] lg:min-h-[120vh] items-center px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-[76px] relative bg-black"

        >
            <div style={{ height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, cursor: 'pointer' }}>
                <GhostCursor
                    // Visuals
                    color="#B19EEF"
                    brightness={2}
                    edgeIntensity={0}

                    // Trail and motion
                    trailLength={50}
                    inertia={0.5}

                    // Post-processing
                    grainIntensity={0.05}
                    bloomStrength={0.1}
                    bloomRadius={1}
                    bloomThreshold={0.025}

                    // Fade-out behavior
                    fadeDelayMs={1000}
                    fadeDurationMs={1500}
                />
            </div>

            {/* Centered Align Container  */}
            <div className="w-full flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-6">
                {/* Section Heading  */}
                <div className="flex flex-col w-full  justify-center items-center   text-center z-10">
                    <h2 className="font-[500] text-2xl sm:text-3xl md:text-[38px] lg:text-[46px] text-white uppercase font-optima">
                        AWARDS & RECOGNITIONS
                    </h2>
                    <img
                        src="/home/s3/border-bottom.png"
                        alt="Mansa Group"
                        className="w-[180px] h-auto sm:w-[220px] md:w-[250px] lg:w-[279px] lg:h-[59px]"
                    />
                </div>

                {/* Main Container - column on mobile/tablet, row on desktop  */}
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-5 lg:gap-6  z-10">
                    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[220px] lg:w-[300px] xl:w-[394px] lg:max-w-[300px] xl:max-w-[394px] aspect-square relative shrink-0">
                        <img src="/home/s5/aw1.png" alt="S5 Card" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[220px] lg:w-[300px] xl:w-[394px] lg:max-w-[300px] xl:max-w-[394px] aspect-square lg:-mb-20 relative shrink-0">
                        <img src="/home/s5/aw13.png" alt="S5 Card" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[220px] lg:w-[300px] xl:w-[394px] lg:max-w-[300px] xl:max-w-[394px] aspect-square relative shrink-0">
                        <img src="/home/s5/aw12.png" alt="S5 Card" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5;