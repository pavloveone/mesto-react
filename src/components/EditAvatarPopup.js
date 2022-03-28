import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const refAvatar = useRef();

    useEffect(() => {
        refAvatar.current.value = ''; 
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
        avatar: refAvatar.current.value,
        });

    };

    return (
        <PopupWithForm
        title='Обновить аватар'
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        name='new_avatar'
        nameButton='Сохранить'
        children={
          <>
            <input 
              className='popup__input'
              name='avatar'
              type='url'
              ref={refAvatar}
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
    );
}