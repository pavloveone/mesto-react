import React, {useEffect} from 'react';

function PopupWithForm({title, name, isOpen, onClose}) {

    return (
        <div className={isOpen ? `popup-blackout popup_opened` : `popup-blackout`}>
          <form name={name} className='popup'>
            <button className='popup__btn-close' onClick={onClose}></button>
            <h2 className='popup__title'>{title}</h2>
            <div className='popup__text-form'>
            </div>
            <button className='popup__btn-save'>Сохранить</button>
          </form>
      </div>
    );
};

export default PopupWithForm;