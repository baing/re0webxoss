<template>
  <div>
    <!-- <a-input placeholder="输入关键字以搜索" style="text-align:center" />
    
    
    <a-dropdown>
      <a-button>button</a-button>
    </a-dropdown> -->
    <a-dropdown>
      <a-menu slot="overlay">
        <!-- 为对应的包选择不同的请求函数，将请求对应的图片  通过key的值确定内容 -->
        <!-- <a-menu-item key="1">
          <a-icon type="user" />WXDi-D01 </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="user" />WXDi-D02 </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="user" />WXDi-P00 </a-menu-item> -->
          <a-menu-item v-for="(item,name,key) in this.$store.state.deckEditor_cardInfo" :key="key"  @click="focusPack(name)">{{name}}</a-menu-item>
      </a-menu>
      <a-button style="margin-left: 8px">选择包
        <a-icon type="down" />
      </a-button>
    </a-dropdown>
    <!-- 在点击了对应的wxdi包后，ol请求后端的静态图片请求， -->
    <!-- 是否需要再写一个组件 -->
    <ol>
      <!-- <a-card hoverable style="width: 240px" v-for="(item) in CardInfo[pack]">
      <img slot="cover" src="" :alt="item">
    </a-card> -->
      <!-- <img v-for="item in this.$store.state.searcherCard" :key="item.id" :src="require('../assets/images/'+ item +'.jpg')" :alt="item" width="100%" @click="addCard(item)" @mouseover="showImg(item)">   -->
      <!-- <img :v-for="(item,name,key) in pack"  :src="require('../assets/' + pack +'/' + name + '.jpg')" :alt="item"> -->
      <!-- 这里应该需要一次compute -->
      <!-- <img  v-for="(item,name,key) in CardInfo[pack]" :src="require(cardInfo_ + '/' + name +'.jpg')" :alt="name" :key="key"> -->
      <img v-for="(item,name,key) in this.$store.state.deckEditor_cardInfo[this.$store.state.deckEditor_pack]" :src="cardInfo_(name)" :alt="name" @click="addCard(name)" @mouseover="showImg(name)" :key="key">
      <!-- <li v-for="(item,key) in CardInfo[pack]" :key="key">{{item}}</li> -->
    </ol>

    <!-- <div id="search-list" :v-for="(val) in CardInfo[pack]">{{val}}</div> -->
    <!-- <div v-infinite-scroll="loadMore" id="search-list" :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="10">
      <img v-for="item in this.$store.state.searcherCard" :key="item.id" :src="require('../assets/images/'+ item +'.jpg')" :alt="item" width="100px">
    </div> -->
    <!-- <a-list :data-source="this.$store.state.searcherCard">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <img slot="title" src="require('../assets/images/'+ item +'.jpg')" alt="item">
        </a-list-item-meta>
      </a-list-item>
    </a-list> -->
    <!-- 应当自动搜索当前assets里的所有卡牌，给一个下拉框，，需要ant-design-vue的支持 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        val: '',
      }
    },
    methods: {
      addCard(name) {
        this.$store.commit('addCard', name)
      },
      showImg(name) {
        this.$store.commit('showImg', name)
      },
      focusPack(pack) {
        //这里要用commit
        this.$store.commit('pack',pack)
      },
      cardInfo_(name) {
        const context =  require.context('../assets/images/',true, /\.(png|jpg)$/)
        // console.log(context)
        const c = context('./' + this.$store.state.deckEditor_pack + '/' + name + '.jpg')
        // console.log(c)
        return c 
        // console.log(context.resolve)
      }
    },
    // computed: {
    //   cardInfo_: function() {
    //     let card_ = '../assets/images/' + String.toString(this.CardInfo[this.pack])
    //     console.log(card_)
    //     return card_
    //   }
    // },
    oncreate() {
      this.$store.commit('initCards')
    }
  }
</script>

<style>
  #search-list {
    height: 90vh;
    /* border: 1px solid pink; */
    overflow: auto;
  }

  /* ol {
    margin: 0;
    padding: 0;
  } */
</style>