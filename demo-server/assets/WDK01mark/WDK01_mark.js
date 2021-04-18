const WDK01 = {
  WDK01_001: {
    name: 'レイラ＝フルスロットル',
    cardtype: 'LRIG',
    classes: 'レイラ',
    color: 'red',
    level: 4,
    growCost: {
      red: 0 
    },
    limit: 11,
    environment: 'KEY',
    effect: [{
      tag: {
        layer: true
      }
    }, {
      effectType: 'onPlay',
      cost: {
        red: 1
      },
      act: function () {
        this.player.banishSigni(this.opponent.signi, [0, 1])
      }
    }, {
      effectType: 'action',
      cost: {
        coin: 1
      },
      act: {
        function () {
          let filter = function () {
            return (card.type == 'signi') && card.hasClass('乘机')
          }
          return this.player.seek(filter, 1).filterDeck()
        }
      }
    }],
  },
  WDKO1_002: {
    name: 'レイラ＝ブレーキ',
    cardtype: 'LRIG',
    classes: 'レイラ',
    color: 'red',
    level: 4,
    growCost: {
      red: 2
    },
    limit: 7,
    environment: 'KEY',
    effect: [{
      tag: {
        layer: true
      }
    }, {
      effectType: 'startUp',
      cost: {
        red: 1
      },
      act: function () {
        this.player.getCoin(1)
      }
    }],
  },
  WDK01_003: {
    name: 'レイラ＝コーナー',
    cardtype: 'LRIG',
    classes: 'レイラ',
    color: 'red',
    level: 2,
    growCost: {
      red: 1
    },
    limit: 4,
    environment: 'KEY',
    effect:  [{
      tag: {
        layer: true
      }
    }, {
      effectType: 'onPlay',
      cost: {
        coin: 1
      },
      act: function () {
        this.player.draw(1)
      }
    }],
  },
  WDK01_004: {
    name: 'レイラ＝クラッチ',
    cardtype: 'LRIG',
    classes: 'レイラ',
    color: 'red',
    level: 1,
    growCost: {
      red: 0
    },
    limit: 2,
    environment: 'KEY',
    effect:  [{
      tag: {
        layer: true
      }
    }, {
      effectType: 'onPlay',
      cost: {
        discard: 1
      },
      act: function () {
        this.player.getCoin(1)
      }
    }],
  },
  WDK01_005: {
    name: 'レイラ＝ニュートラル',
    cardtype: 'LRIG',
    classes: 'レイラ',
    color: 'red',
    level: 0,
    growCost: {
      red: 0
    },
    limit: 0,
    coin: 3,
    environment: 'KEY',
    effect: [],
  },
  WDK01_006: {
    name: '焚骨砕身',
    cardtype: 'ARTS',
    color: 'red',
    cost: {
      red: 3,
      colorless: 3
    },
    timing: 'attackPhase',
    environment: 'KEY',
    effect: [{
      act: function () {
        this.player.banishSigni(this.opponent.signi, [2, 2])
      }
    }],
  },
  WDK01_007: {
    name: '質実轟健',
    cardtype: 'ARTS',
    color: 'red',
    cost: {
      red: 2
    },
    limiting: 'レイラ限定',
    timing: 'mainPhase',
    environment: 'KEY',
    effect:  [{
      bet: {
        betCost: {
          coin: 1
        },
        betAct: function () {
          this.card.changeCost({
            red: 0
          })
        }
      },
      act: function () {
        let signi = this.signis.filter(signi => {
          signi.layed == true
        })
        let selectedSigni = this.player.select(signi, [1, 1])
        if (selectedSigni.level >= 3) {
          untilThisTurnEnd(selectedSigni, {
            newState: 'tribeCrash'
          })
        } else {
          untilThisTurnEnd(selectedSigni, {
            newState: 'tribeCrash'
          })
        }
      }
    }],
  },
  WDK01_008: {
    name: '火旗相当',
    cardtype: 'ARTS',
    color: 'red',
    cost: {
      red: 1
    },
    limiting: 'レイラ限定',
    timing: ['mainPhase', 'attackPhase'],
    environment: 'KEY',
    effect: [{
      script: {
        option: [1, 1],
      },
      act: [{
        function () {
          untilThisTurnEnd(this.player.lay(this.player.signis))
        }
      }, {
        //查看我方牌组顶X张牌，并将其中X张牌加入手牌，剩下的牌shuffle，然后放到卡组底
      }]
    }],
  },
  WDK01_009: {
    name: '剣抜弩焼',
    cardtype: 'ARTS',
    color: 'red',
    cost: {
      red: 0
    },
    timing: ['mainPhase', 'attackPhase'],
    environment: 'KEY',
    effect: [{
      useCondition: {
        function () {
          this.player.lrig.hasColor('red')
        }
      },
      act: function () {
        let flag = this.player.banishSigni(this.opponent.signis);
        if (flag) this.player.discard(2);
      }
    }],
  },
  WDK01_010: {
    name: 'ファントム・ガーデン',
    cardtype: 'ARTS',
    color: 'colorless',
    cost: {
      colorless: 1
    },
    timing: 'mainPhase',
    environment: 'KEY',
    effect: [{
      act: function () {
        let max;
        bet ? max = 4 : max = 3;
  
        //将最多3张，bet后4张颜色相同，但是等级不同的signi加入手牌。
      }
    }],
  },
  WDK01_011: {
    name: 'コードライド　ヤマテ',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 4,
    power: 12000,
    limiting: 'レイラ限定',
    environment: 'KEY',
    effect:[{
      effectType: ['layed','constant'],
      act: function () {
        this.signi.changePower(3000, "+");
        this.signi.getNewEffect({
          effectType: 'auto',
          act: function () {
            let filter = function () {
              this.opponent.signis.filter(signi => {
                signi.power < this.signi.power
              })
            }
            let hook = function () {
              this.player.banishSigni(filter, 1)
            }
            this.signi.attack(hook)
          }
        })
      }
    }],
  },
  WDK01_012: {
    name: 'コードライド　ロメン',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 4,
    power: 10000,
    limiting: 'レイラ限定',
    environment: 'KEY',
    effect: [{
      effectType: 'auto',
      act: function () {
        this.signi.addAutoListener('onLayed', () => {
          this.player.banishSigni(1)
        })
      }
    }],
  },
  WDK01_013: {
    name: 'コードライド　トッキュウ',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 3,
    power: 8000,
    limiting: 'レイラ限定',
    environment: 'KEY',
    effect: [{
      effectType: 'constant',
      act: function () {
        let condition = function () {
          return this.player.signis.some(function (signi) {
            return signi.isLayed
          })
        }
        this, signi.addConstListener(condition, () => {
          this.signi.changePower(4000, "+");
        })
      }
    }],
  },
  WDK01_014: {
    name: 'コードライド　シンカン',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 3,
    power: 7000,
    limiting: 'レイラ限定',
    environment: 'KEY',
    effect: [{
      effectType: 'auto',
      act: function () {
        this.signi.addAutoListener('onLayed', () => {
          this.player.banishSigni({
            num: 1,
            PowerLowTo: 10000
          })
        })
      }
    }],
  },
  WDK01_015: {
    name: 'コードライド　ワゴン',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 2,
    power: 5000,
    limiting: 'レイラ限定',
    environment: 'KEY',
    effect: [{
      effectType: ['layed','constant'],
      act: function () {
        this.signi.addConstListener('isLayed', function () {
          this.signi.changePower(7000, '+')
        })
      }
    }],
  },
  WDK01_016: {
    name: 'コードライド　フツージ',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 1,
    power: 3000,
    environment: 'KEY',
    effect: [],
  },
  WDK01_017: {
    name: 'コードライド　ゴーカート',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 1,
    power: 1000,
    limiting: 'レイラ限定',
    environment: 'KEY',
    effect: [{
      effectType: 'auto',
      act: function () {
        this.signi.addConstListener('onLayed', () => {
          this.player.banishSigni({
            num: 1,
            PowerLowTo: 3000
          })
        })
      }
    }],
  },
  WDK01_018: {
    name: 'サーバント　Ｄ４',
    cardtype: 'SIGNI',
    classes: ['精元'],
    color: 'colorless',
    level: 2,
    power: 5000,
    guard: true,
    environment: 'KEY'
  },
  WDK01_019: {
    name: 'サーバント　Ｏ',
    cardtype: 'SIGNI',
    classes: ['精元'],
    color: 'colorless',
    level: 1,
    power: 2000,
    guard: true,
    environment: 'KEY'
  },
  WDK01_020: {
    name: '光明の流星',
    cardtype: 'SPELL',
    color: 'red',
    cost: {
      red: 0
    },
    limiting: 'レイラ限定',
    environment: 'KEY',
    effect:  [{
      script: {},
      act: [{
  
      }, {
        function () {
          this.player.charge(1)
        }
      }]
    }],
  }
}

// for(item in WDK01.WDK01_001){
//   console.log(typeof item)
// }
// console.log(WDK01.WDK01_001)

module.exports = WDK01