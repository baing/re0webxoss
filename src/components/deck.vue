<template>
  <div id="deck">
    <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="re0webxoss" @back="returnIndex"></a-page-header>
    <a-tabs v-model="this.$store.state.deckEditor_deckActiveKey" type="editable-card" @edit="onEdit"
      @change="changeFocusDeck">
      <a-tab-pane v-for="deck in this.$store.state.deckEditor_deckList" :key="deck.key" :tab="deck.title">
        <!-- 这里的src也是动态的，需要定义到中， -->
        <!-- 要求鼠标移动到上面时，detail也要相应变化，电击后移除卡片。 -->
        <div id="mainDeck" class="cardDeck">
          <img v-for="(card,key) in deck.mainDeck" :src="cardInfo_(card)" :alt="card" :key="key"
            @click="removeCard(key)" @mouseover="showImg(card)">
        </div>
        <div id="lrigDeck" class="cardDeck"></div>
        <!-- <img v-for="(card,key) in deck.mainDeck" :src="cardInfo_(card)" :alt="card" :key="key" @click="removeCard(key)"
          @mouseover="showImg(card)"> -->
        <!-- <div id="mainDeck" class="cardDeck">
          渲染出deckList里的mainDeck里的牌到v-for img中。
          <img :v-for="card in deck" :src="require('../assets/images/' + item + '.jpg')" alt="">
        </div>
        <div id="lrigDeck" class="cardDeck"></div> -->
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      returnIndex() {
        this.$router.replace('/index')
      },
      removeCard(key) {
        this.$store.commit('removeCard', key)
      },
      callback(key) {
        console.log(key);
      },
      onEdit(targetKey, action) {
        this[action](targetKey);
      },
      // onChange(activeKey) {
      //   this.$store.state.activeKey = activeKey
      //   // this.$store.state.myDeck = this.$store.state.decks[activeKey-1].mainDeck
      // },
      //添加卡组，操作deckList
      //这里不推荐直接修改，而是用commit
      //在这里修改data里的activeKey的值
      // 这里还是用commit
      add() {
        this.$store.commit('addDeck')
        // localStorage.setItem('newDeck', '')
      },
      //移除卡组
      remove(targetKey) {
        this.$store.commit('removeDeck', targetKey)
        // localStorage.removeItem(targetKey)
      },
      changeFocusDeck(activeKey) {
        this.$store.commit('changeFocusDeck', activeKey)
      },
      showImg(card) {
        this.$store.commit('showImg', card)
      },
      cardInfo_(card) {
        //需要使用正则表达式，使得可以通过card的id找到对应的扩展包。 WXDi01_D01_001  取第二个_前的为pack
        let card_ = card.split('_')
        console.log(card_[0] + '_' + card_[1])

        const context = require.context('../assets/images/', true, /\.(png|jpg)$/)
        // console.log(context)
        const c = context('./' + card_[0] + '_' + card_[1] + '/' + card + '.jpg')
        // console.log(c)
        return c
        //在searcher里查看
      }
      // initDeck() {
      //   this.$store.commit('initMyCard')
      // }


      // deleteCard() {
      //   this.$store.commit('deleteCard')
      // }
    },
    //挂载时记录LOCALS的数据
    mounted() {

    }
  }
</script>

<style>
  #deck {
    height: 100vh;
  }

  .card-list {
    height: 100%;
    background-color: pink;
  }

  #mainDeck {
    width: 100%;
    height: 0;
    padding-bottom: 70%;
    border: 1px solid red;
    margin-bottom: 50px;
  }

  #lrigDeck {
    width: 100%;
    height: 200px;
    border: 1px solid red;
  }

  .cardDeck>img {
    width: 10%;
  }
</style>