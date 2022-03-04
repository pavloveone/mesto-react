import React from 'react';

function PopupWithForm({title, name, nameButton, isOpen, onClose, children}) {

  return (
    <div className={isOpen ? `popup-blackout popup_opened` : `popup-blackout`}>
      <form name={name} className='popup'>
        <button className='popup__btn-close' onClick={onClose}></button>
        <h2 className='popup__title'>{title}</h2>
        <div className='popup__text-form'>
          {children}
        </div>
        <button className='popup__btn-save'>{nameButton}</button>
      </form>
    </div>
  );
};

export default PopupWithForm;