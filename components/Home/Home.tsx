import Section1 from "@/components/Home/sections/Section1";
import Section2 from "@/components/Home/sections/Section2";
import Section3 from "@/components/Home/sections/Section3";
import Section4 from "@/components/Home/sections/Section4";
import Section5 from "@/components/Home/sections/Section5";
import Section6 from "@/components/Home/sections/Section6";
import Section7 from "@/components/Home/sections/Section7";
import Section8 from "./sections/Section8";
function Home() {
    return (
        <main className="relative overflow-x-hidden">
          <div className="sticky -top-40 z-0">
          <Section1 />
          </div>
        <div className=" z-10">    
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />    
            <Section6 />
            <Section7 />
            <Section8 /></div>
        </main>
    );
}

export default Home;