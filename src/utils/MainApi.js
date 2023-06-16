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
}

export const api = new Api({
  baseUrl: 'http://localhost:3000',
})