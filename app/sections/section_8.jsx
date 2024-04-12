"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Red_Hat_Display } from "next/font/google";
import { FaArrowUp } from "react-icons/fa";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Section8() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div className="h-full w-full flex justify-center items-center relative">
        <a
          className="flex flex-col transition-all justify-center items-center rounded-3xl cursor-pointer"
          onPointerMove={(e) => {
            setPosition({ x: e.clientX, y: e.clientY });
          }}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() =>
            document.getElementById("about").scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            })
          }
        >
          <video
            width="1200"
            height="auto"
            muted
            autoPlay
            playsInline
            loop
            className="rounded-xl"
            style={{ width: "clamp(400px, 46.875vw, 1200px)" }}
          >
            <source src="/video/video_computer_v2.webm" type="video/webm" />
            <source src="/video/video_computer_v2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className={
              redHatDisplay.className +
              " font-black uppercase --font-m w-full flex flex-col justify-center mt-8 tablet:hidden "
            }
          >
            <FaArrowUp className="w-full text-center mb-4 flex justify-center" />
            <div className="text-center">This is one of my hobb!es.</div>
            <div className="text-center">
              <DynamicText />
            </div>
          </div>
          <div
            className={`fixed left-0 top-8 pointer-events-none tablet:block hidden ${
              isHover ? "opacity-1 left-8" : "opacity-0 left-32"
            }`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "opacity 0.5s ease-in-out, left 0.5s ease-in-out",
            }}
          >
            <h4 className="--font-m p-4 bg-black">
              This is one of my hobbies.
              <br />
              <DynamicText />
            </h4>
          </div>
        </a>
      </div>
    </>
  );
}

export function DynamicText() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Click to read identity",
        1000,
        "Click to read origins",
        1000,
        "Click to read philosophy",
        1000,
        "Click to read passions",
        1000,
        "Click to read aspirations",
        1000,
        "Click to read inspirations",
        1000,
        "Click to read my ideology",
        1000,
      ]}
      speed={50}
      repeat={Infinity}
    />
  );
}
