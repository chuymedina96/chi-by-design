var express 	= require("express"),
	app			= express(),
	bodyParser	= require("body-parser"),
	mongoose	= require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("landing.ejs");
});
app.listen(process.env.PORT || 3000, function(){
	console.log("Server has started");
});
