// Get references to page elements
var $qbBtn = $("#qb-btn");
var $rbBtn = $("#rb-btn");
var $wrBtn = $("#wr-btn");
var $wr2Btn = $("#wr2-btn");
var $teBtn = $("#te-btn");
var $kBtn = $("#k-btn");
var $defBtn = $("#def-btn");

// Get functions for getting player data and displaying to html
var getQBs = function() {
  return $.ajax({
    url: "players/table/qb",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
  });
};

var getRBs = function() {
  return $.ajax({
    url: "players/table/rb",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
  });
};

var getWRs = function() {
  return $.ajax({
    url: "players/table/wr",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
  });
};

var getWR2s = function() {
  return $.ajax({
    url: "players/table/wr2",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
  });
};

var getTEs = function() {
  return $.ajax({
    url: "players/table/te",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
  });
};

var getKs = function() {
  return $.ajax({
    url: "players/table/k",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
  });
};

var getDEF = function() {
  return $.ajax({
    url: "players/table/dst",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
  });
};

// Event listeners for position buttons
$qbBtn.on("click", getQBs);
$rbBtn.on("click", getRBs);
$wrBtn.on("click", getWRs);
$wr2Btn.on("click", getWR2s);
$teBtn.on("click", getTEs);
$kBtn.on("click", getKs);
$defBtn.on("click", getDEF);
