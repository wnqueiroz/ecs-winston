module.exports = {
  clearMocks: true,
  testEnvironment: "node",
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.spec.ts"],
  coverageDirectory: "__tests__/coverage",
  collectCoverageFrom: ["src/**/*.ts", "!src/**/index.ts"],
};
