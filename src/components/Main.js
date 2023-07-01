import React, {useEffect, useState} from "react";

import edit from "../images/edit.svg";

import {api} from "../utils/api";

import Card from "./Card";

export default function Main({onEditProfile, onAddPlace ,onEditAvatar, onCardClick}) {

  const [userName,setUserName] = useState('');
  const [userDescription ,setUserDescription ] = useState('');
  const [userAvatar,setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    api.getUserInfo().then(res =>{
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar)
    }).catch(e =>{
      console.log(e)
    })

    api.getInitialCards().then(res=>{
      setCards(res)
    }).catch(e =>{
      console.log(e)
    })

  }, []);


  return(
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img alt="Аватар профиля" style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar"/>
          <img alt="Редактировать профиль" className="profile__edit-avatar" src={edit} onClick={onEditAvatar}/>
        </div>
        <div className="profile__data-block">
          <div className="profile__info-block">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit hover-anim" onClick={onEditProfile}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button type="button" className="profile__add hover-anim" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map((cardInfo) => (
          <Card key={cardInfo._id} card={cardInfo} onCardClick={onCardClick}/>
        ))}
      </section>
    </main>
  )
}