"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Section10() {
  const el = useRef();
  useEffect(() => {
    el.current.scrollIntoView();
  }, []);
  return (
    <>
      <div
        ref={el}
        className="w-screen h-screen flex justify-center items-center"
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
            className={`${bebasNeue.className} absolute -bottom-[10%] w-max --font-xxl z-10 scale-125`}
          >
            Hi! I am a Developer
          </h1>
        </div>
      </div>
    </>
  );
}
