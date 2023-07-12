import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const currentUser = React.useContext(CurrentUserContext);
  const linkRef = React.useRef(currentUser.avatar);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: linkRef.current.value,
    });
    linkRef.current.value = '';
  }
  return(
    <PopupWithForm name='edit-avatar' buttonText='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} title='Обновить аватар'>
      <input ref={linkRef} placeholder="Ссылка на картинку" required type="url" id="form_avatar-link" name="avatar" className="popup__input"/>
      <span id="form_avatar-link-error" className="popup__span"></span>
    </PopupWithForm>
  )
}