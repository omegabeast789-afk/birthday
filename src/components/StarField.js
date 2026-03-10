import { useEffect } from "react";

function StarField() {

  useEffect(() => {

    const starfield = document.querySelector(".starfield");

    if (!starfield) return;

    starfield.innerHTML = "";

    const starCount = 250;

    for (let i = 0; i < starCount; i++) {

      const star = document.createElement("div");
      star.className = "star";

      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";

      star.style.animationDuration = 2 + Math.random() * 3 + "s";

      starfield.appendChild(star);
    }

  }, []);

  return <div className="starfield"></div>;
}

export default StarField;