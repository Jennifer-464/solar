const express = require("express");
const app = express();


app.engine("html", require("ejs").renderFile); // helps render HTML code
app.use(express.static("public"));


// routes
app.get("/", function(req, res){
    // res.send("works");
    res.render("index.html");
}); // root route

app.get("/mercury", function(req, res){
    // res.send("mercury page");
    res.render("mercury.html");
}); // mercury route

app.get("/venus", function(req, res){
    // res.send("venus page");
    res.render("venus.html");
}); // venus route

app.get("/earth", function(req, res){
    // res.send("earth page");
    res.render("earth.html");
}); // earth route

app.get("/source", function(req, res){
    // res.send("earth page");
    res.render("source.html");
}); // source route


// server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("express server running.");
});