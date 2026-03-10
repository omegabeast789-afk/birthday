import { useState, useEffect } from "react";
import "../App.css";
import { images } from "../data/images";
import BackButton from "./BackButton";

function FlipMemoryCard() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [won, setWon] = useState(false);
  useEffect(() => {
  if (matched.length === cards.length && cards.length > 0) {
    setWon(true);
  }
}, [matched, cards]);
  useEffect(() => {
    const shuffled = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({ id: index, img }));

    setCards(shuffled);
  }, []);

  const handleFlip = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;

      if (cards[firstId].img === cards[secondId].img) {
        setMatched((prev) => [...prev, firstId, secondId]);
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };
if (won) {
  return (
    <div className="memoryPage">

      <BackButton />

      <h1 style={{color:"white"}}>
        🎉 You Found All Memories! Yayyyyyy 🎉
      </h1>

      <p style={{color:"white"}}>
        Mera smart little babyyyyy!!!!!!
      </p>

    </div>
  );
}
  return (
    <div className="memoryPage">

      <BackButton />

      <div className="memoryContainer">
        {cards.map((card) => {
          const isFlipped = flipped.includes(card.id) || matched.includes(card.id);

          return (
            <div
  key={card.id}
  className="memoryCard"
  onClick={() => handleFlip(card.id)}
>
  {isFlipped ? (
    <img
      src={card.img}
      alt="card"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ) : (
    <div className="cardBack">❓</div>
  )}
</div>
          );
        })}
      </div>

    </div>
  );
}

export default FlipMemoryCard;