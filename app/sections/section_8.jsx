export default function Section8() {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex relative justify-center items-center p-[3%] border-[5px] border-[#ff9900] rounded-3xl">
          <video
            width="1200"
            height="auto"
            muted
            autoPlay
            playsInline
            loop
            className="rounded-xl"
            style={{ width: "clamp(400px, 46.875vw, 1200px)" }}
          >
            <source src="/video/video_computer_v2.webm" type="video/webm" />
            <source src="/video/video_computer_v2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div className="absolute bottom-0">
            <h4 className="translate-y-[100%]">Just building some sh!t</h4>
          </div> */}
        </div>
      </div>
    </>
  );
}
