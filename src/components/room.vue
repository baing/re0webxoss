<template>
  <div>
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card :title="item.title">
          Card content
        </a-card>
      </a-list-item>
    </a-list>

    <a-button type="primary" size="large" @click="returnIndex">返回主页</a-button>
    <a-button type="primary" size="large" @click="battleStart">开始游戏</a-button>
    <a-button type="primary" size="large" @click="ready">准备</a-button>  这里需要动态绑定，以至于包括click的函数以及其字样。
  </div>
</template>

<script>
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  }
];
  export default {
    room() {},
    data() {
    return {
      data,
    };
  },
    methods: {
      returnIndex() {
        this.$router.replace('/index')
      },
      battleStart() {
        this.$router.replace('/battle')
      }
    },
    //这里监听事件
    sockets:{
      createRoom(args) {
        console.log(args.hostID +'创建房间成功')
        // this.returnIndex() // 这个要在index里面写
      },
      joinRoom() {
        console.log('加入房间成功')
      },
      startGame() {
        console.log('游戏开始')
      },
      leaveRoom() {
        console.log('离开了房间')
      },
      lockSpec() {
        console.log('关闭位置')
      },
      unlockSpec() {
        console.log('打开位置')
      },
      changePosition() {
        console.log('移动位置')
      },
      ready() {
        console.log('准备就绪')
      },
      unready() {
        console.log('未准备')
      }
    }
  }
</script>

<style>

</style>