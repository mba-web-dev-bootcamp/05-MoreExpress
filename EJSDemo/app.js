var express = require("express");
var app = express();

app.use(express.static("public"));
//app.use(express.static("views/partial"))
app.set("view engine", "ejs");


app.get("/", function(req, res){
   res.render("home");
});

app.get("/posts", function(request, response){
    var myPosts = [
        {title: "Post 1", author: "Susy" },    
        {title: "Post 2", author: "Bob" },    
        {title: "Post 3", author: "Bill" },    
        {title: "Post 4", author: "Amed" },    
        {title: "Post 5", author: "Singh" },    
    ];
    response.render("posts", {posts: myPosts});
});

app.get("/Francine", function(req, res){
   res.send("She retraced her steps.") 
});

app.get("/fallinlovewith/:thing", function(request, response){
   var thing = request.params.thing;
   response.render("love", {thingVar: thing});
    //   response.send("You fell in love with " + thing);
});



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening!!!");
});