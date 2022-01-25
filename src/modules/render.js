const renderList = (scoreData) => {
  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  scoreData.forEach((data) => {
    const score = document.createElement('li');
    scores.appendChild(score);
    const name = document.createElement('span');
    name.textContent = `${data.user}`;
    score.appendChild(name);
    const number = document.createElement('span');
    number.textContent = `${data.score}`;
    score.appendChild(number);
  });
};
export default renderList;