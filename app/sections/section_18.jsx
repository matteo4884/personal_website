import { useState, useEffect } from "react";
import { Allura, Red_Hat_Display } from "next/font/google";

const allura = Allura({ subsets: ["latin"], weight: "400" });
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Section18() {
  return (
    <div className="relative">
      <div
        className={
          allura.className +
          " text-red-600 absolute -translate-y-[75%] z-[-1] opacity-50"
        }
        style={{ fontSize: "clamp(200px, 11.719vw, 300px)" }}
      >
        yof :)
      </div>
      <h1 className={redHatDisplay.className + ` font-black --font-xxl`}>
        <YearsOfExperience />
      </h1>
      <div className="mt-4">
        what&apos;s this? I guess we&apos;ll never know
      </div>
    </div>
  );
}

export function YearsOfExperience() {
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const d1 = new Date("Feb, 09, 2023");
    const interval = setInterval(() => {
      const d2 = new Date();
      const t2 = d2.getTime();
      const t1 = d1.getTime();
      setExperience(
        parseFloat((t2 - t1) / (24 * 3600 * 1000) / 365).toFixed(9)
      );
    }, 100);

    return () => clearInterval(interval);
  }, [experience]);

  return <span>{experience}</span>;
}
