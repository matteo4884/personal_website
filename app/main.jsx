"use client";

import { useEffect, useState } from "react";
import MainContent from "./mainContent";
import Image from "next/image";

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
    handleResize();
    const handleMouseMove = (e) => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      const triggerX = width / 4;
      const triggerY = height / 3;

      if (mouseY > height - triggerY) {
        if (mouseY - (height - triggerY) > triggerY / 2) {
          setIsScrollingY("goDownFast");
        } else {
          setIsScrollingY("goDownSlow");
        }
      } else if (mouseY < triggerY) {
        if (height - mouseY - (height - triggerY) > triggerY / 2) {
          setIsScrollingY("goUpFast");
        } else {
          setIsScrollingY("goUpSlow");
        }
      } else {
        setIsScrollingY("false");
      }

      if (mouseX > width - triggerX) {
        if (mouseX - (width - triggerX) > triggerX / 2) {
          setIsScrollingX("goRightFast");
        } else {
          setIsScrollingX("goRightSlow");
        }
      } else if (mouseX < triggerX) {
        if (width - mouseX - (width - triggerX) > triggerX / 2) {
          setIsScrollingX("goLeftFast");
        } else {
          setIsScrollingX("goLeftSlow");
        }
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

    if (isScrollingY === "goDownFast") {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, 4);
      }, 10);
    } else if (isScrollingY === "goDownSlow") {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, 2);
      }, 10);
    } else if (isScrollingY === "goUpFast") {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, -4);
      }, 10);
    } else if (isScrollingY === "goUpSlow") {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, -2);
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

    if (isScrollingX === "goRightFast") {
      scrollInterval = setInterval(() => {
        window.scrollBy(4, 0);
      }, 10);
    } else if (isScrollingX === "goRightSlow") {
      scrollInterval = setInterval(() => {
        window.scrollBy(2, 0);
      }, 10);
    } else if (isScrollingX === "goLeftFast") {
      scrollInterval = setInterval(() => {
        window.scrollBy(-4, 0);
      }, 10);
    } else if (isScrollingX === "goLeftSlow") {
      scrollInterval = setInterval(() => {
        window.scrollBy(-2, 0);
      }, 10);
    } else {
      clearInterval(scrollInterval);
    }

    isMouseOutside && clearInterval(scrollInterval);

    return () => clearInterval(scrollInterval);
  }, [isScrollingX, isMouseOutside, isMobile]);

  return (
    <>
      <MainContent />
    </>
  );
}
