import Image from "next/image";
import Section1 from "./sections/section_1";
import Section2 from "./sections/section_2";
import Section3 from "./sections/section_3";
import Section4 from "./sections/section_4";
import Section5 from "./sections/section_5";
import Section6 from "./sections/section_6";
import Section7 from "./sections/section_7";
import Section8 from "./sections/section_8";
import Section9 from "./sections/section_9";
import Section10 from "./sections/section_10";
import Section11 from "./sections/section_11";
import Section12 from "./sections/section_12";
import Section13 from "./sections/section_13";
import Section14 from "./sections/section_14";
import Section15 from "./sections/section_15";
import Section16 from "./sections/section_16";

export default function MainContent() {
  return (
    <>
      <div className="mega-container">
        <div className="section relative">
          <Image
            src="/top-left.svg"
            alt="top left"
            width={500}
            height={500}
            className="absolute top-[-10px] left-[-10px] w-[50%] h-[auto] opacity-[0.1]"
          />
          <Section1 />
        </div>
        <div className="section">
          <Section2 />
        </div>
        <div className="section">
          <Section3 />
        </div>
        <div className="section relative">
          <Image
            src="/top-right.svg"
            alt="top right"
            width={500}
            height={500}
            className="absolute top-[-10px] right-[-10px] w-[50%] h-[auto] opacity-[0.1]"
          />
          <Section4 />
        </div>
        <div className="section">
          <Section5 />
        </div>
        <div className="section">
          <Section6 />
        </div>
        <div className="section">
          <Section7 />
        </div>
        <div className="section">
          <Section8 />
        </div>
        <div className="section">
          <Section9 />
        </div>
        <div className="section">
          <Section10 />
        </div>
        <div className="section">
          <Section11 />
        </div>
        <div className="section">
          <Section12 />
        </div>
        <div className="section relative">
          <Image
            src="/down-left.svg"
            alt="bottom left"
            width={500}
            height={500}
            className="absolute bottom-[-10px] left-[-10px] w-[50%] h-[auto] opacity-[0.1]"
          />
          <Section13 />
        </div>
        <div className="section">
          <Section14 />
        </div>
        <div className="section">
          <Section15 />
        </div>
        <div className="section relative">
          <Image
            src="/down-right.svg"
            alt="bottom right"
            width={500}
            height={500}
            className="absolute bottom-[-10px] right-[-10px] w-[50%] h-[auto] opacity-[0.1]"
          />
          <Section16 />
        </div>
      </div>
    </>
  );
}
