const baseConfig = require('./server.base');

const config = {
  ...baseConfig,
  mode: 'development'
};

module.exports = config;
