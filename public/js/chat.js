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

  socket.on("updatechat", function(username, msg) {
    $("#messages").append($("<li>").text(username + ": " + msg));
  });
});
