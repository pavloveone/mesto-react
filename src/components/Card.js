import React from 'react';



function Card() {
    return (
        <li className="element">
        <img className="element__image" />
        <div className="element__container">
          <h3 className="element__container-title"></h3>
          <button className="element__like-button" type="button"></button>
        </div>
        <p className="element__text">0</p>
        <button className="element__del-button" type="button"></button>
      </li>
    );
};

export default Card;