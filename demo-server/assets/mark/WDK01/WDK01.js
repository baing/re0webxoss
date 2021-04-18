const WDK01 = {
  WDK01_001: [{
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
  WDK01_002: [{
    tag: 'layer'
  }, {
    effectType: 'startUp',
    cost: {
      red: 1
    },
    act: function () {
      this.player.getCoin(1)
    }
  }],
  WDK01_003: [{
    tag: 'layer'
  }, {
    effectType: 'onPlay',
    cost: {
      coin: 1
    },
    act: function () {
      this.player.draw(1)
    }
  }],
  WDK01_004: [{
    tag: 'layer'
  }, {
    effectType: 'onPlay',
    cost: {
      discard: 1
    },
    act: function () {
      this.player.getCoin(1)
    }
  }],
  WDK01_005: [],
  WDK01_006: [{
    act: function () {
      this.player.banishSigni(this.opponent.signi, [2, 2])
    }
  }],
  WDK01_007: [{
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
  WDK01_008: [{
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
  WDK01_009: [{
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
  WDK01_010: [{
    act: function () {
      let max;
      bet ? max = 4 : max = 3;

      //将最多3张，bet后4张颜色相同，但是等级不同的signi加入手牌。
    }
  }],
  WDK01_011: [{
    tag: 'layed',
    effectType: 'constant',
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
  WDK01_012: [{
    effectType: 'auto',
    act: function () {
      this.signi.addAutoListener('onLayed', () => {
        this.player.banishSigni(1)
      })
    }
  }],
  WDK01_013: [{
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
  WDK01_014: [{
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
  WDK01_015: [{
    tag: 'layed',
    effectType: 'const',
    act: function () {
      this.signi.addConstListener('isLayed', function () {
        this.signi.changePower(7000, '+')
      })
    }
  }],
  WDK01_016: [],
  WDK01_017: [{
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
  WDK01_018: ['WXK01_121'],
  WDK01_019: ['WXK01_114'],
  WDK01_020: [{
    script: {},
    act: [{

    }, {
      function () {
        this.player.charge(1)
      }
    }]
  }],
}

module.exports = WDK01