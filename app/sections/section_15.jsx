import { Red_Hat_Display } from "next/font/google";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { SiKalilinux } from "react-icons/si";
import { IoTerminal } from "react-icons/io5";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Section15() {
  return (
    <>
      <div className="single_section grid grid-cols-2 grid-rows-2 h-full w-full">
        <TopLeft />
        <TopRight />
        <BottomLeft />
        <BottomRight />
      </div>
    </>
  );
}

function TopLeft() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center relative"
        id="skills"
      >
        <h1
          style={{ fontSize: "clamp(200px, 31.25vh, 3000px)" }}
          className={`${redHatDisplay.className} opacity-20 absolute top-0 left-0 uppercase mb-[10px] font-black leading-[0.75] z-[-1]`}
        >
          My
          <br />
          ski
          <br className="block tablet:hidden" />
          lls
        </h1>
        <div className="flex gap-2 tablet:gap-4">
          <Skill
            name={""}
            image={<SiPhp size={"clamp(25px, 2.604vw, 50px)"} color="#000" />}
          />
          <Skill
            name={""}
            image={
              <IoLogoJavascript
                size={"clamp(25px, 2.604vw, 50px)"}
                color="#000"
              />
            }
          />
          <Skill
            name={""}
            image={<FaHtml5 size={"clamp(25px, 2.604vw, 50px)"} color="#000" />}
          />
          <Skill
            name={""}
            image={
              <FaCss3Alt size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={""}
            image={
              <FaGitAlt size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
        </div>
        <div className="flex gap-2 tablet:gap-4 mt-[10px]">
          <Skill
            name={""}
            image={
              <FaUbuntu size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={""}
            image={
              <SiKalilinux size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={""}
            image={
              <IoTerminal size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
        </div>
      </div>
    </>
  );
}

function Skill({ name, image }) {
  return (
    <div
      style={{ padding: "clamp(10px, 0.781vw, 15px)" }}
      className="bg-[#ffffff85] rounded-full transition-all hover:bg-[#fff]"
    >
      <h1>{name}</h1>
      {image}
    </div>
  );
}

function TopRight() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1>top right</h1>
      </div>
    </>
  );
}

function BottomLeft() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1>bottom left</h1>
      </div>
    </>
  );
}

function BottomRight() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1>bottom right</h1>
      </div>
    </>
  );
}
