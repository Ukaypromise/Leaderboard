import './style.css';
import UI from './modules/renderItems.js';
import id from './modules/gameId.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const submit = document.querySelector('.submitBtn');
const refreshBtn = document.querySelector('#refresh-btn');
const user = document.getElementById('name');
const score = document.getElementById('score');

UI.getData();

const prevScores = async () => {
  const res = await fetch(`${url}/${id}/scores`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: user.value,
      score: score.value,
    }),
  });
  const data = await res.json();
  return data;
};

const clearInput = () => {
  user.value = '';
  score.value = '';
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  prevScores();
  clearInput();
});

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});
