const generatedApiKey = 'Ar1eGuEz5KKKPW2ueoxi';

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