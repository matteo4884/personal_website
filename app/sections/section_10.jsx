"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Section10() {
  const el = useRef();
  useEffect(() => {
    el.current.scrollIntoView({
      behavior: "instant",
      block: "center",
      inline: "center",
    });
  }, []);
  return (
    <>
      <div
        ref={el}
        className="w-full h-full flex justify-center items-center single_section relative"
        id="presentation"
      >
        <div className="relative">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              times: [0, 0.5, 1],
            }}
          >
            <Image
              src={"/me.jpg"}
              alt="matteo beu"
              width={300}
              height={300}
              className="h-[60vh] w-auto"
            ></Image>
          </motion.div>
          <h1
            className={`${bebasNeue.className} absolute -top-[10%] left-0 right-0 w-max --font-xxl z-10`}
          >
            Hello!
          </h1>
          <h1
            className={`${bebasNeue.className} absolute -bottom-[10%] w-max --font-xxl z-10`}
          >
            I am a Developer
          </h1>
        </div>
        <div className="absolute top-[5%] left-[5%]">
          <Image src={"/star_icon.svg"} width={100} height={100} alt="star" />
        </div>
      </div>
    </>
  );
}
