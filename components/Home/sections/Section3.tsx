"use client";

import S3Card from "./cards/S3Card";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Section3.module.css";

const CARD_WIDTH = 633;
const CARD_GAP = 24;
const SLIDE_STEP = CARD_WIDTH + CARD_GAP;

const VISIBLE_CARDS = 3;
const VIEWPORT_WIDTH_PX = CARD_WIDTH * VISIBLE_CARDS + CARD_GAP * (VISIBLE_CARDS - 1);

const CARD_INDEXES = [
    {
        img:"/home/s3/VegaStreet2.jpeg",
        title:"Vega Street",
    },
    {
        img:"/home/s3/aagman-img.jpg",
        title:"",
    },
    {
        img:"/home/s3/VegaStreet3.jpeg",
        title:"Vega Street",
    },
    {
        img:"/home/s3/aagman-img2.jpg",
        title:"",
    },
    
];
// const cardData = 
const TOTAL_CARDS = CARD_INDEXES.length;
const MAX_TRANSLATE_DESKTOP = TOTAL_CARDS > 1 ? SLIDE_STEP * (TOTAL_CARDS - 1) : 0;

function getMaxTranslateAndEnd(wrapper: HTMLDivElement) {
    const firstCard = wrapper.children[0] as HTMLElement | undefined;
    if (!firstCard || wrapper.children.length === 0) {
        return { maxTranslate: MAX_TRANSLATE_DESKTOP, end: MAX_TRANSLATE_DESKTOP + 800 };
    }
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gapStr = getComputedStyle(wrapper).gap;
    const gap = parseFloat(gapStr) || 24;
    const maxTranslate = TOTAL_CARDS > 1 ? (cardWidth + gap) * (TOTAL_CARDS - 1) : 0;
    const end = Math.max(maxTranslate + 400, 400 * TOTAL_CARDS);
    return { maxTranslate, end };
}

function Section3() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsWrapperRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeCard, setActiveCard] = useState(0);
    const [sectionInView, setSectionInView] = useState(false);
    const maxTranslateRef = useRef(MAX_TRANSLATE_DESKTOP);

    // Defer ScrollTrigger + video until section is near viewport (reduces Vercel/prod lag)
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) setSectionInView(true);
            },
            { rootMargin: "20% 0px", threshold: 0 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!sectionInView) return;
        gsap.registerPlugin(ScrollTrigger);
        const section = sectionRef.current;
        const wrapper = cardsWrapperRef.current;
        if (!section || !wrapper || TOTAL_CARDS === 0) return;

        const sectionEl = section;
        const wrapperEl = wrapper;
        let scrollEndTimeoutId: ReturnType<typeof setTimeout> | null = null;

        function createTrigger() {
            const { maxTranslate, end } = getMaxTranslateAndEnd(wrapperEl);
            maxTranslateRef.current = maxTranslate;

            return ScrollTrigger.create({
                trigger: sectionEl,
                start: "top -20%",
                end: `+=${end}`,
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const x = -progress * maxTranslateRef.current;
                    gsap.set(wrapperEl, { x, force3D: true });
                    const closestIndex = Math.min(
                        TOTAL_CARDS - 1,
                        Math.max(0, Math.round(progress * (TOTAL_CARDS - 1)))
                    );
                    wrapperEl.dataset.activeIndex = String(closestIndex);
                    if (scrollEndTimeoutId) clearTimeout(scrollEndTimeoutId);
                    scrollEndTimeoutId = setTimeout(() => {
                        setActiveCard(closestIndex);
                        scrollEndTimeoutId = null;
                    }, 120);
                },
            });
        }

        let trigger: ScrollTrigger | null = null;
        const rafId = requestAnimationFrame(() => {
            trigger = createTrigger();
        });

        const handleResize = () => {
            if (!wrapperEl || wrapperEl.children.length === 0) return;
            trigger?.kill();
            trigger = createTrigger();
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            if (scrollEndTimeoutId) clearTimeout(scrollEndTimeoutId);
            cancelAnimationFrame(rafId);
            trigger?.kill();
            window.removeEventListener("resize", handleResize);
        };
    }, [sectionInView]);

    return (
        <section
            className="relative w-full py-8 px-4 sm:py-22 sm:px-8 lg:py-[76px] lg:px-16 flex justify-center overflow-hidden items-center bg-black"
            ref={sectionRef}
        >
            <video
                src={sectionInView ? "/animated-bg.mp4" : undefined}
                autoPlay={sectionInView}
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 z-0 h-full w-full object-cover"
                aria-hidden
            />
            {/* Centered Align Container  */}
            <div className="relative z-10 w-full max-w-full md:h-auto h-screen flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-20">
                {/* Section Heading  */}
                <div className="flex flex-col w-full gap-6 sm:gap-8 lg:gap-10 justify-center items-center text-center px-2">
                    <div className="main2">
                        <h1 className="h1 uppercase font-optima">Branded</h1>
                        <h2 className="first h2 uppercase font-optima">Luxury Collection</h2>
                        <h2 className="second h2 uppercase font-optima">Luxury Collection</h2>
                    </div>

                    <img src="/home/s3/border-bottom.png" alt="Mansa Group" className="w-48 sm:w-56 lg:w-[279px] h-auto lg:h-[59px]" />
                </div>

                <div
                    className="flex justify-start items-center mx-auto w-full min-h-[280px] h-[55vw] sm:h-[450px] lg:h-[633px] max-h-[633px]"
                    style={{ width: VIEWPORT_WIDTH_PX, maxWidth: "100%" }}
                >
                    <div
                        ref={cardsWrapperRef}
                        className={`${styles.section3CardsWrapper} flex items-center gap-4 sm:gap-6 px-4 sm:px-8 lg:px-18 min-h-[280px] h-[55vw] sm:h-[450px] lg:h-[633px] max-h-[633px]`}
                        style={{ willChange: "transform" }}
                        data-active-index="0"
                    >
                        {CARD_INDEXES.map((item, index) => (
                            <S3Card
                                index={index}
                                img={item.img}
                                title={item.title}
                                key={index}
                                ref={(el) => { cardRefs.current[index] = el; }}
                                cardClassName={styles.section3Card}
                                titleClassName={styles.section3CardTitle}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3;