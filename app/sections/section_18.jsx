import { useState, useEffect } from "react";

export default function Section18() {
  return (
    <>
      <h1 className="--font-xxl">
        <YearsOfExperience />
      </h1>
    </>
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
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <span>{experience}</span>;
}
