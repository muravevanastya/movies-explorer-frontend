class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

  setUserInfoApi(name, email) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
    .then(this._checkResponse)
  }

  getSavedMovies() {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

  saveMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  ) {
    // const imageUrl = image && image.url ? 'https://api.nomoreparties.co/' + image.url : '';
    // const thumbnailUrl = image && image.formats && image.formats.thumbnail && image.formats.thumbnail.url
    //   ? 'https://api.nomoreparties.co/' + image.formats.thumbnail.url
    //   : '';
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: 'https://api.nomoreparties.co/' + image.url,
        trailerLink: trailerLink,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: 'https://api.nomoreparties.co/' + image.formats.thumbnail.url,
        movieId: id,
      })
    })
      .then(this._checkResponse)
  }
  
  deleteMovie(movieId) {
    return fetch(this._baseUrl + `/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
    })
    .then(this._checkResponse)
  }
}

export const api = new Api({
  baseUrl: 'http://localhost:3000',
})