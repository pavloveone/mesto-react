import React from 'react';
import './pages/index.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import PopupWithForm from './components/PopupWithForm';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
      title="Редактировать профиль"
      />
      <PopupWithForm
      title="Новое место"
      />
      <PopupWithForm
      title="Обновить аватар"
      />
    </>

  );
}

export default App;
