"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [key, setKey] = useState(0);
  useEffect(() => {
    const primo = document.getElementById("primo");

    function handleWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    function getWidth() {
      setWidth(primo.offsetWidth);
      setKey((prevKey) => prevKey + 1);
    }
    getWidth();
    window.addEventListener("resize", () => {
      handleWindowWidth();
      if (window.innerWidth != windowWidth) {
        getWidth;
      }
    });

    return () => {
      window.removeEventListener("resize", getWidth);
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, [windowWidth, width]);
  return (
    <div key={key}>
      <motion.div
        animate={{ x: -width }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="fixed flex w-max --font-s bottom-0 uppercase z-[101] pointer-events-none"
      >
        <div id="primo">
          Life&apos;s good My adventure Love yourself Life&apos;s good My
          adventure Love yourself Life&apos;s good My adventure Love yourself
          Life&apos;s good My adventure Love yourself Life&apos;s good My
          adventure Love yourself Life&apos;s good My adventure Love yourself
          Life&apos;s good My adventure My adventure Love yourself Life&apos;s
          good My adventure&nbsp;
        </div>
        <div id="secondo">
          Life&apos;s good My adventure Love yourself Life&apos;s good My
          adventure Love yourself Life&apos;s good My adventure Love yourself
          Life&apos;s good My adventure Love yourself Life&apos;s good My
          adventure Love yourself Life&apos;s good My adventure Love yourself
          Life&apos;s good My adventure My adventure Love yourself Life&apos;s
          good My adventure&nbsp;
        </div>
      </motion.div>
    </div>
  );
}
