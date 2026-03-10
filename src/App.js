import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

import FlipMemoryCard from "./components/FlipMemoryCard";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import LoveLetter from "./components/LoveLetter";
import ScratchGift from "./components/ScratchGift";
import ComplimentGenerator from "./components/ComplimentGenerator";
import MarioGame from "./components/MarioGame";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/findme" element={<MarioGame />} />
        <Route path="/memory" element={<FlipMemoryCard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="/gift" element={<ScratchGift />} />
        <Route path="/letter" element={<LoveLetter />} />
        <Route path="/compliments" element={<ComplimentGenerator />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;