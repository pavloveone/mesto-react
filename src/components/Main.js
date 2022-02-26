import React from 'react';
import profileAvatar from '../images/profile__avatar.jpg';

function Profile() {
    return (
        <main className="content">
        <section className="profile">
          <img src={profileAvatar} className="profile__avatar" alt="Аватарка" />
          <div className="profile__info">
            <h1 className="profile__info-title">Жак-Ив Кусто</h1>
            <p className="profile__info-subtitle">Исследователь океана</p>
          </div>
          <button className="profile__edit-button" type="button"></button>
          <button className="profile__add-button" type="submit"></button>
        </section>
  
          <ul className="elements"></ul>
  
        </main>
    );
};

export default Profile;