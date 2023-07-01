import React from "react";

export default function PopupWithForm({title, name, isOpen, buttonText, children, onClose}) {
  return(
    <div id={`popup_${name}`} className={`popup ${isOpen? 'popup_opened': ''}`}>
      <div className="popup__container">
        <button type="button" onClick={onClose} className="popup__cross hover-anim"></button>
        <form noValidate id={`form_${name}`} name="profile" method="post" className="popup__form">
          <h3 className="popup__title">{title}</h3>
          {children.map(child =>(child))}
          <button type="submit" className="popup__button-submit popup__button-submit_activated">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}