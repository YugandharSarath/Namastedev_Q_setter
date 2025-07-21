import React from "react";
import "./Player.css";

interface PlayerProps {
  position: number;
}

const Player: React.FC<PlayerProps> = ({ position }) => {
  return (
    <div className="player" style={{ backgroundColor: "#ff6347" }}>
      🧍
    </div>
  );
};

export default Player;
