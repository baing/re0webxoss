import Game from "./Game";
import Phase from './Phase'

function gamestart(){
  const game = new Game(Player1,Player2)
  game.init()  //负责将双方的数据写入game中
  Phase.start(game)  //游戏真正开始
}

