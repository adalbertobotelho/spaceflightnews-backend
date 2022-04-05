const NodeEnvironment = require("jest-environment-node");
const { execSync } = require("child_process");
const { resolve } = require("path");

const prismaCli = "./node_modules/.bin/prisma";

require("dotenv").config({
  path: resolve(__dirname, "..", ".env.test"),
});

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  setup() {
    this.global.process.env.DATABASE_URL = process.env.DATABASE_URL;

    execSync(`${prismaCli} migrate reset --force`);
  }
}

module.exports = CustomEnvironment;