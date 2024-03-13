"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOut, setIsOut] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    document.addEventListener("mousemove", setFromEvent);
    document.addEventListener("mouseleave", function (event) {
      if (
        event.clientY <= 0 ||
        event.clientX <= 0 ||
        event.clientX >= window.innerWidth ||
        event.clientY >= window.innerHeight
      ) {
        setIsOut(true);
      }
    });
    document.addEventListener("mouseenter", function (event) {
      if (
        event.clientY >= 0 ||
        event.clientX >= 0 ||
        event.clientX <= window.innerWidth ||
        event.clientY <= window.innerHeight
      ) {
        setIsOut(false);
      }
    });
    const allLinks = document.querySelectorAll("a");
    allLinks.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        setIsHover(true);
      });
      link.addEventListener("mouseleave", function () {
        setIsHover(false);
      });
    });
    return () => {
      document.removeEventListener("mousemove", setFromEvent);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        translate: `${position.x}px ${position.y}px`,
        scale: `${isHover ? "2" : ""}`,
        backgroundColor: `${isHover ? "#D1251F68" : ""}`,
      }}
      className={`fixed w-[30px] h-[30px] -top-[10px] -left-[15px] transition-[scale,background-color] rounded-full bg-white z-[102] mix-blend-difference pointer-events-none ${
        isOut ? "opacity-[0]" : "opacity-[1]"
      } ${isHidden ? "hidden" : ""}`}
      id="cursor"
    ></div>
  );
}
