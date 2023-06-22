export const BASE_URL = 'https://api.moviesearch.nomoredomains.monster';

const handleResponse = response => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);

export const register = ({ password, email, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email, name })
  })
  .then(handleResponse)
}

export const authorize = ({ password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
  .then(handleResponse)
  .then((data) => {
    if (data.jwt) {
      localStorage.setItem('jwt', data.jwt)
      return data.jwt
    }
  })
}

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${jwt}`
    }
  })
  .then(handleResponse)
}