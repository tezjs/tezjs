/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset:"ts-jest",
  "coverageDirectory":"./coverage",
  testEnvironment: 'node',
  resetMocks:true,
  clearMocks:true
};