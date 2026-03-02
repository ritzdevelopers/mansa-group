import styles from "../page.module.css"

function Section1() {
    return (
        <section className="w-full relative h-screen">
            <video src="/home/s1/Mansha-BaNNer.mp4" autoPlay muted loop className="w-full z-1 h-full object-cover"></video>

            {/* Absolute Positioned Overlay  */}
            <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#0A1E2FB2]">
                <div className="w-full h-full relative flex justify-end items-end pr-20 pb-4">
                    <div className={`flex flex-col justify-center items-center text-center  px-6 py-4 ${styles.glassCard}`}>
                        <p className="font-[400] text-[23px] text-white font-optima">
                            Sector 83 - 84, Sonipat
                        </p>
                        <p className="font-[400] text-[23px] text-white font-optima">HRERA-PKL-SNP-775-2025</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;

