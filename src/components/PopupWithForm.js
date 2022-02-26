import React from 'react';

function PopupWithForm({title}) {
    return (
        <div className="popup-blackout">
        <div className="popup-overlay"></div>
          <form className="popup">
            <button type="button" className="popup__btn-close"></button>
            <h2 className="popup__title">{title}</h2>
            <div className="popup__text-form">
            </div>
            <button type="submit" className="popup__btn-save">Сохранить</button>
          </form>
      </div>
    );
};

export default PopupWithForm;