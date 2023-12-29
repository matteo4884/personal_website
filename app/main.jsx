"use client";

import { useEffect, useState } from "react";

export default function Main() {
  const [isScrollingY, setIsScrollingY] = useState("false");
  const [isScrollingX, setIsScrollingX] = useState("false");
  const [isMouseOutside, setIsMouseOutside] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < window.innerHeight && window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    const handleMouseMove = (e) => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      const triggerX = width / 4;
      const triggerY = height / 4;

      if (mouseY > height - triggerY) {
        setIsScrollingY("goDown");
      } else if (mouseY < triggerY) {
        setIsScrollingY("goUp");
      } else {
        setIsScrollingY("false");
      }

      if (mouseX > width - triggerX) {
        setIsScrollingX("goRight");
      } else if (mouseX < triggerX) {
        setIsScrollingX("goLeft");
      } else {
        setIsScrollingX("false");
      }
    };

    const handleMouseLeave = () => {
      setIsMouseOutside(true);
    };

    const handleMouseEnter = () => {
      setIsMouseOutside(false);
    };

    document.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);
    document
      .querySelector("body")
      .addEventListener("mouseleave", handleMouseLeave);
    document
      .querySelector("body")
      .addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.addEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      document
        .querySelector("body")
        .removeEventListener("mouseleave", handleMouseLeave);
      document
        .querySelector("body")
        .removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    let scrollInterval;

    if (isScrollingY === "goDown") {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, 4);
      }, 10);
    } else if (isScrollingY === "goUp") {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, -4);
      }, 10);
    } else {
      clearInterval(scrollInterval);
    }

    isMouseOutside && clearInterval(scrollInterval);

    return () => clearInterval(scrollInterval);
  }, [isScrollingY, isMouseOutside, isMobile]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    let scrollInterval;

    if (isScrollingX === "goRight") {
      scrollInterval = setInterval(() => {
        window.scrollBy(4, 0);
      }, 10);
    } else if (isScrollingX === "goLeft") {
      scrollInterval = setInterval(() => {
        window.scrollBy(-4, 0);
      }, 10);
    } else {
      clearInterval(scrollInterval);
    }

    isMouseOutside && clearInterval(scrollInterval);

    return () => clearInterval(scrollInterval);
  }, [isScrollingX, isMouseOutside, isMobile]);

  return (
    <>
      <div className="w-[5000px] h-[5000px]">test</div>
    </>
  );
}
