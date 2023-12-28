import Image from "next/image";

export default function Main() {
  return (
    <>
      <div className="w-[5000px] h-[5000px]">
        <Image src="/cr7.jpg" width={5000} height={5000} alt="cr7" />
      </div>
    </>
  );
}
