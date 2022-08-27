export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export function getAllMovies() {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
  // return Promise.reject(`Произошла ошибка: ${res.status} ${res.statusText}`);
}
