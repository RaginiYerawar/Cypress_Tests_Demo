const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url : "https://automationintesting.online/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/DemoTestSite/Tests/*.js'
  },
});
