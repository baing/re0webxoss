import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../router/index.js'

import CardInfo from '../assets/mark/cardInfo.js'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    //index,
    user_nickname: '',
    user_socketio: '',
    user_lang: '',
    user_roomNickname: '',
    user_roomPassword: '',
    user_roomFormat: '',
    user_roomList: [],
    //deckEditor
    deckEditor_deckList: [{title: '黑点',key: 0,mainDeck: [],lrigDeck: []}],   //卡组列表
    deckEditor_deckActiveKey: 0, // 当前选择的卡组的key
    deckEditor_deckContents: [], //当前卡组的内容
    deckEditor_focusCard: 'WXDi_D01_001',  //当前焦点的牌
    deckEditor_cardInfo: CardInfo,  // 总卡池
    deckEditor_pack: 'WXDi_D01', //当前选择的卡组名称
    //room
    room_format: '',
    room_nickname: '',
    room_password: '',
    room_host: '',
    room_guest: '',

    //battle
    //这里要与后端game所有的信息对应
    wixoss: {
      //baseData
      game: {
        turnSelector: '',
        phase: '',
        affects: [],
      },
      //card
      card: {
        selector1: [],
        selector2: [],
      },
      //zone
      zone: {
        selector1: {},
        selector2: {},
      },
      //selector
      selector1: {
        affects: [],
      },
      selector2: {
        affects: [],
      },
    },
  },
  getters: {
    // focusCard_: state => {
    //   return state.focusCard.replace('-','_')
    // },
    // //usefulMark 是一个数组，里的每一项的值都为真。。不包括name
    // usefulMark: (state,getters) => {
    //   return  Object.keys(state.cardInfo[getters.focusCard_]).splice(1).filter((prop) => {
    //     return state.cardInfo[getters.focusCard_][prop]
    //   },this)
    // },
    // activeDeck: state => {
    //   return state.decks[state.activeKey-1].mainDeck
    // },
    // totalCards: state => {
    //   return Object.keys(state.cardInfo) 
    // }
  },
  mutations: {
    //index
    change_user_nickName(state, value) {
      localStorage.nickname = state.user_nickname = value
    },
    change_room_nickName(state, value) {
      localStorage.roomNickname = state.user_roomNickname = value
    },
    change_password(state, value) {
      localStorage.roomPassword = state.user_roomPassword = value
    },
    change_user_lang(state, item) {
      localStorage.lang = state.user_lang = item
    },
    //这里包括游戏需要的mutation.
    //deckEditor
    //给当前的卡组push数组
    pack(state,pack) {
      state.deckEditor_pack = pack
    },
    //这里要开始写入local了。
    addCard(state,name) {
      state.deckEditor_deckList[state.deckEditor_deckActiveKey].mainDeck.push(name)
      console.log(state.deckEditor_deckActiveKey)
      // localStorage.myDeck = state.myDeck
    },
    addDeck(state) {
      //需要改变目前的deckEditor_deckActiveKey
      state.deckEditor_deckActiveKey = state.deckEditor_deckList.length
      console.log(state.deckEditor_deckActiveKey)
      let deck = {title: 'new Deck',key: state.deckEditor_deckList.length ,mainDeck: [],lrigDeck: []}
      state.deckEditor_deckList.push(deck)
    },
    changeFocusDeck(state,activeKey) {
      state.deckEditor_deckActiveKey = activeKey
    },
    removeDeck(state,targetKey) {
      console.log(targetKey)
      state.deckEditor_deckList.splice(targetKey,1)
      state.deckEditor_deckList.forEach((deck,key) => {
        deck.key = key
      })
      //剩下的卡组要重新排key
    },
    //展示卡片
    showImg(state,name) {
      state.deckEditor_focusCard = name
      console.log(name)
    },
    removeCard(state,key) {
      // state.myDeck.splice(key,1)
      state.deckEditor_deckList[state.deckEditor_deckActiveKey].mainDeck.splice(key,1)
      // localStorage.myDeck = state.myDeck
      //这里要改
    },
    // showDetail(state,item) {
    //   state.focusCard = item  //showImg
    //                           //showData
    // },
    // initDeck(state) {
    //   state.myDeck = localStorage.myDeck
    // },
    // initCards(state,getters) {
    //   state.searcherCard = getters.totalCards;
    // },
    //挂载时init
    init(state) {
      state.user_nickname = localStorage.nickname || ''
      state.user_socketio = localStorage.socketio || ''
      state.user_lang = localStorage.lang || ''
      state.user_roomNickname = localStorage.roomNickname || ''
      state.user_roomPassword = localStorage.roomPassword || ''
      state.user_roomFormat = localStorage.roomFormat || ''

      // state.deckEditor_deckList = localStorage.deckList || ''
      state.deckEditor_deckContents = localStorage[state.deckEditor_deckList[state.deckEditor_deckActiveKey]] || ''
    },
    //使用commit的目的是为了改变state的值。
    createRoom() {
      //前端自己的改变，与后端的交流放在action里。
      // console.log(state.route)
      router.replace('/room')
      // state.router.replace('/room')
    },
    joinRoom() {
      //加入房间，以为着需要跳转页面。
      this.$router.replace('/room')
    },
    ready() {
      //更改自己在room里目前的状态。
    },
    unready() {
      //更改自己在room里目前的状态。
    },
    startGame() {
      //将room更改为battle
    }
  },
  actions: {
    //在action里提交异步操作。
    // 进入房间，离开房间等操作，都应该在这里实现，先发送异步请求，得到服务器的确认后，提交mutation。
    //这里写那个index里的那个代码，，然后分发到index.vue中。
    //acttion里面需要参数
    createRoom(context,socket) {
      socket.emit('createRoom',{roomMassage:localStorage.roomMassage,password:localStorage.password,host:localStorage.userName})
      context.commit('createRoom')
    },
    //joinRoom同createRoom一样。
    joinRoom(context) {
      this.$socket.emit('joinRoom',{roomMassage:localStorage.roomMassage,password:localStorage.password,host:localStorage.userName})
      context.commit('joinRoom')
    },
    ready(context) {
      this.$socket.emit('ready',{roomMassage:localStorage.roomMassage,password:localStorage.password,host:localStorage.userName})
      context.commit('ready')
    },
    unready(context) {
      this.$socket.emit('unready',{roomMassage:localStorage.roomMassage,password:localStorage.password,host:localStorage.userName})
      context.commit('unready')
    },
    startGame(context) {
      this.$socket.emit('startGame',{roomMassage:localStorage.roomMassage,password:localStorage.password,host:localStorage.userName})
      context.commit('startGame')
    }
  }
})

export default store


//今天继续写action和mutation，直到前后端能够相互通信。