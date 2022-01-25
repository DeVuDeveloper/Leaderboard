const generatedApiKey = '7T2HCxTBeq6YyC2qi0OX';

const setData = (name, score) => {
  const data = {
    user: name,
    score,
  };
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${generatedApiKey}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json());
};

export default setData;