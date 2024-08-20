const express = require('express'); 
const app = express();

app.use(function(req, res, next) {
    console.log('middleware chala');
    next();
}); 

// create routes

app.get("/", function(req, res){
    res.send("Campioun bro!");
})

app.get("/profile", function(req, res){
    return next(new Error("Not implementd"));
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something broke!');
})

app.listen(3000);