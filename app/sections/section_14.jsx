import { Allura, Red_Hat_Display } from "next/font/google";

const allura = Allura({ subsets: ["latin"], weight: "400" });
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Section14() {
  return (
    <>
      <div className="relative flex justify-center align-baseline">
        <div className="absolute top-0 tablet:w-auto w-screen">
          <p className={redHatDisplay.className + " --font-xl font-black"}>
            Discover me <span className={allura.className}>:)</span>
          </p>
        </div>
      </div>
    </>
  );
}
