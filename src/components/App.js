import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import React, {useState} from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {

  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen,setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen,setAddPlacePopupOpen] = useState(false);
  const [selectedCard,setSelectedCard] = useState(null);
  
  function handleCardClick(link) {
    setSelectedCard(link);
  }

  function handleEditAvatarClick (){
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick (){
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setAddPlacePopupOpen(true);
  }
  
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null)
  }

  return (
    <div>
      <Header/>
      <Main onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm name='edit-avatar' buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title='Обновить аватар'>
        <input placeholder="Ссылка на картинку" required type="url" id="form_avatar-link" name="avatar" className="popup__input"/>
        <span id="form_avatar-link-error" className="popup__span"></span>
      </PopupWithForm>
      <PopupWithForm name='edit-profile' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title='Редактировать профиль'>
        <input placeholder="Имя" id="form_name" name="name" required minLength="2" maxLength="40" className="popup__input"/>
        <span id="form_name-error" className="popup__span"></span>
        <input placeholder="О себе" id="form_about" name="about" required minLength="2" maxLength="200" className="popup__input"/>
        <span id="form_about-error" className="popup__span"></span>
      </PopupWithForm>
      <PopupWithForm name='add-place' buttonText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title='Новое место'>
        <input placeholder="Название" id="form_place-name" required minLength="2" maxLength="30" name="name" className="popup__input"/>
        <span id="form_place-name-error" className="popup__span"></span>
        <input placeholder="Ссылка на картинку" required type="url" id="form_place-link" name="link" className="popup__input"/>
        <span id="form_place-link-error" className="popup__span"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}