const generatedApiKey = 'Ar1eGuEz5KKKPW2ueoxi';

const get = () => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${generatedApiKey}/scores/`)
  .then((response) => response.json())
  .then((data) => data.result);

export default get;
