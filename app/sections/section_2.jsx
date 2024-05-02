import { Bebas_Neue } from "next/font/google";
import ArrowJourney from "../components/arrowJourney";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Section2() {
  return (
    <>
      <div className="w-full h-full flex py-[3%] pl-[3%]" id="journey">
        <div className="relative w-[50%] h-[100%] flex flex-col justify-center items-center bg-[#eeeeee1a] ">
          <div
            className={
              bebasNeue.className +
              ` absolute text-[15vw] opacity-5 pointer-events-none w-full h-full flex justify-center items-center text-center`
            }
          >
            2014
            <br />
            2020
          </div>
          <div className="w-[50%]">
            <div className="uppercase p-[10px] pb-[7.5px] rounded-full bg-red-500 w-max leading-none">
              study
            </div>
            <br />
            <div className={`--font-l`}>Economic Technical Institute</div>
            <br />
            <div className="--font-s">
              ~{" "}
              <a href="https://www.iisvittorioveneto.edu.it/">
                IIS Vittorio Veneto
              </a>
            </div>
          </div>
          <ArrowJourney />
        </div>
        <div className="relative w-[50%] h-[100%] flex flex-col justify-center items-center bg-[#eeeeee1a] ">
          <div
            className={
              bebasNeue.className +
              ` absolute text-[15vw] opacity-5 pointer-events-none w-full h-full flex justify-center items-center text-center`
            }
          >
            2020
            <br />
            2020
          </div>
          <div className="w-[50%]">
            <div className="uppercase p-[10px] pb-[7.5px] rounded-full bg-green-500 w-max leading-none">
              work
            </div>
            <br />
            <div className={`--font-l`}>Worker in wood companies</div>
            <br />
            <div className="--font-s">~ Pieve di Soligo</div>
          </div>
          <ArrowJourney />
        </div>
      </div>
    </>
  );
}
