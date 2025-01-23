module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Add setup files to configure the testing environment
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // Match test files within the `src` directory
  testMatch: ["<rootDir>/src/**/*.test.js"],

  // Module file extensions for importing
  moduleFileExtensions: ["js", "jsx", "json"],

  // Module name mappings to mock static assets and CSS imports
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
  },

  // Resolve modules in `src` as well as `node_modules`
  moduleDirectories: ["node_modules", "src"],

  // Transform configuration for JSX and ES modules
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
