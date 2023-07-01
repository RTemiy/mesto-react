import React from "react";

export default function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card.link);
  }

  return(
    <article className="card">
      <div style={{backgroundImage: `url(${card.link})`}} onClick={handleClick} className="card__image"></div>
      <button className="card__delete"></button>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like"></button>
          <p className="card__like-amount">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}