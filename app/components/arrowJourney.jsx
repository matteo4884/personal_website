import Image from "next/image";

export default function ArrowJourney() {
  return (
    <Image
      src={"/double_arrow.svg"}
      width={100}
      height={100}
      alt="arrow"
      style={{ width: "clamp(75px, 5.859vw, 150px)" }}
      className="absolute right-0 translate-x-[50%] rotate-90 opacity-100"
    ></Image>
  );
}
