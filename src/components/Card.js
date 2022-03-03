import React from 'react';

function Card({card, onCardClick}) {
  const handleCardClick = () => {
    onCardClick(card);
  }

    return (
        <li className='element'>
        <img 
          className='element__image'
          alt={card.name}
          src={card.link}
          onClick={handleCardClick}
           />
        <div className="element__container">
          <h3 className="element__container-title">{card.name}</h3>
          <button className="element__like-button" type="button"></button>
        </div>
        <p className="element__text"></p>
        <button className="element__del-button" type="button"></button>
      </li>
    );
};

export default Card;