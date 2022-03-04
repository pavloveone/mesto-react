import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={card ? `popup-blackout popup_opened` : `popup-blackout`}>
      <div className='popup-overlay'></div>      
        <figure className='popup popup-image'>
          <button className='popup__btn-close' onClick={onClose}></button>
          <img className='popup-image__figure' src={card.link} alt={card.name} />
          <p className='popup-image__caption'>{card.name}</p>
        </figure>
    </div>
  );
}; 

export default ImagePopup;