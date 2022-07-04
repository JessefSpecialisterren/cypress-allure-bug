const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    env: {
      allure: true
    },
    retries: 1,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
}
