const express = require('express')
const app = express()
const server = require('http').createServer(app);
const fs = require('fs');
// const { default: ioCallback } = require('./io');
const io = require('socket.io')(server);
module.exports = io
const ioCallback = require('./io.js')
// const Game = require('./wixoss/Game')
// const socket = require('./socketio/io.js');
// import socket from './socketio/io.js'
// import {socketioCB} from './socketio/io.js'

// const socketioCB = require('./client/io.js')


const webxoss = []   //先将玩家分类，
const cardInfo = ['WDK01']

const port = 2020

app.use(express.static('static'))

app.get('/',(req,res) => {
  // res.send('hello world')
  res.sendFile(__dirname + '/views/index.html')
})

server.listen(port,() => {
  console.log('listening 2020')
})


// webxoss()  //率先支持dive环境


// socket(io)
// io.on('connection',socketioCB)

// module.exports = io
// console.log(socketioCB)
io.on('connection', ioCallback());




