import { Red_Hat_Display, Allura } from "next/font/google";
import { MdSubdirectoryArrowLeft } from "react-icons/md";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const allura = Allura({ subsets: ["latin"], weight: "400" });

export default function Section4() {
  return (
    <>
      <div className="relative flex justify-end items-start h-full w-full p-[200px]">
        <p className="tablet:--font-xl --font-l">
          01010100 01101000 01101001 01110011 00100000 01110111 01100101{" "}
          <br className="tablet:block hidden" />
          01100010 01110011 01101001 01110100 01100101 00100000 01101001{" "}
          <br className="tablet:block hidden" />
          01110011 00100000 01110100 01101000 01100101 00100000 01100011{" "}
          <br className="tablet:block hidden" />
          01101000 01100001 01101111 01110100 01101001 01100011 00100000{" "}
          <br className="tablet:block hidden" />
          01110010 01100101 01110000 01110010 01100101 01110011 01100101{" "}
          <br className="tablet:block hidden" />
          01101110 01110100 01100001 01110100 01101001 01101111 01101110{" "}
          <br className="tablet:block hidden" />
          00100000 01101111 01100110 00100000 01101101 01111001 00100000{" "}
          <br className="tablet:block hidden" />
          01101101 01101001 01101110 01100100
        </p>
        <div className="absolute bottom-0 tablet:bottom-[20%] left-0 tablet:left-[20%] cursor-pointer">
          <div className="relative">
            <span
              className={
                allura.className +
                " absolute bottom-0 text-red-600 opacity-40 z-[-1] w-max --font-xxl"
              }
            >
              you lost?
            </span>
            <a className={redHatDisplay.className + " font-black"}>
              <div className="flex">
                <span className="--font-l">Return to center</span>
                <MdSubdirectoryArrowLeft size={30} className="ml-2" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
