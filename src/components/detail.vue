<template>
  <div id="detail">
    <a-card id="card" hoverable :bordered="false">
      <!-- 这里需要和searcher一样的写法,先把图片整出来 -->
      <img id="card1" slot="cover" :src="cardInfo_()">
      <a-card-meta>
        <!-- <template slot="title">{{this.$store.state.deckEditor_focusCard}}
          {{this.$store.state.deckEditor_focusCard[this.$store.getters.focusCard_].name}}
        </template> -->
        <template slot="description">
          <a-descriptions size="small" :column="2">
            <!-- <a-descriptions-item label="种类">精灵</a-descriptions-item>
                  <a-descriptions-item label="颜色">绿</a-descriptions-item>
                  <a-descriptions-item label="等级">4</a-descriptions-item>
                  <a-descriptions-item label="力量">10000</a-descriptions-item>
                  <a-descriptions-item label="防御">-</a-descriptions-item>
                  <a-descriptions-item label="类别">精生:水兽</a-descriptions-item> -->
            <a-descriptions-item v-for="item in $store.getters.usefulMark" :key="item" :label="item" :span="1">
              {{$store.state.cardInfo[$store.getters.focusCard_][item]}}</a-descriptions-item>
          </a-descriptions>
          を支払い、手札から《幻水 マレガビ》を１枚捨ててもよい。その後、この方法で《幻水 マレガビ》を捨てた場合、あなたのトラッシュからレベル３以下の＜水獣＞のシグニ１枚を場に出す。
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      cardInfo_() {
        // require('../assets/images/'+ this.$store.state.deckEditor_pack + '/' + this.$store.state.deckEditor_focusCard +'.jpg')
        const context = require.context('../assets/images/', true, /\.(png|jpg)$/)
        // console.log(context)
        const c = context('./' + this.$store.state.deckEditor_pack + '/' + this.$store.state.deckEditor_focusCard +
          '.jpg')
        // console.log(c)
        return c
      }
    },
  }
</script>

<style>
  #detail {
    height: 100vh;
  }
</style>