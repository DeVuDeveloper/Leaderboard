const generatedApiKey = '7T2HCxTBeq6YyC2qi0OX';

const post = (name, score) => {
  const scoreData = {
    user: name,
    score,
  };
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${generatedApiKey}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.warn('Failed:', error);
    });
};
export default post;
