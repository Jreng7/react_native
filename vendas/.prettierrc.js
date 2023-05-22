module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  singleQuote: true,
  endOfLine: 'auto',
};

{
  "prettier/prettier"; [
    "error",
    {
      "singleQuote": true,
      "parser": "flow",
      "endOfLine": "auto"
    }
  ]
}


module.exports = {
  "rules": {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
  }
};