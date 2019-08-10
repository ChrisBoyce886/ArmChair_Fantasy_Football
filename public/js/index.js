// Get references to page elements
var $qbBtn = $("#qb-btn");
var $rbBtn = $("#rb-btn");
var $wrBtn = $("#wr-btn");
var $wr2Btn = $("#wr2-btn");
var $teBtn = $("#te-btn");
var $kBtn = $("#k-btn");
var $defBtn = $("#def-btn");

var playerScoreArr = [];
var totalScore = 0;

// Get functions for getting player data and displaying to html
var getQBs = function() {
  return $.ajax({
    url: "players/table/QB",
    type: "GET"
  }).then(function(data) {
    $("#tableContainer").html(data);
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

var getTotalScore = function() {
  for (var i in playerScoreArr) {
    totalScore += playerScoreArr[i];
  }

  console.log(totalScore);
};

var displayGameover = function() {
  window.location.assign("./gameover.html");
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

    console.log("add button clicked");

    console.log(playerInfo.rank);
    // emit rank to player score
    var rank = parseInt(playerInfo.rank);
    console.log(typeof rank);
    playerScoreArr.push(rank);
    console.log(playerScoreArr);
    // compare arrays to determine winner
    // display roster to gameover.html
    // display winner to gameover.html

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

// SOCKET.IO
$(function() {
  var socket = io();

  // on connection to server, ask for user's team name with an anonymous callback
  socket.on("connect", function() {
    // call the server-side function 'addteam' and send one parameter (value of prompt)
    socket.emit("addteam", prompt("What's your team name?"));
  });

  $("#chat-form").submit(function(e) {
    e.preventDefault(); // prevents page reloading

    socket.emit("sendchat", $("#m").val());
    $("#m").val("");
    return false;
  });

  socket.on("updatechat", function(teamName, msg) {
    $("#messages").append($("<li>").text(teamName + ": " + msg));
  });


// const addChatTyping = (data) => {
//   data.typing = true;
//   data.message = 'is typing';
//   addChatMessage(data);
// }


// socket.on('typing', (data) => {
//   addChatTyping(data);
// });


// // Removes the visual chat typing message
// const removeChatTyping = (data) => {
//   getTypingMessages(data).fadeOut(function () {
//     $(this).remove();
//   });
// }

// // Whenever the server emits 'stop typing', kill the typing message
// socket.on('stop typing', (data) => {
//   removeChatTyping(data);
// });
});

$(function() {
  var socket = io();

  // Start game button
  $("#start-btn").click(function() {
    console.log("start btn clicked");
    socket.emit("startgame");
  });

  // Countdown clock starts
  socket.on("starttimer", function() {
    console.log("starttimer");
    var timerValue = 300;
    // eslint-disable-next-line
    var clock = $(".timer-clock").FlipClock(timerValue, {
      countdown: true,
      clockFace: "MinuteCounter",
      callbacks: {
        stop: function() {
          socket.emit("timerstop");
        }
      }
    });
    $("#start-btn").hide();
    $(".btn-grp-wrap").css("margin-top", "-2.5%");
    getQBs()
  });

  socket.on("gameover", function() {
    getTotalScore();
    alert("Time is up!");
    // Display gameover.html to all clients
    displayGameover();
  });
});
