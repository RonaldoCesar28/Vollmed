/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    projectId: "w4wj2p",

    defaultCommandTimeout: 90000,
    env: {
      "email": "ronaldo28@email.com",
      "senha": "Senha12345",
      "api_login": "http://localhost:8080/auth/login",
      "api_clinica": "http://localhost:8080/clinica",
      "api_especialista": "http://localhost:8080/especialista"
    }

  },

});
