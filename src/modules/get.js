const generatedApiKey = '7T2HCxTBeq6YyC2qi0OX';

const get = () => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${generatedApiKey}/scores/`)
  .then((response) => response.json())
  .then((data) => data.result);

export default get;
