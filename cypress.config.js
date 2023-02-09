const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjIr4_Kq4P9AhUZQUgAHRHrA34YABAAGgJjZQ&ohost=www.google.com&cid=CAASJORof6UlH_aGK5sJyaOBUpjBnnxoXfe6f4u_F1g1LErFS-MXmw&sig=AOD64_07P9QIf8KvAG1kpR0XDQjxDmh1Uw&q&adurl&ved=2ahUKEwj1vYjKq4P9AhVqJ7kGHfcZCZ4Q0Qx6BAgJEAE',
    viewportHeight: 900,
    viewportWidth: 1400,
    chromeWebSecurity: false,
    specPattern: "**/*.feature",
    suportFile: 'cypress/support/e2e.js',
    setupNodeEvents,
  },
});
