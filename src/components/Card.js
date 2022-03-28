import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
  `card__delete-button ${isOwn ? 'element__del-button' : 'element__del-button_hide'}`
  );
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (isLiked ? 'element__like-button element__like-button_active' : 'element__like-button');

  const handleCardClick = () => {
    onCardClick(card);
  }

  const handleLikeClick = () => {
    onCardLike(card);
  }

  const handleDeleteClick = () => {
    onCardDelete(card);
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
        <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
      </div>
      <p className="element__text">{card.likes.length}</p>
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
    </li>
  );
};

export default Card;