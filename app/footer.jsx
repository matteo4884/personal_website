export default function Footer() {
  return (
    <div
      style={{ fontSize: "clamp(10px, 0.625vw, 12px)" }}
      className="fixed bottom-0 w-screen flex justify-center items-center uppercase"
    >
      © {new Date().getFullYear()} matteobeu - All rights reserved
    </div>
  );
}
