/**
 * The file setup-jest.js and the configuration 'setupFilesAfterEnv' here are not need if the jest builder form
 * https://github.com/just-jeb/angular-builders is used.
 */
module.exports = {
  collectCoverage: true,
  coverageReporters: ['html', 'cobertura'],
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
};
