import id from './gameId.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

class UI {
  static getData = async () => {
    const res = await fetch(`${url}/${id}/scores`);
    const datas = await res.json();
    const dataResult = datas.result;
    dataResult.forEach((data) => {
      UI.renderData(data);
    });
  };

  static renderData(data) {
    const content = document.getElementById('score-table');
    content.innerHTML += `<p class="score">${data.user}: ${data.score}</p>`;
  }
}

export default UI;