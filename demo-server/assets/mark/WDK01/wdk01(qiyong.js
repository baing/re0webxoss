const wdk01 = {
  WDK01_001: [{
      layer
    },
    {
      startUp: {
        cost: {
          red: 1
        },
        act: {
          function () {
            return this.player.banish(this.opponent.signi, 1)
          }
        }
      },
      action: {
        cost: {
          coin: 1
        },
        act: {
          function () {
            return this.player.filterCard(1, {
              'class': ''
            })
          }
        }
      }
    }
  ],
  'WDK01-002': [{
      layer
    },
    {
      startUp: {
        cost: {
          red: 1
        },
        act: {
          function () {
            return this.player.getCoin(1)
          }
        }
      }
    }
  ],
  'WDK01-003': [{
      layer
    },
    {
      startUp: {
        cost: {
          coin: 1
        },
        act: {
          function () {
            return this.player.draw(1)
          }
        }
      }
    }
  ],
  'WDK01-004': [{
      layer
    },
    {
      startUp: {
        cost: {
          hand: 1
        },
        act: {
          function () {
            return this.player.getCoin(1)
          }
        }
      }
    }
  ],
  'WDK01-005': [{}],
  'WDK01-006': [{
    act: {
      function () {
        this.player.select(this.opponent.signi, 2, {
          banish
        })
      }
    }
  }],
  'WDK01-007': [{
    bet: {
      cost: {
        coin: 1
      },
      act: {
        function () {
          this.card.costChange({
            red: 0
          })
        }
      }
    },
    act: {
      function () {
        var signi = this.player.select(this.player.signi, 1, {
          layed
        })
        signi.getStatus((signi.level < 3) ? {
          doubleCrash: true
        } : {
          tribeCrash: true
        })
      }
    }
  }],
  'WDK01-008': [{
    selectRuler: {
      totle: 2,
      choose: 1
    },
    option: [{

      },
      {

      }
    ]
  }],
  'WDK01-009': [{
    limit: {
      function () {
        return this.player.lrig.color = red //这里不严谨
      }
    },
    act: {
      function () {
        return this.player.select(this.opponent.signi, 1, {
          banish
        }) && this.player.discard(2)
      }
    }
  }],
  'WDK01-010': [{
    bet: {
      cost: {
        coin: 1
      }
    },
    act: {
      function () {
        if (this.card.batting) {
          return this.player.select(this.player.trashZone.cards, 4, {
            toHand
          })
        } else {
          return this.player.select(this.player.trashZone.cards, 3, {
            toHand
          })
        }
      }
    }
  }],
  'WDK01-011': [{
    const: {
      tip: {
        layed
      },
      act: {
        function () {
          this.signi.statusChange(3000, {
            attack
          })
          this.signi.getEffect({
            auto: {
              function () {
                var signi = this.opponent.signi.filter()
                //应当先得到比这只精灵攻击力低的精灵。。
                this.player.select(signi, 1, {
                  banish,
                  timing: this.signi.attack
                })
              }
            }
          })
        }
      }
    }
  }, {
    brust: {
      act: {
        function () {
          return this.player.select(this.opponent.signi, 1, {
            banish
          })
        }
      }
    }
  }],
  'WDK01-012': [{
    auto: {
      act: {
        function () {
          this.player.select(this.opponent.signi, 1, {
            banish,
            timing: this.signi.layed
          })
        }
      }
    }
  }],
  'WDK01-013': [{
    const: {
      act: {
        function () {
          this.signi.statusChange(4000, {
            attack,
            flag: flag
          })
        }
      }
    }
  }],
  'WDK01-014': [],
  'WDK01-015': [],
  'WDK01-016': [],
  'WDK01-017': [],
  'WDK01-018': [{
      guard
    },
    {
      multiEner
    },
    {
      brust: {
        function () {
          var card =
            this.player.select(card, 1, {
              toHand
            })
        }
      }
    }
  ],
  'WDK01-019': [{
      guard
    },
    {
      multiEner
    },
    {
      brust: {
        act: {
          function () {
            this.player.charge(1)
          }
        }
      }
    }
  ],
  'WDK01-020': [{
    selectRuler: {
      totle: 2,
      choose: 1
    },
    option: [{
        function () {
          var signi = this.player.signi.filter()
          var flag = this.player.select(signi, 1, {
            trash
          }) //将一只乘机精灵放置到废弃区的结果显示为true，false
          var signi = this.opponent.signi.filter()
          this.player.select(this.opponent.signi, 1, {
            banish,
            flag: flag
          })
        }
      },
      {
        function () {
          this.player.charge(1)
        }
      }
    ]
  }]

}

export default wdk01