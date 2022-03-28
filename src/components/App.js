import React, {useState, useEffect} from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { EditProfilePopup } from './EditProfilePopup';
import { EditAvatarPopup } from './EditAvatarPopup';
import { AddPlacePopup } from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({name: '', about: ''});
  const [cards, setCards] = useState([]);

  const handleAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => { 
    api.getProfileInfo()
    .then((user) => {
      setCurrentUser(user);
    })
    .catch((error) => console.log(error));

    api.getInitialCards()
    .then((res) => {
      setCards(res)
    })
    .catch((error) => console.log(error));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
    .changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  };

  function handleCardDelete(card) {
    // Снова проверяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
    .delCard(card._id, !isOwn)
    .then(() => {
        setCards((state) => state.filter((c) => c._id != card._id ));

    });
  }
  const handleUpdateUser = (user) => {
    api
    .editProfile(user)
    .then(res => {
        setCurrentUser(res);
        setIsEditProfilePopupOpen(false);
    
    })
    .catch(err => console.log(err));
  };

  const handleUpdateAvatar = (user) => {
    api
    .avatarProfile(user)
    .then((res) => {
        setCurrentUser(res);
        setIsEditAvatarPopupOpen(false);
    })
    .catch(error => console.log(error));
  };

  const handleAddPlaceSubmit = (user) => {
    api
    .addCard(user)
    .then((res) => {
        setIsAddPlacePopupOpen(false);
        setCards([res, ...cards]);
    })
    .catch(error => console.log(error));
  }

  return (
    <>
    < CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardsLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser} 
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
