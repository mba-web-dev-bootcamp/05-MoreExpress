var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");


app.get("/", function(request, response){
   response.render("home"); 
});

app.get("/friends", function(request, response){
   response.render("friends", {friends: friends});
});

app.post("/addfriend", function(request, response){
   console.log(request.body.newfriend);
   friends.push(request.body.newfriend);
   response.redirect("/friends");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started"); 
});