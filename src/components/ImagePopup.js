import React from "react";

export default function ImagePopup({card, isOpen, onClose}) {
  return(
    <div id="popup_zoom-image" className={`popup ${isOpen? 'popup_opened' : ''}`}>
      <div className="popup__zoom-container">
        <button id="popup-zoom_close" type="button" onClick={onClose} className="popup__cross hover-anim"></button>
        <img alt="Увеличенная картинка" src={card} className="popup__image"/>
        <p className="popup__caption"></p>
      </div>
    </div>
  )
}