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
      <PopupWithForm name='edit-avatar' buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} children={[
        <input placeholder="Ссылка на картинку" required type="url" id="form_avatar-link" name="avatar" className="popup__input"/>,
        <span id="form_avatar-link-error" className="popup__span"></span>
        ]} onClose={closeAllPopups} title='Обновить аватар'/>

      <PopupWithForm name='edit-profile' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} children={[
        <input placeholder="Имя" id="form_name" name="name" required minLength="2" maxLength="40" className="popup__input"/>,
        <span id="form_name-error" className="popup__span"></span>,
        <input placeholder="О себе" id="form_about" name="about" required minLength="2" maxLength="200" className="popup__input"/>,
        <span id="form_about-error" className="popup__span"></span>
      ]} onClose={closeAllPopups} title='Редактировать профиль'/>

      <PopupWithForm name='add-place' buttonText='Создать' isOpen={isAddPlacePopupOpen} children={[
        <input placeholder="Название" id="form_place-name" required minLength="2" maxLength="30" name="name" className="popup__input"/>,
        <span id="form_place-name-error" className="popup__span"></span>,
        <input placeholder="Ссылка на картинку" required type="url" id="form_place-link" name="link" className="popup__input"/>,
        <span id="form_place-link-error" className="popup__span"></span>
      ]} onClose={closeAllPopups} title='Новое место'/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      {/*<div id="popup_edit-profile" className="popup">
        <div className="popup__container">
          <button id="popup-edit_close" type="button" className="popup__cross hover-anim"></button>
          <form noValidate id="form_edit" name="profile" method="post" className="popup__form">
            <h3 className="popup__title">Редактировать профиль</h3>
            <input placeholder="Имя" id="form_name" name="name" required minLength="2" maxLength="40"
                   className="popup__input"/>
              <span id="form_name-error" className="popup__span"></span>
              <input placeholder="О себе" id="form_about" name="about" required minLength="2" maxLength="200"
                     className="popup__input"/>
                <span id="form_about-error" className="popup__span"></span>
                <button type="submit" className="popup__button-submit popup__button-submit_activated">Сохранить</button>
          </form>
        </div>
      </div>
      <div id="popup_add-place" className="popup">
        <div className="popup__container">
          <button id="popup-add_close" type="button" className="popup__cross hover-anim"></button>
          <form noValidate id="form_add" name="newpost" method="post" className="popup__form">
            <h3 className="popup__title">Новое место</h3>
            <input placeholder="Название" id="form_place-name" required minLength="2" maxLength="30" name="name"
                   className="popup__input"/>
              <span id="form_place-name-error" className="popup__span"></span>
              <input placeholder="Ссылка на картинку" required type="url" id="form_place-link" name="link"
                     className="popup__input"/>
                <span id="form_place-link-error" className="popup__span"></span>
                <button type="submit" className="popup__button-submit">Создать</button>
          </form>
        </div>
      </div>
      <div id="popup_delete-place" className="popup">
        <div className="popup__container">
          <button id="popup-delete_close" type="button" className="popup__cross hover-anim"></button>
          <form noValidate id="form_delete" name="delete" className="popup__form">
            <h3 className="popup__title">Вы уверены?</h3>
            <button type="submit" className="popup__button-submit popup__button-submit_activated">Да</button>
          </form>
        </div>
      </div>
      <div id="popup_edit-avatar" className="popup">
        <div className="popup__container">
          <button id="popup-edit-avatar_close" type="button" className="popup__cross hover-anim"></button>
          <form noValidate id="form_edit-avatar" name="edit-avatar" method="post" className="popup__form">
            <h3 className="popup__title">Обновить аватар</h3>
            <input placeholder="Ссылка на картинку" required type="url" id="form_avatar-link" name="avatar"
                   className="popup__input"/>
              <span id="form_avatar-link-error" className="popup__span"></span>
              <button type="submit" className="popup__button-submit">Сохранить</button>
          </form>
        </div>
      </div>*/}

    </div>
  );
}