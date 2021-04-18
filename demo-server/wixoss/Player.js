// import Zone from './Zone'
const Zone = require('./Zone.js')

class Player {
  constructor(deck){
    //存储的数据

    //区域
    this.handZone = new Zone('handZone');
    this.enerZone = new Zone('enerZone');
    this.lrigZone = new Zone('lrigZone');
    this.signiZone = [new Zone('signiZone0'),new Zone('signiZone1'),new Zone('signiZone2')];
    this.checkZone = new Zone('checkZone');
    this.keyZone = new Zone('keyZone');
    this.lifeClothZone = new Zone('lifeClothZone');
    this.mainDeckZone = new Zone('mainDeckZone');
    this.lrigDeckZone = new Zone('lrigDeckZone');
    this.TrashZone = new Zone('TrashZone');
    this.lrigTrashZone = new Zone('lrigTrashZone');
    this.excludedZone = new Zone('excludedZone');
    this.cheerZone = new Zone('cheerZone');

    this.mainDeck = deck.mainDeck;
    this.lrigDeck = deck.lrigDeck;

    //附加属性
  }
  //操作和行为  操作总是需要向client发送数据，而行为是由client发送数据而来的。。
  //行为
  //洗切牌组
  shullfe() {

  }
  //抽n张牌
  draw(num) {
    change(this,'draw',{num}) //触发对应的钩子函数
  }
  //能量填充n
  charge(num) {
    change(this,'charge',{num})
  }
  //从卡组上方拿n张牌放到能量区。
  enerCharge() {

  }
  //舍弃n张牌
  disCard(num) {

  }
  //随即舍弃n张牌
  disCardRandomly() {

  }
  //舍弃指定的牌
  disCardById() {

  }

  //操作

  //主动充能操作
  changeAction() {

  }
  //主动成长操作
  growAction() {

  }
  //主动召唤精灵
  sommonSignisAction() {

  }
  //主动召唤共鸣精灵
  sommonResonaSignisAction() {

  }
  //主动废弃精灵
  trashSignisAction() {

  }
  //主动使用法术
  useSpellAction() {

  }
  //主动使用技艺
  useArtAction() {

  }
  //主动使用钥匙
  useKeyAction() {

  }
  //使用【起】效果
  useActEffectAction() {

  }
  //触发迸发效果
  triggerBurstEffectAction() {

  }
  //精灵主动攻击
  signiAttackAction() {

  }
  //分身主动攻击
  lrigAttackAction() {

  }
  //主动防御
  GuardAction() {

  }
  //乘骑操作
  layAction() {

  }

  //结束阶段
  //结束主要阶段
  endMainPhase() {

  }
  //结束精灵攻击阶段
  endSignisAttackPhase() {

  }
  //结束分身攻击阶段
  endLrigAttackPhase() {

  }
  //回合结束
  endTurn() {

  }
}

module.exports =  Player