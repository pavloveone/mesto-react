import React, {useState} from 'react';
import './pages/index.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import PopupWithForm from './components/PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);

  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  const closeAllPopups = () => {

      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      
  };
  return (
    <>
      <Header />
      <Main
      onAvatarClick={handleAvatarClick}
      onProfileClick={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      
      />
      <Footer />
      <PopupWithForm
      title='Редактировать профиль'
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      name='profile'
      />
      <PopupWithForm
      title='Новое место'
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      name='add_place'
      />
      <PopupWithForm
      title='Обновить аватар'
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      name='new_avatar'
      />
    </>

  );
}

export default App;
