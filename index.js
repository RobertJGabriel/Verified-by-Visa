#!/usr/bin/env node

module.exports = {

    init: function(password) {
        var passwordLength = password.length,
            numbers = [];
        for (var i = 0; i < passwordLength; i++) {
            numbers.push((i + 1));
        }
        return numbers.join(' ');
    }

};
