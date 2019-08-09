var db = require("../models");

module.exports = function(app) {
  // Get all QBs
  app.get("/api/QB", function(req, res) {
    db.QB.findAll({}).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });

  // Get all RBs
  app.get("/api/RB", function(req, res) {
    db.RB.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all WRs
  app.get("/api/WR", function(req, res) {
    db.WR.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all WR2s
  // app.get("/api/wr2", function(req, res) {
  //   db.WR2.findAll({}).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // Get all TEs
  app.get("/api/TE", function(req, res) {
    db.TE.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all Ks
  app.get("/api/K", function(req, res) {
    db.K.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all DSTs
  app.get("/api/DST", function(req, res) {
    db.DST.findAll({}).then(function(results) {
      res.json(results);
    });
  });
};
