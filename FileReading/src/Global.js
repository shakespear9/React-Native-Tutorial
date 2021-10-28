let config = [];

const setConfig = newConfig => {
  config = newConfig;
  console.log(config);
};

const getConfig = () => config;

const globalConfig = {
  setConfig,
  getConfig,
};

module.exports = globalConfig;
