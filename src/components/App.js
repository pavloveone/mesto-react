import React, {useState} from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const handleAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  };
  return (
    <>
      <Header />
      <Main
        onAvatarClick={handleAvatarClick}
        onProfileClick={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      />
      <PopupWithForm
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name='profile'
        nameButton='Сохранить'
        children={
          <>
           <input 
              className='popup__input'
              name='name'
              type='text'
              placeholder='Введите имя' 
              minLength='2'
              maxLength='40'
              id='name-profile'
              required
            />
            <span 
              className='error' 
              id='name-profile-error'
            >
            </span>
            <input 
              className='popup__input'
              name='job'
              type='text'
              placeholder='Введите описание' 
              minLength='2'
              maxLength='200' 
              id='job-profile'
              required
            />
            <span 
              className='error' 
              id='job-profile-error'
            >
            </span>
          </>
        }
      />
      <PopupWithForm
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name='add_place'
        nameButton='Создать'
        children={
          <>
            <input 
              className='popup__input'
              name='place'
              type='text'
              placeholder='Название места' 
              minLength='2'
              maxLength='30'
              id='place-card'
              required
            />
            <span 
              className='error' 
              id='place-card-error'
            >
            </span>
            <input 
              className='popup__input'
              name='link'
              type='url'
              placeholder='Ссылка на картинку' 
              minLength='2'
              maxLength='200' 
              id='link-card'
              required
            />
            <span 
              className='error' 
              id='link-card-error'
            >
            </span>
          </>
        }
      />
      <PopupWithForm
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name='new_avatar'
        nameButton='Сохранить'
        children={
          <>
            <input 
              className='popup__input'
              name='avatar'
              type='url'
              placeholder='Ссылка на новый аватар' 
              minLength='2' 
              id='link-avatar'
              required
            />
            <span 
              className='error' 
              id='link-avatar-error'
            >
            </span>
          </>
        }
      />
    </>
  );
}

export default App;
