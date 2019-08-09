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
    url: "players/table/QB",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").text(data);
    attachBtnHandler();
  });
};

var getRBs = function() { 
  return $.ajax({
    url: "players/table/rb",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
    attachBtnHandler();
  });
};

var getWRs = function() {
  return $.ajax({
    url: "players/table/wr",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
    attachBtnHandler();
  });
};

var getWR2s = function() {
  return $.ajax({
    url: "players/table/wr2",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
    attachBtnHandler();
  });
};

var getTEs = function() {
  return $.ajax({
    url: "players/table/te",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
    attachBtnHandler();
  });
};

var getKs = function() {
  return $.ajax({
    url: "players/table/k",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
    attachBtnHandler();
  });
};

var getDEF = function() {
  return $.ajax({
    url: "players/table/dst",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
    attachBtnHandler();
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

// Add players to user's team

function attachBtnHandler() {
  var $addBtnList = $(".add-btn");
  console.log($addBtnList);
  $addBtnList.on("click", function(event) {
    event.preventDefault();

    var playerInfo = event.currentTarget.dataset;

    console.log(playerInfo);

    console.log("add button clicked");

    $("#roster").append(
      "<tr><td>" +
        playerInfo.name +
        "</td><td>" +
        playerInfo.team +
        "</td><td>" +
        playerInfo.position +
        "</td><td>" +
        playerInfo.stat1 +
        "</td><td>" +
        playerInfo.stat2 +
        "</td><td>" +
        playerInfo.stat3 +
        "</td><td>" +
        playerInfo.stat4 +
        "</td><td>" +
        playerInfo.stat5 +
        "</td><td>" +
        playerInfo.stat6 +
        "</td>"
    );
  });
}