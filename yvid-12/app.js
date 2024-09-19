const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

// $2b$10$NESd7o79YKjJvLj2jJ9Che/Dc83kUb6ozMK.BHiEJULWIiCOScviq
// ghiellei

app.get("/", function(req, res) {
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("ghiellei", salt, function(err, hash) {
    //         console.log(hash)
    //     });
    // });

    bcrypt.compare("ghiellei", "$2b$10$NESd7o79YKjJvLj2jJ9Che/Dc83kUb6ozMK.BHiEJULWIiCOScviq", function(err, result) {
        console.log(result);
    });
})

app.listen(3000);