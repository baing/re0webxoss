const cardInfo_mark = require('../assets/WDK01mark/WDK01_mark.js')
const { default: Effect } = require('./Effect.js')

// class Game {
//   constructor() {
//     this.state = null
//     this.effects = []
//   }
//   attach(effect) {
//     this.effects.push(effect)
//   }
//   setState(newState) {
//     this.state = newState;
//     this.effects.forEach(e => e.trigger())
//   }
// }

// class Effect {
//   constructor(effectType) {
//     this.type = effectType
//   }
//   trigger() {
//     console.log('effect触发了')
//   }
// }

// const game1 = new Game()
// const effect1 = new Effect('constEffect')
// game1.attach(effect1)
// game1.setState('更新了')

const deck = {
  lrigDeck: ['WDK01_001','WDK01_002','WDK01_003','WDK01_004','WDK01_005','WDK01_006','WDK01_007','WDK01_008','WDK01_009','WDK01_010'],
  mainDeck: ['WDK01_011','WDK01_012','WDK01_013','WDK01_014','WDK01_015','WDK01_016','WDK01_017','WDK01_018','WDK01_019','WDK01_020',
             'WDK01_011','WDK01_012','WDK01_013','WDK01_014','WDK01_015','WDK01_016','WDK01_017','WDK01_018','WDK01_019','WDK01_020',
             'WDK01_011','WDK01_012','WDK01_013','WDK01_014','WDK01_015','WDK01_016','WDK01_017','WDK01_018','WDK01_019','WDK01_020',
             'WDK01_011','WDK01_012','WDK01_013','WDK01_014','WDK01_015','WDK01_016','WDK01_017','WDK01_018','WDK01_019','WDK01_020',],
}
//cardInfo[wxid]的值。。
class Card {
  constructor(wxid) {
    this.wxid = wxid
    this.effect = []
    //todo this.cid
    for (let item in cardInfo_mark[wxid]) {
      if(item != 'effect') {
        this[item] = cardInfo_mark[wxid][item]
      }

      if(item == 'effect') {
        cardInfo_mark[wxid].effect.forEach(item => {
          this.effect.push(new Effect(item,this)) 
        })
      }
    }
    // this.wxid = wxid,
    // this.name = cardInfo[wxid].name,
    //第一步，辨别其值
    // if(cardInfo[wxid].length == 0){
    //   //白板卡
    // } else if(typeof cardInfo[wxid] == 'string') {
    //   //复刻卡

    // } else if(typeof cardInfo[wxid] == 'object') {
    //   //原装卡--安装效果
    //   cardInfo[wxid].tag
    // }

    // this.wxid = cardInfo.wxid
    // for (item of cardInfo[wxid]) {
    //   this[item] = cardInfo.wxid[item]
    // }

    console.log(this)
  }
}

// class Cook {
//   constructor(wxid) { //WDK01_001
    
//   }
// }

new Card('WDK01_001')