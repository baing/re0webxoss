class Ruler {
  constructor(environment) {

  }


  Ready() {
    //1.将一张0级分身放入到lrig区域。2.确定先后手。3.抽5张牌,并且双方换牌。5.将卡组顶7张牌加入到生命迸发。6.open，游戏开始。7.此时发动了lrig的效果。
    //Ruler链式调用。 Ruler.addLv0LrigToLrigzone().decideSuccessivelyHand().initHands().add7CardsToLifecloth().open()

    //根据环境不同，有不同的方式，利用到注册。
    //①洗切牌组
    //从卡组中抽5张牌
    //玩家可以更换任意数量的牌。（包含操作的函数怎么写？）S -> C -> S -> C  服务端向客户端发送请求，然后客户端回应服务端，然后服务端告诉客户端完成请求，客户端渲染。

    //通过get拿到2位Player。
    get(Players).forEach((player) => {
      player.draw(5)
    },this).changeCard()
    
  }

  addLv0LrigToLrigzone() {
    //目标是双方的player，通过lrigDeck检索到里面的等级为0的lrig，然后通过一个放置函数移动到lrigzone区域
    //
    return this;
  }

  decideSuccessivelyHand() {
    let flag = Math.floor(Math.random(0,1) + 0.5) 
    if(flag) {
      this.successivelyHand = this.Player1
    } else {
      this.successivelyHand = this.Player2
    }
    return this;
  }

  initHands() {
    //包括2部分，抽5张牌，以及更换任意数量的牌。是一个双方都要执行的函数。draw（5），reDraw里面含有draw
    return this;
  }

  add7CardsToLifecloth() {
    return this;
  }

  open() {
    return this;
  }
}