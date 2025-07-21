import React, { useEffect, useState } from "react";
import "./styles.css";

type Light = "red" | "green" | "yellow";

const TrafficLight: React.FC = () => {
  const [activeLight, setActiveLight] = useState<Light>("red");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (activeLight === "red") {
      timeout = setTimeout(() => setActiveLight("green"), 3000);
    } else if (activeLight === "green") {
      timeout = setTimeout(() => setActiveLight("yellow"), 3000);
    } else if (activeLight === "yellow") {
      timeout = setTimeout(() => setActiveLight("red"), 1000);
    }

    return () => clearTimeout(timeout);
  }, [activeLight]);

  return (
    <div className="traffic-container">
      <div className={`light red ${activeLight === "red" ? "on" : ""}`} />
      <div className={`light yellow ${activeLight === "yellow" ? "on" : ""}`} />
      <div className={`light green ${activeLight === "green" ? "on" : ""}`} />
    </div>
  );
};

export default TrafficLight;
