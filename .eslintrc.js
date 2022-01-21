/* eslint-disable */

const bestPractices = require("./eslint/best-practices");
const override = require("./eslint/override");
const error = require("./eslint/error");
const variables = require("./eslint/variables");
const style = require("./eslint/style");
const es6 = require("./eslint/es6");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    ...bestPractices,
    ...error,
    ...variables,
    ...style,
    ...es6,
    ...override,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
};
