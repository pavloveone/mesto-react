import React from 'react';
import profileAvatar from '../images/profile__avatar.jpg';

function Main({ onAvatarClick, onProfileClick, onAddPlace }) {
    return (
        <main className='content'>
        <section className='profile'>
          <img src={profileAvatar} className='profile__avatar' alt='Аватарка' onClick={onAvatarClick} />
          <div className='profile__info'>
            <h1 className='profile__info-title'>Жак-Ив Кусто</h1>
            <p className='profile__info-subtitle'>Исследователь океана</p>
          </div>
          <button className='profile__edit-button' onClick={onProfileClick}></button>
          <button className='profile__add-button' onClick={onAddPlace}></button>
        </section>
  
          <ul className='elements'></ul>
  
        </main>
    );
};

export default Main;