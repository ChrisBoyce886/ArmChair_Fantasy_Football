var db = require("../models");

var playerMap = {
  QB: {
    stat1: "Comp",
    stat2: "Yards",
    stat3: "Touchdownz"
  },
  WR: {
    stat1: "poop",
    stat2: "pee",
    stat3: "vomit"
  }
};

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(__dirname, "./index.html");
  });

  app.get("/extra/table/:position", function(req, res) {

    var position = req.params.position.toUpperCase(); // QB //WB
    db[position].findAll({}).then(function(results) {
      console.log(quarterBacks);
      res.render("partials/table", {
        layout: false,
        stat1: playerMap[position].stat1,
        stat2: playerMap[position].stat2,
        stat3: playerMap[position].stat3,
        players: results
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
