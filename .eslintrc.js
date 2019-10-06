module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "script",
    ecmaFeatures: {}
  },
  plugins: [
    "lodash-to-native"
  ],
  rules: {
    "lodash-to-native/map": 2
  },
  env: {}
};
