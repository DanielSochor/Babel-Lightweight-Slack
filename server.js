require('dotenv').config();

const express = require('express');
const socketIO = require('socket.io');
const app = express()

const server = express()
  .listen(port, () => console.log(`Listening on ${ port }`));

const io = socketIO(server);

// Default port cannot be 3000
// If you change it from 9000, you must also change the "proxy" field in ./client/package.json
var port = process.env.PORT || 9000;

const path = require('path');
const env = process.env.NODE_ENV || 'development';
const reactConfig = require(path.join(__dirname, '/config/config.static.json'))[env];

var config = require('./config/config');

app.use(express.static(path.join(__dirname, reactConfig))); // serving react files
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

io.on('connection', function (socket) {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

// ****** IMPORTANT *******
// Don't create a get route for '/' because heroku will get confused and overwrite the static react files
// ************************

//@TODO Delete below after you verify the the app is working
//app.route('/').get(function(request, response) {
//   response.json(config);
// });