var express       = require("express"),
    router        = express.Router(),
    bodyParser 	  = require("body-parser");

router.get("/", function(req, res){
	res.render("landing");
});
router.get("/chibydesign", function(req, res){
	res.render("chibydesign/index");
});
router.get("*", function(req, res){
	res.render("404");
});

module.exports = router;
