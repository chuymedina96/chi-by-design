var express 	= require("express"),
	app			= express(),
	bodyParser	= require("body-parser"),
	mongoose	= require("mongoose");

//Routes
var indexRoutes = require("./routes/index.js");

//Body parser and express dir
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
//Templating engine
app.set("view engine", "ejs");

app.use("/", indexRoutes);

app.listen(process.env.PORT || 3000, function(){
	console.log("Server has started");
});
