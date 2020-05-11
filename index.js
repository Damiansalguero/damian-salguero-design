const express = require("express");
const app = express();

//For importing it into test file
exports.app = app;
const hb = require("express-handlebars");

//Access to css/html
app.use(express.static("./public"));

//Setup handlebars
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

/////////////////////ROUTES/////////////////////

//Route "Registration"//

app.get("/", (req, res) => {
    res.render("index", {
        layout: "main"
    });
});

app.get("/de", (req, res) => {
    res.render("german", {
        layout: "main"
    });
});

//Route "English"
app.get("/en", (req, res) => {
    res.redirect("/");
});

///////////NODE + HEROKU SERVER////////////////
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Server Has Started!");
});
