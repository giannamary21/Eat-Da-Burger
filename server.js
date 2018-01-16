var express = require("express");
var bodyParser = require("body-parser");
var mOverride = require("method-override");
var port = process.env.PORT || 3000;
var app = express();


app.use(express.static(__dirname + "/public"));

app.use(mOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_Controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(port);

