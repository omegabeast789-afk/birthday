import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../App.css";
import StarField from "../components/StarField";
function Home() {

  const navigate = useNavigate();
  useEffect(() => {

  const handleMove = (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 15;
    const y = (window.innerHeight / 2 - e.clientY) / 15;

    const stars = document.querySelector(".stars");
    const stars2 = document.querySelector(".stars2");
    const stars3 = document.querySelector(".stars3");

    if(stars) stars.style.transform = `translate(${x}px, ${y}px)`;
    if(stars2) stars2.style.transform = `translate(${x*2}px, ${y*2}px)`;
    if(stars3) stars3.style.transform = `translate(${x*3}px, ${y*3}px)`;

  };

  window.addEventListener("mousemove", handleMove);

  return () => window.removeEventListener("mousemove", handleMove);

}, []);
  const [warp, setWarp] = useState(false);

 const goTo = (page) => {
  setWarp(true);

  setTimeout(() => {
    navigate(page);
    setWarp(false);
  }, 1200);
};
  return (
    <div className={`galaxy ${warp ? "warp" : ""}`}>

       <StarField />

  <div className="shootingStar s1"></div>
  <div className="shootingStar s2"></div>
  <div className="shootingStar s3"></div>

      

      <div className="planetDecor p1"></div>
      <div className="planetDecor p2"></div>
      <div className="planetDecor p3"></div>

      <h1 className="galaxyTitle">🌌 Memory Galaxy</h1>
      <p className="galaxySub">Choose a planet to explore</p>

      <div className="planetSystem">

        <motion.div
          className="planet portalQuiz"
          whileHover={{ scale: 1.2 }}
          onClick={() => goTo("/quiz")}
        >
          🧠
          <span>Quiz</span>
          <div className="moon"></div>
        </motion.div>

        <motion.div
          className="planet portalGame"
          whileHover={{ scale: 1.2 }}
          onClick={() => goTo("/memory")}
        >
          🎮
          <span>Memory Game</span>
          <div className="moon"></div>
        </motion.div>

        <motion.div
          className="planet portalScratch"
          whileHover={{ scale: 1.2 }}
          onClick={() => goTo("/gift")}
        >
          🎁
          <span>Scratch Card</span>
          <div className="moon"></div>
        </motion.div>

        <motion.div
          className="planet portalLetter"
          whileHover={{ scale: 1.2 }}
          onClick={() => goTo("/letter")}
        >
          💌
          <span>Letter</span>
          <div className="moon"></div>
        </motion.div>

        <motion.div
          className="planet portalCompliment"
          whileHover={{ scale: 1.2 }}
          onClick={() => goTo("/compliments")}
        >
          ✨
          <span>Compliments</span>
          <div className="moon"></div>
        </motion.div>
        <motion.div
  className="planet portalGame"
  whileHover={{ scale: 1.2 }}
  onClick={() => goTo("/findme")}
>
  🕹
  <span>Find Me</span>
  <div className="moon"></div>
</motion.div>

      </div>

    </div>
  );
}

export default Home;