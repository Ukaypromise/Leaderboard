import "./style.css";

const data = [
  {
    id: 0,
    name: "John Doe",
    score: "100",
  },
  {
    id: 1,
    name: "Peter Parker",
    score: "50",
  },
  {
    id: 2,
    name: "Frank Castle",
    score: "75",
  },
  {
    id: 3,
    name: "Promise Uka",
    score: "65",
  },
  {
    id: 4,
    name: "Evy Suno",
    score: "90",
  },
];
document.getElementById("score-table").innerHTML = data
  .map(
    (item) => `
<p class="score">${item.name}: ${item.score}</p>`
  )
  .join(" ");