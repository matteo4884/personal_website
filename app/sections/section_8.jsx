"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

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
          className="flex transition-all justify-center items-center rounded-3xl cursor-pointer"
          onPointerMove={(e) => {
            setPosition({ x: e.clientX, y: e.clientY });
          }}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
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
            className={`fixed left-0 top-8 pointer-events-none ${
              isHover ? "opacity-1 left-8" : "opacity-0 left-32"
            }`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "opacity 0.5s ease-in-out, left 0.5s ease-in-out",
            }}
          >
            <h4 className="--font-m p-4 bg-black">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Click to read philosophy",
                  1000,
                  "Click to read identity",
                  1000,
                  "Click to read future",
                  1000,
                  "Click to read idea",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h4>
          </div>
        </a>
      </div>
    </>
  );
}
