import './style.css';
import setData from './modules/post';
import get from './modules/get';
import renderList from './modules/render';

const sendScore = document.querySelector('.btn');
const refresh = document.querySelector('.refresh-btn');

sendScore.onclick = () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  setData(name.value, score.value);
  name.value = '';
  score.value = '';
};

refresh.onclick = async () => {
  renderList(await get());
};