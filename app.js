var express 	= require("express"),
	app			= express(),
	bodyParser	= require("body-parser"),
	mongoose	= require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});
app.get("/chibydesign", function(req, res){
	res.render("chibydesign/index");
});
app.get("*", function(req, res){
	res.render("404");
});
app.listen(process.env.PORT || 3000, function(){
	console.log("Server has started");
});
