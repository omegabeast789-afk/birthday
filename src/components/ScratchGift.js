import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import AnimatedGradientText from "./AnimatedGradientText";
function ScratchGift() {

  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;   // ⭐ prevents crash

  ctx.globalCompositeOperation = "source-over";

  // grey cover layer
  ctx.fillStyle = "#999";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Scratch Here 🎁", canvas.width / 2, canvas.height / 2);

  let scratching = false;

  const scratch = (x, y) => {
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  const handleMouseDown = () => scratching = true;
  const handleMouseUp = () => scratching = false;

  const handleMouseMove = (e) => {

    if (!scratching) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    scratch(x, y);
    checkReveal();
  };

  const checkReveal = () => {

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;

    for (let i = 3; i < pixels.data.length; i += 4) {
      if (pixels.data[i] === 0) transparent++;
    }

    const percent = transparent / (pixels.data.length / 4);

    if (percent > 0.60) {
      setRevealed(true);
    }

  };

  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mousemove", handleMouseMove);

  return () => {
    canvas.removeEventListener("mousedown", handleMouseDown);
    canvas.removeEventListener("mouseup", handleMouseUp);
    canvas.removeEventListener("mousemove", handleMouseMove);
  };

}, []);

  return (
    <div className="portal">

      <BackButton />

      <h1>🎁 Birthday Gift</h1>

      <div
        style={{
          position: "relative",
          marginTop: "40px",
          marginBottom: "40px",
          width: "300px",
          height: "200px"
        }}
      >

        {/* Gift ALWAYS underneath */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "white",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            color:"black",
            fontSize: "5px",
            padding: "20px"
          }}
        >
          <AnimatedGradientText>
            Lots and lots of kisses and hugs and Dairy Milk Roast Almond chocolates!
          </AnimatedGradientText>
        
        </div>

        {/* Scratch layer */}
        {!revealed && (
          <canvas
            ref={canvasRef}
            width={340}
            height={240}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "15px",
              cursor: "pointer"
            }}
          />
        )}

      </div>

      <button
        style={{ marginTop: "40px" }}
        onClick={() => navigate("/letter")}
      >
        Final Message 💌
      </button>

    </div>
  );
}

export default ScratchGift;