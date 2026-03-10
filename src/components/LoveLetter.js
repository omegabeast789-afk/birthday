import { useState, useEffect } from "react";
import BackButton from "./BackButton";

function LoveLetter(){

  const fullText = `Dearest Asha.
Many many happy returns of the day!
My little monkey 🐒, I love you.

This is only the 4th birthday we have been together, and I still feel like I have been the most alive in those years. I am celebrating 🎉 today, because I am glad to have you in my life ❤️❤️. This has been nothing less than a privilege.

A few years back had you told me I would be the Boyfriend of such a kind, loving and empathetic little girl, I would not really agree 🤯🧐. But now I see you everyday, and I am reminded of the fact that my girliepop is indeed the most amazing 😎🪭 girl ever!

Cheers 🎉 to this Birthday 🎂, and awaiting many more to come!

Yours lovingly,
Riddhesh 🌌`;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {

    if(index < fullText.length){

      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 35); // typing speed

      return () => clearTimeout(timer);
    }

  }, [index, fullText]);

  return(

    <div className="portal">

      <BackButton />

      <h1>💌 A Letter For You</h1>

      <p
        style={{
          maxWidth:"600px",
          marginTop:"40px",
          lineHeight:"1.7",
          whiteSpace:"pre-line"
        }}
      >
        {displayText}
      </p>

    </div>

  );

}

export default LoveLetter;