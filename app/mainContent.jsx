"use client";

import { useEffect, useRef } from "react";

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
import Section17 from "./sections/section_17";
import Section18 from "./sections/section_18";
import Section19 from "./sections/section_19";
import Section20 from "./sections/section_20";

export default function MainContent({ setIsStopped }) {
  const main = useRef();
  useEffect(() => {
    main.current.addEventListener("wheel", (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <>
      <div className="mega-container" ref={main}>
        <div className="section relative">
          <Corner styles={"absolute top-[50px] left-[50px]"} />
          <Section1 />
        </div>
        <div className="section">
          <Section2 />
        </div>
        <div className="section">
          <Section3 />
        </div>
        <div className="section relative">
          <Corner styles={"absolute top-[50px] right-[50px] rotate-90"} />
          <Section4 />
        </div>
        <div className="section">
          <Section5 setIsStopped={setIsStopped} />
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
        <div className="section">
          <Section13 />
        </div>
        <div className="section">
          <Section14 />
        </div>
        <div className="section">
          <Section15 />
        </div>
        <div className="section">
          <Section16 />
        </div>
        <div className="section relative">
          <Corner styles={"absolute bottom-[50px] left-[50px] -rotate-90"} />
          <Section17 />
        </div>
        <div className="section">
          <Section18 />
        </div>
        <div className="section">
          <Section19 />
        </div>
        <div className="section relative">
          <Corner styles={"absolute bottom-[50px] right-[50px] rotate-180"} />
          <Section20 />
        </div>
      </div>
    </>
  );
}

export function Corner({ styles }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="150px"
      height="150px"
      viewBox="0 0 1280.000000 1280.000000"
      preserveAspectRatio="xMidYMid meet"
      className={`${styles} opacity-[0.2]`}
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#ffffff"
        stroke="none"
      >
        <path
          d="M0 11645 l0 -1155 1155 0 1155 0 0 1155 0 1155 -1155 0 -1155 0 0
-1155z m1820 0 l0 -665 -665 0 -665 0 0 665 0 665 665 0 665 0 0 -665z"
        />
        <path
          d="M2738 11433 l-3 -1368 -1367 -3 -1368 -2 0 -5030 0 -5030 245 0 245
0 0 2735 0 2735 440 0 440 0 0 -1595 0 -1595 930 0 930 0 -2 243 -3 242 -682
3 -683 2 0 1350 0 1350 683 2 682 3 0 1610 0 1610 -927 3 -928 2 0 -930 0
-930 245 0 245 0 0 685 0 685 438 -2 437 -3 3 -1122 2 -1123 -1125 0 -1125 0
0 1805 0 1805 1368 2 1367 3 3 1368 2 1367 1805 0 1805 0 0 -440 0 -440 -1370
0 -1370 0 3 -927 2 -928 1610 0 1610 0 3 683 2 682 1350 0 1350 0 2 -682 3
-683 243 -3 242 -2 0 930 0 930 -1595 0 -1595 0 0 440 0 440 2735 0 2735 0 0
245 0 245 -5030 0 -5030 0 -2 -1367z m4102 -933 l0 -440 -1122 2 -1123 3 -3
438 -2 437 1125 0 1125 0 0 -440z"
        />
        <path
          d="M4106 8691 c-3 -5 -5 -526 -3 -1157 l2 -1149 1155 0 1155 0 0 1155 0
1155 -1152 2 c-667 2 -1154 -1 -1157 -6z m1824 -1151 l0 -670 -670 0 -670 0 0
670 0 670 670 0 670 0 0 -670z"
        />
      </g>
    </svg>
  );
}
