import React, { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen])
  
  function handleChange(e) {
    setName(e.target.value);
  };

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  };

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      job: description,
    });
                   
  };

  return (
    <PopupWithForm
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name='profile'
      nameButton='Сохранить'
      children={
        <>
          <input 
            className='popup__input'
            value={name || ''} 
            onChange={handleChange}
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
            value={description || ''}
            onChange={handleChangeDescription}
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
  );
}