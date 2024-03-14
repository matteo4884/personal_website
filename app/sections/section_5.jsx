import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Section5() {
  return (
    <div className="w-full h-full relative grid grid-cols-4 grid-rows-4 gap-2">
      <Text />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
      <SectionAbout />
    </div>
  );
}

function Text() {
  return (
    <div
      className={`${redHatDisplay.className} absolute top-0 left-0 w-full h-full flex justify-center items-center`}
      id="about"
    >
      <h2
        className="uppercase font-black leading-[0.75] tracking-tighter stroke_text"
        style={{ fontSize: "clamp(100px, 13.021vw, 350px)" }}
      >
        Do you want to know more about me ?
      </h2>
    </div>
  );
}

function SectionAbout() {
  return (
    <div className="flex justify-center items-center border rounded-xl">
      prova
    </div>
  );
}
