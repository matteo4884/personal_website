"use client";

import { useEffect, useRef, useState } from "react";
import MainContent from "./mainContent";
import { IoIosHelpCircle } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi";
import Header from "./header";

export default function Main() {
  const [isScrollingY, setIsScrollingY] = useState("false");
  const [isScrollingX, setIsScrollingX] = useState("false");
  const [isMouseOutside, setIsMouseOutside] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

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
    if (isMobile || isStopped) {
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
  }, [isScrollingY, isMouseOutside, isMobile, isStopped]);

  useEffect(() => {
    if (isMobile || isStopped) {
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
  }, [isScrollingX, isMouseOutside, isMobile, isStopped]);

  return (
    <>
      <Header setIsStopped={setIsStopped} />
      <MainContent setIsStopped={setIsStopped} />
      <BlurredBackground />
      <Guide setIsStopped={setIsStopped} />
      <Informations setIsStopped={setIsStopped} />
    </>
  );
}

export function BlurredBackground() {
  return (
    <>
      <div
        id="right_blur"
        className="fixed -right-[60px] top-0 h-screen w-[100px] bg-[#000000] blur-[20px] z-[100] pointer-events-none"
      ></div>
      <div
        id="left_blur"
        className="fixed -left-[60px] top-0 h-screen w-[100px] bg-[#000000] blur-[20px] z-[100] pointer-events-none"
      ></div>
      <div
        id="top_blur"
        className="fixed -top-[60px] h-[100px] w-screen bg-[#000000] blur-[20px] z-[100] pointer-events-none"
      ></div>
      <div
        id="bottom_blur"
        className="fixed -bottom-[60px] h-[100px] w-screen bg-[#000000] blur-[20px] z-[100] pointer-events-none"
      ></div>
    </>
  );
}

export function Guide({ setIsStopped }) {
  const guide = useRef();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`fixed p-2 backdrop-blur-[3px] bg-[#86868640] z-[101] transition rounded-[10px]`}
      style={{
        bottom: "clamp(20px, 1.563vw, 30px)",
        left: "clamp(10px, 1.042vw, 20px)",
      }}
      ref={guide}
      onMouseOver={() => (setIsHover(true), setIsStopped(true))}
      onMouseLeave={() => (setIsHover(false), setIsStopped(false))}
    >
      <div className="flex justify-start items-end --font-m">
        <IoIosHelpCircle size={25} />
        <div className={`pl-2  ${isHover ? "block" : "hidden"}`}>
          {/* <span
            className="font-bold"
            style={{ fontSize: "clamp(14px, 0.938vw, 18px)" }}
          >
            For stupids
          </span> */}
          <p className="font-thin">
            Move the mouse to the edges to
            <br />
            scroll in the desired direction.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Informations({ setIsStopped }) {
  const guide = useRef();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`fixed p-2 backdrop-blur-[3px] bg-[#86868640] z-[101] transition rounded-[10px]`}
      style={{
        bottom: "clamp(20px, 1.563vw, 30px)",
        right: "clamp(10px, 1.042vw, 20px)",
      }}
      ref={guide}
      onMouseOver={() => (setIsHover(true), setIsStopped(true))}
      onMouseLeave={() => (setIsHover(false), setIsStopped(false))}
    >
      <div className="flex flex-row-reverse justify-start items-end">
        <HiInformationCircle size={25} />
        <div className={`pr-2  ${isHover ? "block" : "hidden"}`}>
          <p className="font-thin --font-m">
            © {new Date().getFullYear()} matteobeu
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
