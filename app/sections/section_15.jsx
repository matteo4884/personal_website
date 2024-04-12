import { Red_Hat_Display } from "next/font/google";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { DiCodeigniter } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiJquery } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { SiNginx } from "react-icons/si";

import Image from "next/image";

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
          style={{ fontSize: "clamp(70px, 4.688vw, 120px)" }}
          className={`${redHatDisplay.className} opacity-20 w-full text-center mb-[10px] font-black leading-[1.5] z-[-1]`}
        >
          My Skills
        </h1>
        <div className="flex gap-2 tablet:gap-4">
          <Skill
            name={"HTML"}
            image={<FaHtml5 size={"clamp(20px, 1.172vw, 30px)"} color="#000" />}
          />
          <Skill
            name={"CSS"}
            image={
              <FaCss3Alt size={"clamp(20px, 1.172vw, 30px)"} color="#000" />
            }
          />
          <Skill
            name={"JAVASCRIPT"}
            image={
              <IoLogoJavascript
                size={"clamp(20px, 1.172vw, 30px)"}
                color="#000"
              />
            }
          />
          <Skill
            name={"PHP"}
            image={<SiPhp size={"clamp(20px, 1.172vw, 30px)"} color="#000" />}
          />
        </div>
        <div className="flex gap-2 tablet:gap-4 mt-[10px]">
          <Skill
            name={"GIT"}
            image={
              <FaGitAlt size={"clamp(20px, 1.172vw, 30px)"} color="#000" />
            }
          />
          <Skill
            name={"TERMINAL"}
            image={
              <IoTerminal size={"clamp(20px, 1.172vw, 30px)"} color="#000" />
            }
          />
          <Skill
            name={"CODEIGNITER"}
            image={
              <DiCodeigniter size={"clamp(20px, 1.172vw, 30px)"} color="#000" />
            }
          />
        </div>
        <div className="flex gap-2 tablet:gap-4 mt-[10px]">
          <Skill
            name={"NEXT JS"}
            image={
              <TbBrandNextjs size={"clamp(20px, 1.172vw, 30px)"} color="#000" />
            }
          />
          <Skill
            name={"NODE JS"}
            image={
              <FaNodeJs size={"clamp(20px, 1.172vw, 30px)"} color="#000" />
            }
          />
          <Skill
            name={"REACT"}
            image={<FaReact size={"clamp(20px, 1.172vw, 30px)"} color="#000" />}
          />
          <Skill
            name={"MYSQL"}
            image={<GrMysql size={"clamp(20px, 1.172vw, 30px)"} color="#000" />}
          />
        </div>
        <div className="flex gap-2 tablet:gap-4 mt-[10px]">
          <Skill
            name={"JQUERY"}
            image={
              <SiJquery size={"clamp(20px, 1.172vw, 30px)"} color="#000" />
            }
          />
          <Skill
            name={"PHPMYADMIN"}
            image={
              <SiPhpmyadmin size={"clamp(20px, 1.172vw, 30px)"} color="#000" />
            }
          />
          <Skill
            name={"NGINX"}
            image={<SiNginx size={"clamp(20px, 1.172vw, 30px)"} color="#000" />}
          />
        </div>
      </div>
    </>
  );
}

function Skill({ name, image }) {
  return (
    <>
      <div
        style={{ padding: "clamp(10px, 0.781vw, 15px)" }}
        className="bg-[#ffffff85] rounded-full transition-all hover:bg-[#fff] group"
      >
        {image}
        <h1
          className={`${redHatDisplay.className}  pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 text-center absolute tablet:-bottom-[10%] -bottom-[15%] left-0 right-0 font-black leading-[1.5]`}
          style={{ fontSize: "clamp(50px, 2.93vw, 75px)" }}
        >
          {name}
        </h1>
      </div>
    </>
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
      <div className="p-[3vw]">
        <h1 className="text-center --font-l tablet:mb-2 mb-[20px]">
          Operating system I use:
        </h1>
        <div className="bg-[#33333383] rounded-lg overflow-hidden grid h-full w-full tablet:grid-cols-3 grid-cols-none tablet:grid-rows-none grid-rows-3">
          <div className="relative h-full w-full flex flex-col justify-center items-center --font-l">
            <Image
              src={"/os/ubuntu.jpg"}
              alt="ubuntu"
              fill
              sizes="100%"
              className="object-cover"
            />
            <h3 className={redHatDisplay.className + " absolute bottom-2"}>
              UBUNTU
            </h3>
          </div>
          <div className="relative h-full w-full flex flex-col justify-center items-center --font-l tablet:py-0 py-[20px]">
            <Image
              src={"/os/windows.webp"}
              alt="windows"
              fill
              sizes="100%"
              className="object-cover"
            />
            <h3 className={redHatDisplay.className + " absolute bottom-2"}>
              WINDOWS
            </h3>
          </div>
          <div className="relative h-full w-full flex flex-col justify-center items-center --font-l">
            <Image
              src={"/os/kali_linux.webp"}
              alt="kali linux"
              fill
              sizes="100%"
              className="object-cover"
            />
            <h3 className={redHatDisplay.className + " absolute bottom-2"}>
              KALI LINUX
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
