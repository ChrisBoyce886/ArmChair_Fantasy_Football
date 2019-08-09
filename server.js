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
    partialsDir: path.join(__dirname, 'views/partials'),
    defaultLayout: "main"    
  })
  
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Socket.io
var usernames = {};

var rooms = ["room1", "room2", "room3"];

io.sockets.on("connection", function(socket) {
  console.log("a user connected");
  // when the client emits 'addteam', this listens and executes
  socket.on("addteam", function(username) {
    // store the username in the socket session for this client
    socket.username = username;
    // store the room name in the socket session for this client
    socket.room = "room1";
    // add the client's username to the global list
    usernames[username] = username;
    // send client to room 1
    socket.join("room1");
    // echo to client they've connected
    socket.emit("updatechat", "SERVER", "You have connected to Locker Room 1");
    // echo to room 1 that a person has connected to their room
    socket.broadcast
      .to("room1")
      .emit("updatechat", "SERVER", username + " has connected to this room");
    socket.emit("updaterooms", rooms, "room1");
  });

  // when the client emits 'sendchat', this listens and executes
  socket.on("sendchat", function(msg) {
    // we tell the client to execute 'updatechat' with 2 parameters
    io.sockets.in(socket.room).emit("updatechat", socket.username, msg);
  });

  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", function() {
    console.log("user disconnected");

    // remove the username from global usernames list
    delete usernames[socket.username];
    // update list of users in chat, client-side
    io.sockets.emit("updateusers", usernames);
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
