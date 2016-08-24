#!/usr/bin/env node
"use strict";

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

const leftPad = function (str, length, padChar) {
    padChar = padChar || ' ';
    if (length <= str.length) {
        return str;
    }
    let padding = (new Array(length - str.length)).fill(padChar);
    return padding + str;
}

const password_string = password.split('').map(function (x, i) {
    return leftPad(x, (i + 1).toString().length);
}).join(' ');

console.log(chalk.green.bold("Password: ") + password_string);
console.log(chalk.red.bold("Postion : ")  + verifiedbyvisa.init(password));
