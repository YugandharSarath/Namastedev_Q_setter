import React, { useRef, useState, useEffect } from "react";
import "./Captcha.css";

const Captcha = ({ initialCaptcha }) => {
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const canvasRef = useRef(null);

  const generateCaptchaText = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "italic bold 36px Arial";
    ctx.fillStyle = "#000";

    ctx.save();
    ctx.translate(10, 40);
    ctx.rotate(Math.random() * 0.1 - 0.05);
    ctx.fillText(text, 0, 0);
    ctx.restore();

    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * 150, Math.random() * 50);
      ctx.lineTo(Math.random() * 150, Math.random() * 50);
      ctx.strokeStyle = "rgba(0,0,0,0.2)";
      ctx.stroke();
    }
  };

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptchaText();
    setCaptcha(newCaptcha);
    drawCaptcha(newCaptcha);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === captcha.toLowerCase()) {
      setMessage("✅ Captcha Verified!");
    } else {
      setMessage("❌ Incorrect Captcha. Try again.");
      setTimeout(() => {
        refreshCaptcha();
      }, 500);
    }
  };

  useEffect(() => {
    if (initialCaptcha) {
      setCaptcha(initialCaptcha);
      drawCaptcha(initialCaptcha);
    } else {
      refreshCaptcha();
    }
  }, [initialCaptcha]);

  return (
    <div className="captcha-container">
      <form onSubmit={handleSubmit}>
        <div className="captcha-box">
          <canvas
            ref={canvasRef}
            width={150}
            height={50}
            className="captcha-canvas"
            data-testid="captcha-canvas"
          />
          <button
            type="button"
            onClick={refreshCaptcha}
            className="refresh-btn"
          >
            🔁
          </button>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Captcha"
          className="captcha-input"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
        {message && <p className="captcha-msg">{message}</p>}
      </form>
    </div>
  );
};

export default Captcha;
