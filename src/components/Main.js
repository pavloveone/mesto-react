import React, { useState, useEffect } from 'react';
import profileAvatar from '../images/profile__avatar.jpg';
import api from '../utils/Api';
import Card from './Card';

function Main({ onAvatarClick, onProfileClick, onAddPlace }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState(profileAvatar);
  const [cards, setCards] = useState([]);

  const elements = () => {
    if (cards.length > 0) {
      return cards.map((card) => {
        <Card card={card} key={`card${card._id}`} />
      });
    }
  };

  useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    api.getProfileInfo()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((error) => console.log(error));
  }, []);
    return (
        <main className='content'>
        <section className='profile'>
          <img src={profileAvatar} className='profile__avatar' alt='Аватарка' onClick={onAvatarClick}
          style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div className='profile__info'>
            <h1 className='profile__info-title'>{userName}</h1>
            <p className='profile__info-subtitle'>{userDescription}</p>
          </div>
          <button className='profile__edit-button' onClick={onProfileClick}></button>
          <button className='profile__add-button' onClick={onAddPlace}></button>
        </section>
  
          <ul className='elements'>
            {elements()}
          </ul>
  
        </main>
    );
};

export default Main;