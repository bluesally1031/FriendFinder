////////////////////////
//  Dependencies 
////////////////////////
var path = require("path");

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

////////////////////////
//  HTML GET Router to "/api/friends" page
////////////////////////

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "/api/friends.html"));
    });

    // A default, catch-all route that leads to home.html which displays the home page.
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

