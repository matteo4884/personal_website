"use client";

import { useRef, useState } from "react";

export default function Header({ setIsStopped }) {
  return (
    <>
      <div
        className={`fixed flex gap-4 z-[101]`}
        style={{
          top: "clamp(10px, 1.042vw, 20px)",
          left: "clamp(10px, 1.042vw, 20px)",
        }}
      >
        <Menu setIsStopped={setIsStopped} />
      </div>
    </>
  );
}

export function Menu({ setIsStopped }) {
  const menu = useRef();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`p-2 supported-backdrop-filter bg-[#86868640] z-[101] transition rounded-[10px] h-max`}
      ref={menu}
      onMouseOver={() => (setIsHover(true), setIsStopped(true))}
      onMouseLeave={() => (setIsHover(false), setIsStopped(false))}
    >
      <div className="flex flex-col justify-start items-start --font-m">
        <div className="uppercase">menu</div>
        <div className={`${isHover ? "block" : "hidden"}`}>
          <div className="font-thin">
            <ul>
              <li className="line-through cursor-pointer hover:no-underline">
                <a
                  onClick={() =>
                    document.getElementById("presentation").scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "center",
                    })
                  }
                >
                  Presentation
                </a>
              </li>
              <li className="line-through cursor-pointer hover:no-underline">
                <a
                  onClick={() =>
                    document.getElementById("about").scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "center",
                    })
                  }
                >
                  About
                </a>
              </li>
              <li className="line-through cursor-pointer hover:no-underline">
                <a
                  onClick={() =>
                    document.getElementById("skills").scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "center",
                    })
                  }
                >
                  Skills
                </a>
              </li>
              <li className="line-through cursor-pointer hover:no-underline">
                <a
                  onClick={() =>
                    document.getElementById("contacts").scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "center",
                    })
                  }
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
