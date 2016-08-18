#!/usr/bin/env node

const verifiedbyvisa = require('./index');
const program = require('commander');
const path = require('path');
const pkg = require(path.join(__dirname, 'package.json'));
const chalk = require("chalk");
program
    .version(pkg.version)
    .option('-p, --password <password>', 'The password for your verified by visa.')
    .parse(process.argv);

const password = program.password || "test";

console.log(chalk.green.bold("Password: ") + password.split('').join(' '))
console.log(chalk.red.bold("Postion : ")  + verifiedbyvisa.init(password));
