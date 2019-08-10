// Dependencies
require("dotenv").config();
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var exphbs = require("express-handlebars");

var db = require("./models");

var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Socket.io
var players = {};

var rooms = ["room1", "room2", "room3"];

io.sockets.on("connection", function(socket) {
  console.log("a user connected");
  // when the client emits 'addteam', this listens and executes
  socket.on("addteam", function(teamName) {
    // store the team name in the socket session for this client
    socket.teamName = teamName;
    // store the room name in the socket session for this client
    socket.room = "room1";
    // add the client's team name to the global players list
    players[teamName] = teamName;
    // send client to room 1
    socket.join("room1");
    console.log(teamName + " has joined");
    // echo to client they've connected
    socket.emit(
      "updatechat",
      "SERVER",
      "you have connected to the locker room"
    );
    // echo to room 1 that a person has connected to their room
    socket.broadcast
      .to("room1")
      .emit("updatechat", "SERVER", teamName + " has connected to this room");
    socket.emit("updaterooms", rooms, "room1");
  });

  // when the client emits 'sendchat', this listens and executes...
  socket.on("sendchat", function(msg) {
    // we tell the client to execute 'updatechat' with 2 parameters
    io.sockets.in(socket.room).emit("updatechat", socket.teamName, msg);
  });

  // When the client emits 'startgame', this listens and executes...
  socket.on("startgame", function() {
    console.log("------ GAME STARTED -----");
    // tell client to execute 'starttimer'
    io.emit("starttimer", "test");
  });

  // Timer stops -> Game Over
  socket.on("timerstop", function() {
    // pull data from data base
    // app.get("api/roster", function(req, res) {
    //   console.log(res);
    //   res.json({key: "value"});
        // res.json(results);
        // console.log(results);
        // var data = JSON.parse(results);
      // });
    // parse and tally data
    // io.emit("gameover", data);
    io.emit("gameover");
  });

  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.teamName
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.teamName
    });
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", function() {
    console.log("user disconnected");

    // remove the username from global usernames list
    delete players[socket.teamName];
    // update list of users in chat, client-side
    io.sockets.emit("updateusers", players);
    // echo globally that this client has left
    socket.broadcast.emit(
      "updatechat",
      "SERVER",
      socket.username + " has disconnected"
    );
    socket.leave(socket.room);
  });
});

// var syncOptions = { force: true };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  http.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
