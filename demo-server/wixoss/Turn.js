// import Phase from './Phase.js'
const Phase = require('./Phase.js')
// import StateMachine from 'javascript-state-machine'
const StateMachine = require('javascript-state-machine')
//会根据当前条件跳过相应的阶段，WX01-004 花代二改


//从其中一人的回合到另外一人的回合 p1turn,p2turn
class Turn {
  constructor() {
    this.phase = new StateMachine({
      init: 'beforeStart',
      transitions: [
        {name: '',from: '',to: ''}, 
        {}
      ]
    })
  }
}

module.exports = Turn