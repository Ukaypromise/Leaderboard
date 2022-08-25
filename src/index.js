import './style.css';
import data from './modules/data.js';

document.getElementById('score-table').innerHTML = data
  .map(
    (item) => `
<p class="score">${item.name}: ${item.score}</p>`,
  )
  .join(' ');