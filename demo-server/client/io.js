// const Game = require('../wixoss/Game.js')
const io = require('../app.js')


function socketioCB(socket) {
  //出错了
  socket.on('error', (args) => {
    io.to(args.roomName).emit('error')
  });
  //失去连接
  socket.on('disconnect', (reason) => {});
  //创建房间
  socket.on('createRoom', (args) => {
    socket.join(args.roomMassage);
    io.to(args.roomMassage).emit('createRoom',{host:socket.id,hostID:args.userName});
  });
  //加入房间
  socket.on('joinRoom', (args) => {
    socket.join(args.roomName);
    io.to(arg.roomName).emit('joinRoom',{id:args.id});
  });
  //离开房间
  socket.on('leaveRoom', (args) => {
    socket.leave(args.roomName)
    io.to(args.roomName).emit('leaveRoom',{id:args.id})
  });
  //锁住OB
  socket.on('lockSpec', (args) => {
    io.to(args.roomName).emit('lockSpec',{})
  });
  //解锁OB
  socket.on('unlockSpec', (args) => {
    io.to(args.roomName).emit('lockSpec',{})
  });
  //更换位置
  socket.on('changePosition', (args) => {
    io.to(args.roomName).emit('lockSpec',{})
  });
  //准备
  socket.on('ready', (args) => {
      //如果双方都准备好了，那么就开始游戏。
      io.to(args.roomName).emit('ready')
      if(true){
        io.to(args.roomName).emit('gameStart')
      }
      new Game()
  });
  //没准备好
  socket.on('unready', (args) => {
    io.to(args.roomName).emit('ready')
  });
  //聊天
  socket.on('chat', () => {});
  //认输
  socket.on('surrender', () => {});
  //踢人
  socket.on('tick', () => {});
  //被踢
  socket.on('drop', () => {});
  //游戏开始

  //看直播
  socket.on('watchLive', () => {}); //todo
  //获取录像
  socket.on('getReplayList', () => {});
  //回放录像
  socket.on('getReplayContent', () => {});
}

module.exports = socketioCB