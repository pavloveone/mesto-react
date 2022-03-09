import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onAvatarClick, onProfileClick, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => { 
    Promise.all([api.getInitialCards(), api.getProfileInfo()])
    .then(([cards, user]) => {
      setCards(cards);
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
        <img src={userAvatar} className='profile__avatar' alt='Аватарка' onClick={onAvatarClick}
        />
        <div className='profile__info'>
          <h1 className='profile__info-title'>{userName}</h1>
          <p className='profile__info-subtitle'>{userDescription}</p>
        </div>
        <button className='profile__edit-button' onClick={onProfileClick}></button>
        <button className='profile__add-button' onClick={onAddPlace}></button>
      </section>
  
      <ul className='elements'>
        {cards.map((card) => (
          <Card key={`card${card._id}`} card={card} onCardClick={onCardClick} />))
        }
      </ul>
  
    </main>
  );
}
export default Main;