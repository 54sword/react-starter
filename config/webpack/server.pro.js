const baseConfig = require('./server.base');

const config = {
  ...baseConfig,
  mode: 'production'
};

module.exports = config;
