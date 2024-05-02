import { Bebas_Neue } from "next/font/google";
import ArrowJourney from "../components/arrowJourney";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Section3() {
  return (
    <>
      <div className="w-full h-full flex py-[3%] pr-[3%]">
        <div className="relative w-[50%] h-[100%] flex flex-col justify-center items-center bg-[#eeeeee1a] ">
          <div
            className={
              bebasNeue.className +
              ` absolute text-[15vw] opacity-5 pointer-events-none w-full h-full flex justify-center items-center text-center`
            }
          >
            2021
            <br />
            2022
          </div>
          <div className="w-[50%]">
            <div className="uppercase p-[10px] pb-[7.5px] rounded-full bg-red-500 w-max leading-none">
              study
            </div>
            <br />
            <div className={`--font-l`}>Web Marketing & Social Media</div>
            <br />
            <div className="--font-s">
              ~{" "}
              <a href="https://www.accademia.me/">
                Accademia delle Professioni
              </a>
              , Padova
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
            2022
            <br />
            NOW
          </div>
          <div className="w-[50%]">
            <div className="uppercase p-[10px] pb-[7.5px] rounded-full bg-green-500 w-max leading-none">
              work
            </div>
            <br />
            <div className={`--font-l`}>Developer</div>
            <br />
            <div className="--font-s">
              ~ <a href="https://www.awom.it/">AWOM</a>, Conegliano
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
