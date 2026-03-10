import { useState } from "react";
import BackButton from "./BackButton";

function ComplimentGenerator() {

  const compliments = [
    "You are illegally cute.",
    "You are my cutest little baby",
    "You have been nothing short of a blessing to me",
    "You are the reason the universe feels brighter.",
    "You somehow make every day better.",
    "Your smile is a certified superpower.",
    "My lovely little princesssss!!!!1",
    "You are 90% sunshine and 10% mischief.",
    "If happiness had a face, it would look like you.",
    "You are the most beautiful plot twist in my life.",
    "You made college life feel like actual college life",
    "No idea how time flies when i am with you",
    "I can keep listening to you yap endlessly",
    "It has been the greatest honor being your boyfriend",
    "Love you to the moon and back",
    "You are my sweet little chiku"
  ];

  const [current, setCurrent] = useState("");

  const generateCompliment = () => {
    const random =
      compliments[Math.floor(Math.random() * compliments.length)];

    setCurrent(random);
  };

  return (
    <div className="portal">

      <BackButton />

      <h1>✨ Compliment Generator</h1>

      <p style={{marginTop:"20px"}}>
        Press the button to receive a cosmic compliment
      </p>

      <button
        className="cosmicButton"
        style={{marginTop:"40px"}}
        onClick={generateCompliment}
      >
        Generate Compliment
      </button>

      {current && (
        <div
          style={{
            marginTop:"40px",
            fontSize:"24px",
            maxWidth:"500px"
          }}
        >
          💫 {current}
        </div>
      )}

    </div>
  );
}

export default ComplimentGenerator;