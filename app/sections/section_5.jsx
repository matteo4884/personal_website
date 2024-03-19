"use client";

import { Red_Hat_Display } from "next/font/google";
import { ABOUT } from "../data/about";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Section5({ setIsStopped }) {
  return (
    <div className="w-full h-full relative p-12 grid grid-cols-4 grid-rows-4 gap-2">
      <Text />
      {ABOUT.map((el) => {
        return (
          <SectionAbout
            name={el.name}
            image={el.image}
            parag={el.text}
            setIsStopped={setIsStopped}
            key={el.id}
          />
        );
      })}
    </div>
  );
}

function Text() {
  return (
    <div
      className={`${redHatDisplay.className} absolute p-12 top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none`}
      id="about"
    >
      <h2
        className="uppercase font-black leading-[0.75] tracking-tighter stroke_text opacity-[1] z-30"
        style={{ fontSize: "clamp(150px, 13.021vw, 350px)" }}
      >
        Do you want to know more about me ?
      </h2>
    </div>
  );
}

function SectionAbout({ name, image, parag, setIsStopped }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group hover:grayscale-0 hover:opacity-100 z-40 transition-all mouse-hover flex justify-center items-center rounded-xl bg-no-repeat bg-cover bg-center grayscale opacity-50"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h4 className="uppercase transition-all opacity-0 group-hover:opacity-100">
          {name}
        </h4>
      </div>
      <div
        onMouseOver={() => setIsStopped(true)}
        onMouseLeave={() => setIsStopped(false)}
        onClick={() => setIsOpen(false)}
        className={`z-[102] pointer-events-none transition-all duration-500 flex fixed top-0 left-0 w-screen h-screen justify-center items-center bg-[#000000dc] ${
          isOpen ? "pointer-events-auto" : "opacity-0"
        }`}
      >
        <div className="rounded-lg bg-[#ddd] h-[75%] w-[50%] --font-m relative p-4 text-[#000]">
          <RxCross2
            size={25}
            color="#000"
            className="absolute top-2 right-2 mouse-hover"
            onClick={() => setIsOpen(false)}
          />
          <h1>{name}</h1>
          <p className="">{parag}</p>
        </div>
      </div>
    </>
  );
}
