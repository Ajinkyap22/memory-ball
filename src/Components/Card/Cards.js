import "./Cards.css";
import React, { useEffect, useState } from "react";
import cardData from "../../cardData";
import uniqid from "uniqid";

const Card = (props) => {
  const [clicked, setClicked] = useState([]);

  const memoryCards = cardData;

  useEffect(() => {
    if (!props.playing) {
      setClicked([]);
      props.setScore(0);
      props.checkBest();
    }
  }, [props]);

  function toggleState(e) {
    const name = e.target.closest(".card").dataset.name;

    const newStates = [...clicked];

    if (newStates.includes(name)) {
      props.setPlaying(false);
      props.setResult("You Lost! Better do some memory exercises!");
      shuffle(memoryCards);
    } else {
      setClicked((clicked) => [...clicked, name]);
      props.setScore((prevScore) => (prevScore += 1));
      props.checkWin();
      shuffle(memoryCards);
    }
  }

  function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
  }

  function imagesLoaded() {
    const images = [...document.querySelectorAll(".image")];

    return images.every((img) => img.complete);
  }

  function handleLoading() {
    props.setLoaded(imagesLoaded());
  }

  return (
    <div className="cards__grid">
      {memoryCards.map((card) => (
        <div
          className="card"
          key={uniqid()}
          onClick={toggleState}
          data-name={card.name.replace(" ", "")}
        >
          <img
            className="image"
            src={card.image}
            alt="card"
            onLoad={handleLoading}
            onError={handleLoading}
          />
          <label className="name">{card.name}</label>
        </div>
      ))}
    </div>
  );
};

export default Card;
