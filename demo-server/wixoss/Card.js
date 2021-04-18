// import CardInfo from '../assets/mark/WDK01.js'
const CardInfo = require('../assets/mark/WDK01/WDK01.js')
// import Effect from './Effect.js' 
const Effect = require('./Effect.js')

class Card {
  constructor(wxid){

    this.color = CardInfo[wxid].color

    this.effects = [];     //card面板（mark）上的效果（Effect）
    this.newEffects = [];  //card获得的效果

    this.initEffects(wxid)
  }

  initEffects(wxid) {   //根据wxid把cardinfo里的效果预编译为Effect对象
    let wxid_ = wxid.replace('-','_')
    let type = typeof CardInfo[wxid_]
    if(type != 'object') {
      console.error('类型错误:' + wxid_)
    }
    if(type.length == 0) {
      //该牌为白板，白板不需要处理
    } else {
      if(typeof type[0] == 'string') {
        //该牌为复刻
        this.initEffects(type[0])
      }
      if(typeof type[0] == 'object') {
        //该牌为原装
        this.cook(type)
      }
    }   
    // 辨别cardInfo[wxid_]的类型，
    //1.如果是字符串string代表是复刻卡，
    //2.空数组代表白板，通过length来判断
    //3.对象数组里的每一个对象对应一个Effect()
    //Effect()可以有默认值，并且接受一个参数，这个参数就是这个对象。

    
  }

  //一个对象对应一个Effect(),每个key都会成为Effect的对应参数。
  cook(type) {
    type.filter((objs) => {
      Object.keys(objs).filter((obj) => {
        switch(obj) {
          case 'tag':
            this.effects.push(new Effects());
            break;
          // case ''
        }
      })
    })
  }
}

module.exports = Card