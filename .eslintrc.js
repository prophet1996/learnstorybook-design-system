module.exports = {
  extends: ["airbnb-base", "eslint:recommended", "plugin:react/recommended"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};

