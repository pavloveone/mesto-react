class Api {
    constructor({address, headers}) {
        this._address = address;
        this._headers = headers;
        }
      
    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            headers: this._headers
        })
        .then(this._handleResponse);
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
          return Promise.reject(`Ошибка: ${res.status}`)
  
    }
  
    getProfileInfo() {
        return fetch(`${this._address}/users/me`, {
            headers: this._headers
          })
        .then(this._handleResponse);
      
    }
  
    editProfile(data) {
       return fetch(`${this._address}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify ({
              name: data.name,
              about: data.job,     
              })
       })
       .then(this._handleResponse); 
   
    }
  
    avatarProfile(data) {
       return fetch(`${this._address}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify ({
              avatar: data.avatar
          })
       })
       .then(this._handleResponse); 
   
    }

    addCard(data) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify ({
                name: data.place,
                link: data.link,
                id: data.id
              })
          })
          .then(this._handleResponse);
     
    }

    delCard(id) {
        return fetch(`${this._address}/cards/${id}`, {
           method: 'DELETE',
           headers: this._headers
        })
        .then(this._handleResponse);

    }

    changeLikeCardStatus(id, isLiked) {
       return fetch(`${this._address}/cards/${id}/likes`, {
           method: `${isLiked ? 'DELETE' : 'PUT'}`,
           headers: this._headers
       })
       .then(this._handleResponse)
       
    }

    delLikes(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers
        })
    .then(this._handleResponse)  
    }
}

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    headers: {
      authorization: 'ed47390f-0f67-4f27-8d83-0ca378497787',
      'Content-Type': 'application/json'
    }
  });

export default api;