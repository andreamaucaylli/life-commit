const axios = require('axios');

const lifeApiClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com/ByronHsu/life-commit/master',
  timeout: 5000,
  headers: {},
  params: {},
});

/**
 * @param {Object} cli - The cli object that returns meow()
 * @param {Object} cli.flags - The cli flags matched against the input
 * @param {Object} options - The mapping for a command to the life-commit method
 * @return {Function}
 **/
const findLifeCommand = (cli, options) => {
  const flags = cli.flags;
  const matchedFlagsWithInput = Object.keys(flags)
    .map(flag => flags[flag] && flag)
    .filter(flag => options[flag]);

  return options[matchedFlagsWithInput]
    ? options[matchedFlagsWithInput]()
    : cli.showHelp();
};

module.exports = {
  findLifeCommand,
  lifeApiClient,
};
