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
    cost: null,
    limit: 11,
    power: null,
    team: null,
    coin: null,
    environment: 'KEY'
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
    cost: null,
    limit: 7,
    power: null,
    team: null,
    coin: null,
    environment: 'KEY'
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
    cost: null,
    limit: 4,
    power: null,
    team: null,
    coin: null,
    environment: 'KEY'
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
    cost: null,
    limit: 2,
    power: null,
    team: null,
    coin: null,
    environment: 'KEY'
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
    cost: null,
    limit: 0,
    power: null,
    team: null,
    coin: 3,
    environment: 'KEY'
  },
  WDK01_006: {
    name: '焚骨砕身',
    cardtype: 'ARTS',
    classes: null,
    color: 'red',
    level: null,
    growCost: null,
    cost: {
      red: 3,
      colorless: 3
    },
    limit: null,
    power: null,
    limiting: null,
    timing: 'attackPhase',
    environment: 'KEY'
  },
  WDK01_007: {
    name: '質実轟健',
    cardtype: 'ARTS',
    classes: null,
    color: 'red',
    level: null,
    growCost: null,
    cost: {
      red: 2
    },
    limit: null,
    power: null,
    limiting: 'レイラ限定',
    timing: 'mainPhase',
    environment: 'KEY'
  },
  WDK01_008: {
    name: '火旗相当',
    cardtype: 'ARTS',
    classes: null,
    color: 'red',
    level: null,
    growCost: null,
    cost: {
      red: 1
    },
    limit: null,
    power: null,
    limiting: 'レイラ限定',
    timing: ['mainPhase', 'attackPhase'],
    environment: 'KEY'
  },
  WDK01_009: {
    name: '剣抜弩焼',
    cardtype: 'ARTS',
    classes: null,
    color: 'red',
    level: null,
    growCost: null,
    cost: {
      red: 0
    },
    limit: null,
    power: null,
    limiting: null,
    timing: ['mainPhase', 'attackPhase'],
    environment: 'KEY'
  },
  WDK01_010: {
    name: 'ファントム・ガーデン',
    cardtype: 'ARTS',
    classes: null,
    color: 'colorless',
    level: null,
    growCost: null,
    cost: {
      colorless: 1
    },
    limit: null,
    power: null,
    limiting: null,
    timing: 'mainPhase',
    environment: 'KEY'
  },
  WDK01_011: {
    name: 'コードライド　ヤマテ',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 4,
    growCost: null,
    cost: null,
    limit: null,
    power: 12000,
    limiting: 'レイラ限定',
    guard: null,
    environment: 'KEY'
  },
  WDK01_012: {
    name: 'コードライド　ロメン',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 4,
    growCost: null,
    cost: null,
    limit: null,
    power: 10000,
    limiting: 'レイラ限定',
    guard: null,
    environment: 'KEY'
  },
  WDK01_013: {
    name: 'コードライド　トッキュウ',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 3,
    growCost: null,
    cost: null,
    limit: null,
    power: 8000,
    limiting: 'レイラ限定',
    guard: null,
    environment: 'KEY'
  },
  WDK01_014: {
    name: 'コードライド　シンカン',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 3,
    growCost: null,
    cost: null,
    limit: null,
    power: 7000,
    limiting: 'レイラ限定',
    guard: null,
    environment: 'KEY'
  },
  WDK01_015: {
    name: 'コードライド　ワゴン',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 2,
    growCost: null,
    cost: null,
    limit: null,
    power: 5000,
    limiting: 'レイラ限定',
    guard: null,
    environment: 'KEY'
  },
  WDK01_016: {
    name: 'コードライド　フツージ',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 1,
    growCost: null,
    cost: null,
    limit: null,
    power: 3000,
    limiting: null,
    guard: null,
    environment: 'KEY'
  },
  WDK01_017: {
    name: 'コードライド　ゴーカート',
    cardtype: 'SIGNI',
    classes: ['精械', '乗機'],
    color: 'red',
    level: 1,
    growCost: null,
    cost: null,
    limit: null,
    power: 1000,
    limiting: 'レイラ限定',
    guard: null,
    environment: 'KEY'
  },
  WDK01_018: {
    name: 'サーバント　Ｄ４',
    cardtype: 'SIGNI',
    classes: ['精元'],
    color: 'colorless',
    level: 2,
    growCost: null,
    cost: null,
    limit: null,
    power: 5000,
    limiting: null,
    guard: true,
    environment: 'KEY'
  },
  WDK01_019: {
    name: 'サーバント　Ｏ',
    cardtype: 'SIGNI',
    classes: ['精元'],
    color: 'colorless',
    level: 1,
    growCost: null,
    cost: null,
    limit: null,
    power: 2000,
    limiting: null,
    guard: true,
    environment: 'KEY'
  },
  WDK01_020: {
    name: '光明の流星',
    cardtype: 'SPELL',
    classes: null,
    color: 'red',
    level: null,
    growCost: null,
    cost: {
      red: 0
    },
    limit: null,
    power: null,
    limiting: 'レイラ限定',
    guard: null,
    environment: 'KEY'
  },
}

export default WDK01