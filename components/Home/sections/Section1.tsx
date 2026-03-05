import styles from "../page.module.css"

function Section1() {
    return (
        <section className="w-full relative h-screen min-h-[400px]">
            <video
                src="/home/s1/Mansha-BaNNer.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover absolute inset-0 z-1"
            />

            {/* Absolute Positioned Overlay */}
            <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#0A1E2FB2]">
                <div className="w-full h-full relative flex justify-end items-end pr-4 pb-4 sm:pr-10 sm:pb-10 lg:pr-20 lg:pb-16">
                    <div className={`flex flex-col justify-center items-center text-center px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4 ${styles.glassCard}`}>
                        <p className="font-[400] text-sm sm:text-lg lg:text-[23px] text-white font-optima">
                            Sector 83 - 84, Sonipat
                        </p>
                        <p className="font-[400] text-sm sm:text-lg lg:text-[23px] text-white font-optima">HRERA-PKL-SNP-775-2025</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;

