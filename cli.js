#!/usr/bin/env node

const verifiedbyvisa = require('./index');
const program = require('commander');
const path = require('path');
const pkg = require(path.join(__dirname, 'package.json'));
console.log(`
 ________________________________________
  I was sick of wasting time.
  So I made this.
  It doesnt save or copy your password.
  Just makes it easier.
  To figure out which character is the 5, 12
  etc in your password <3
 ---------------------------------------
  character postion on the left.
 ---------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`)

program
    .version(pkg.version)
    .option('-p, --password <password>', 'The password for your verified by visa.')
    .parse(process.argv);

const password = program.password || "test";


verifiedbyvisa.init(password);
