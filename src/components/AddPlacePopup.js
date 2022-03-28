import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const [nameCard, setNameCard] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        setNameCard('');
        setLink('');
    }, [isOpen])
    
    function handleChange(e) {
        setNameCard(e.target.value);
    };
    
    function handleChangeLink(e) {
        setLink(e.target.value);
    };
    
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
         
        // Передаём значения управляемых компонентов во внешний обработчик
        onAddPlace({
            name: nameCard,
            link,
        });
           
    }; 

    return (
        <PopupWithForm
        title='Новое место'
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        name='add_place'
        nameButton='Создать'
        children={
          <>
            <input 
              className='popup__input'
              name='place'
              type='text'
              value={nameCard || ''}
              onChange={handleChange}
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
              value={link || ''}
              onChange={handleChangeLink}
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
    );
}