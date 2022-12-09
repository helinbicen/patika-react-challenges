import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./index.css";

import {
  activeToggle,
  restartGame,
  incrementPaired,
  decrementScore,
  incrementScore,
} from "../../redux/cardsSlice";

function Card() {
  const cards = useSelector((state) => state.cards.items);

  const dispatch = useDispatch();

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    let choiceOne, choiceTwo;
    if (selected[0] && selected[1]) {
      choiceOne = selected[0].key;
      choiceTwo = selected[1].key;

      if (choiceOne === choiceTwo) {
        setSelected([]);
        dispatch(incrementPaired());
        dispatch(incrementScore());
      } else {
        setTimeout(() => {
          dispatch(activeToggle(selected[0].id));
          dispatch(activeToggle(selected[1].id));
          dispatch(decrementScore());
          setSelected([]);
        }, 500);
      }

      if (selected.length === 15) {
        setTimeout(() => {
          dispatch(restartGame());
          setSelected([]);
        }, 2000);
      }
    }
  }, [selected, dispatch]);

  function handleClick(card) {
    dispatch(activeToggle(card.id));
    setSelected([...selected, card]);
  }

  return (
    <div className="cards">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card ${card.status ? "active" : ""} ${
            selected.length === 2 ? "disabled" : ""
          }`}
          onClick={() => handleClick(card)}
        >
          <div className="back">?</div>
          <div className="front">
            <img src={card.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
