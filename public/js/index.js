// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

var $qbBtn = $("#qb-btn");
var $rbBtn = $("#rb-btn");
var $wrBtn = $("#wr-btn");
var $wr2Btn = $("#wr2-btn");
var $teBtn = $("#te-btn");
var $kBtn = $("#k-btn");
var $defBtn = $("#def-btn");

// var $playerList = $("player-list");

// The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getTable: function(position) {
//     return $.ajax({
//       url: "players/table/" + position,
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

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

// refreshExamples gets new examples from the db and repopulates the list
// var refreshPlayers = function() {
//   console.log("refreshing players");
//   getTable().then(function(data) {
//     $("#tableContainer").html(data);
// for (var i = 0; i < data.length; i++) {
//   var $tr = $("<tr>");
//   var player = data[i];
//   var records = ["noexist", "name", "team", "position", "comp", "yards", "touchdowns", "a", "b", "c"];

//   records.forEach(function(record) {
//     var value = player[record] || "";
//     var $td = $("<td>").html(value);
//     $tr.append($td);
//   });

//   $("tbody").append($tr);
// }

// var $td = $("<td>");

// var $players = data.map(function() {
//   var $a = $("<a>")
//     .text(player.text)
//     .attr("href", "/example/" + player.id);

//   var $li = $("<li>")
//     .attr({
//       class: "list-group-item",
//       "data-id": player.id
//     })
//     .append($a);

//   var $button = $("<button>")
//     .addClass("btn btn-danger float-right delete")
//     .text("ｘ");

//   $li.append($button);

//   return $li;
// });

// $playerList.empty();
// $playerList.append(result);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

$qbBtn.on("click", getQBs);
$rbBtn.on("click", getRBs);
$wrBtn.on("click", getWRs);
$wr2Btn.on("click", getWR2s);
$teBtn.on("click", getTEs);
$kBtn.on("click", getKs);
$defBtn.on("click", getDEF);
