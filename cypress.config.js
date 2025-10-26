const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://traqkz.github.io/Protoype-Design-main',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
