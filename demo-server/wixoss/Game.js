// import Player from './Player'
const Player = require('./Player.js')
// import Turn from './Turn'
const Turn = require('./Turn.js')
// import Card from './Card'
const Card = require('./Card.js')
// import CardInfo from '../assets/mark/WDK01'
const CardInfo = require('./CardInfo.js')
// import Ruler from './Ruler.js'
const Ruler = require('./Ruler')

class Game {
  constructor(Player1, Player2, environment) {
    this.player1 = Player1,
    this.player2 = Player2,
    this.registers = [],
    this.observers = {},

    this.turnPlayer = null

    this.ruler = new Ruler(this,environment)

    //存放Turn
    this.turns = []
  }

  init(environment, hostDeck, guestDeck) { //1.初始化游戏，，根据传递的卡组不同而不同。。2.将做好的卡加入到对应的zone中。
    this.cook(hostDeck, guestDeck)
    this.open() //异步函数=>开始游戏的标志
    // this.createGame(environment,hD,gD)

  }

  cook(hostDeck, guestDeck) {
    hostDeck.content.mainDeck.forEach(wxid => {
      this.player1.mainDeck.push(new Card(wxid))
    });
    guestDeck.content.lrigDeck.forEach(wxid => {
      this.player1.mainDeck.push(new Card(wxid))
    })
  }

  open() {

  }

  get(register, args) {

  }

  //set(Player,'draw',{num:5,by:register}) = Player.draw(5,args)
  //还是要使用set，，根据注册器的种类执行不同的底层函数。
  set(register, todo, args) {
    this.listener(register, todo, args)
  }
  //可以监听所有的change里的参数。根据todo,args的不同，进行不同的变化。触发不同的监听器。
  //Ruler也是监听器。
  listener(register, todo, args) {

  }
  //将Player,Card,Zone,Effect,Ruler,token添加到注册列表中，其中token是动态添加的。在游戏开始时，由Ruler调用。
  register() {

  }

  go() {
    this.addLv0LrigToLrigzone().decideSuccessivelyHand().initHands().add7CardsToLifecloth().open()
  }

  draw(register,num) {
    register.handZone.cards.push(register.mainDeckZone.cards.splice(0,num));
  }
  
}

module.exports = Game