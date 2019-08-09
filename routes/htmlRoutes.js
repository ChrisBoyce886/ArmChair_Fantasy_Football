var db = require("../models");

var playerMap = {
  QB: {
    stat1: "Passing Yards",
    stat2: "Passing Touchdowns",
    stat3: "Interceptions",
    stat4: "Completion Percentage",
    stat5: "Rushing Yards",
    stat6: "Rushing Touchdowns"
  },
  RB: {
    stat1: "Rushing Attempts",
    stat2: "Rushing Yards",
    stat3: "Rushing Touchdowns",
    stat4: "Receptions",
    stat5: "Receiving Yards",
    stat6: "Receiving Touchdowns"
  },
  WR: {
    stat1: "Receptions",
    stat2: "Receiving Yards",
    stat3: "Receiving Touchdowns",
    stat4: "Yards Per Reception",
    stat5: "Receptions Per Game",
    stat6: "Receiving Yards Per Game"
  },
  WR2: {
    stat1: "Receptions",
    stat2: "Receiving Yards",
    stat3: "Receiving Touchdowns",
    stat4: "Yards Per Reception",
    stat5: "Receptions Per Game",
    stat6: "Receiving Yards Per Game"
  },
  TE: {
    stat1: "Receptions",
    stat2: "Receiving Yards",
    stat3: "Receiving Touchdowns",
    stat4: "Yards Per Reception",
    stat5: "Receptions Per Game",
    stat6: "Receiving Yards Per Game"
  },
  K: {
    stat1: "Field Goal Attempts",
    stat2: "Field Goals Made",
    stat3: "Field Goal Percentage",
    stat4: "Extra Point Attempts",
    stat5: "Extra Points Made",
    stat6: "Extra Points Percentage"
  },
  DST: {
    stat1: "Tackles",
    stat2: "Sacks",
    stat3: "Interceptions",
    stat4: "Interception TDs",
    stat5: "Forced Fumbles",
    stat6: "FF Touchdowns"
  }
};

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(__dirname, "/index.html");
  });

  // Get player data
  app.get("/players/table/:position", function(req, res) {
    var position = req.params.position.toUpperCase(); // QB // RB // WR // TE // K // DST
    db[position].findAll({}).then(function(results) {
      console.log(results);
      res.render("partials/" + position, {
        layout: false,
        stat1: playerMap[position].stat1,
        stat2: playerMap[position].stat2,
        stat3: playerMap[position].stat3,
        stat4: playerMap[position].stat4,
        stat5: playerMap[position].stat5,
        stat6: playerMap[position].stat6,
        players: results
      });
    });
  });

  // // Get player rank
  // app.get("/players/table/:position/:rank", function(req, res) {
  //   var position = req.params.position.toUpperCase(); // QB // RB // WR // TE // K // DST
  //   db[position].findOne({ Where: { rank: req.body.position.rank } } ).then(function(results) {
  // })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
