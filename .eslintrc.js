module.exports = {
    "extends": "google",
    "parser": "babel-eslint",
    "plugins": ["react"],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true 
      }
    },
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  }
};
