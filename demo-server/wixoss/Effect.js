//当创建effect时需要的包

//传入的是一个对象

class Effect {
  constructor(eff,card){

    //
    this.effectType = eff.effectType
    this.source = card //card,player,null
    this.cost = eff.cost;
    this.act = eff.act;
    this.script = eff.script;
    this.useCondition = eff.useCondition
  }
}

module.exports = Effect

class Ruler {
  constructor(game) {
    this.source = game
    
  }
}

//this.socket.emit('gameMessage',{grow:{cost:{red:3},act:'grow'}})
//传过来一个json，整个json会经由某个函数处理，相应的改变data里的值。

let gameClient = {
  
}