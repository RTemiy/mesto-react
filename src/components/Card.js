import React from "react";

export default function Card({name, link, likes, onCardClick}) {

  function handleClick() {
    onCardClick(link);
  }

  return(
    <article className="card">
      <div style={{backgroundImage: `url(${link})`}} onClick={handleClick} className="card__image"></div>
      <button className="card__delete"></button>
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like"></button>
          <p className="card__like-amount">{likes}</p>
        </div>
      </div>
    </article>
  )
}