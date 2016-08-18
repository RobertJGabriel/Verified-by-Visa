#!/usr/bin/env node

module.exports = {

    init: function(password) {
        var passwordLength = password.length;
        for (var i = 0; i < passwordLength; i++) {
            console.log( (i + 1) + " : " +  password.charAt(i));
        }
    }

};
