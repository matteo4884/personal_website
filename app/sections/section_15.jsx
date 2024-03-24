import { Red_Hat_Display } from "next/font/google";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { SiKalilinux } from "react-icons/si";
import { IoTerminal } from "react-icons/io5";
import { DiCodeigniter } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiJquery } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { SiNginx } from "react-icons/si";

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
          style={{ fontSize: "clamp(200px, 5vw, 3000px)" }}
          className={`${redHatDisplay.className} opacity-20 absolute -translate-y-[100%] top-0 left-0 w-full text-center mb-[10px] font-black leading-[0.75] z-[-1]`}
        >
          My Skills
        </h1>
        <div className="flex gap-2 tablet:gap-4">
          <Skill
            name={"HTML"}
            image={<FaHtml5 size={"clamp(25px, 2.604vw, 50px)"} color="#000" />}
          />
          <Skill
            name={"CSS"}
            image={
              <FaCss3Alt size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={"JAVASCRIPT"}
            image={
              <IoLogoJavascript
                size={"clamp(25px, 2.604vw, 50px)"}
                color="#000"
              />
            }
          />
          <Skill
            name={"PHP"}
            image={<SiPhp size={"clamp(25px, 2.604vw, 50px)"} color="#000" />}
          />
          <Skill
            name={"GIT"}
            image={
              <FaGitAlt size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
        </div>
        <div className="flex gap-2 tablet:gap-4 mt-[10px]">
          <Skill
            name={"UBUNTU"}
            image={
              <FaUbuntu size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={"KALI LINUX"}
            image={
              <SiKalilinux size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={"TERMINAL"}
            image={
              <IoTerminal size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={"CODEIGNITER"}
            image={
              <DiCodeigniter size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={"NEXT JS"}
            image={
              <TbBrandNextjs size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={"NODE JS"}
            image={
              <FaNodeJs size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
        </div>
        <div className="flex gap-2 tablet:gap-4 mt-[10px]">
          <Skill
            name={"REACT"}
            image={<FaReact size={"clamp(25px, 2.604vw, 50px)"} color="#000" />}
          />
          <Skill
            name={"MYSQL"}
            image={<GrMysql size={"clamp(25px, 2.604vw, 50px)"} color="#000" />}
          />
          <Skill
            name={"JQUERY"}
            image={
              <SiJquery size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={"PHPMYADMIN"}
            image={
              <SiPhpmyadmin size={"clamp(25px, 2.604vw, 50px)"} color="#000" />
            }
          />
          <Skill
            name={"NGINX"}
            image={<SiNginx size={"clamp(25px, 2.604vw, 50px)"} color="#000" />}
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
          className={`${redHatDisplay.className} -translate-x-[50%] translate-y-[100%] pointer-events-none opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center absolute bottom-0 left-0 right-0 font-black leading-[0.75]`}
          style={{ fontSize: "clamp(75px, 7vw, 3000px)" }}
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
      <div className="flex justify-center items-center">
        <h1>bottom right</h1>
      </div>
    </>
  );
}
