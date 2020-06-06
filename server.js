var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//local sever
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//handlebars
app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
console.log("Server listening on: http//localhost:" + PORT);

});

