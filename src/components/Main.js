import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardsLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile'>
        <img src={currentUser?.avatar} className='profile__avatar' alt='Аватарка' onClick={onEditAvatar}
        />
        <div className='profile__info'>
          <h1 className='profile__info-title'>{currentUser?.name}</h1>
          <p className='profile__info-subtitle'>{currentUser?.about}</p>
        </div>
        <button className='profile__edit-button' onClick={onEditProfile}></button>
        <button className='profile__add-button' onClick={onAddPlace}></button>
      </section>
  
      <ul className='elements'>
        {cards.map((card) => (
          <Card key={`card${card._id}`} card={card} onCardClick={onCardClick} onCardLike={onCardsLike} onCardDelete={onCardDelete} />))
        }
      </ul>
  
    </main>
  );
}
export default Main;