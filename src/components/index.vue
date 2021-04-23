<template>
  <div class="home">
    <div id="logo">
      <h1>{{message}}</h1>
    </div>
    <div id="wall">
      <a-table class="table" :columns="columns" :data-source="roomList" :pagination="{ hideOnSinglePage: true }"
        :scroll="{ y: 400 } " bordered>
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle">Name</span>
      </a-table>

    </div>
    <a-input class="button" :model="this.$store.state.user_roomNickname" placeholder="房间名" :value="this.$store.state.user_roomNickname" @input="change_room_nickName" >
      <!-- <a-icon slot="prefix" type="home" /> -->
    </a-input>
    <a-input class="button" :model="this.$store.state.user_roomPassword" placeholder="密码" :value="this.$store.state.user_roomPassword" @input="change_password">
      <!-- <a-icon slot="prefix" type="lock" theme="filled" /> -->
    </a-input>
    <a-button type="primary" size="large" @click="deckEditor" >
      编辑卡组
    </a-button>
    <a-button type="primary" size="large" @click="createRoom">
      创建房间
    </a-button>
    <a-input class="button" :model="this.$store.state.user_nickname" placeholder="您的昵称" :value="this.$store.state.user_nickname" @input="change_user_nickName"/>
    <router-view></router-view>
  </div>
</template>

<script>
  let password, userName 

  let roomList = [] //这里是房间列表，应当放在columns里
  //表格需要的数据
  const columns = [{
      dataIndex: 'roomname',
      key: 'roomname',
      slots: {
        title: 'customTitle'
      },
    },
    {
      title: 'hostname',
      dataIndex: 'hostname',
      key: 'hostname',
    },
  ];

  export default {
    data() {
      return {
        userName,
        columns,
        roomList,
        password,
        message: 'webxoss'
      }
    },
    methods: {
      change_user_nickName(e) {
        this.$store.commit('change_user_nickName',e.target.value)
      },
      change_room_nickName(e) {
        this.$store.commit('change_room_nickName',e.target.value)
      },
      change_password(e) {
        this.$store.commit('change_password',e.target.value)
      },
      createRoom() {
        this.$store.dispatch('createRoom',this.$socket)
      },
      joinRoom() {
        this.$store.dispatch('joinRoom')
      },
      deckEditor() {
        this.$router.replace('/deckEditor')
      },
    },
    mounted() {
      this.$store.commit('init')  
    },
    // watch: {
    //   userName(val) {
    //   this.userName = localStorage.userName = val
    //   },
    //   password(val) {
    //   localStorage.password = val
    //   },
    //   roomMassage(val) {
    //   localStorage.roomMassage = val
    //   },
    // },
    sockets: {
      connect() {
        console.log('连接了')
      },
      disconnect() {
        console.log('失去连接')
      },
      error() {
        console.log('出错了')
      },
      createRoom() {
        this.$store.commit('createRoom')
        console.log('创建了房间')
      },
      joinRoom() {
        this.$store.commit('joinRoom')
        console.log('加入了房间')
      },
    }
  };
</script>

<style>
  .home {
    height: 100vh;
    background: url(../assets/bg.png);
  }
  #wall {
    width: 1000px;
    display: flex;
    margin: 100px auto 0;
  }

  .button {
    width: 200px;
  }

  #logo {
    margin: 0 auto;
  }
</style>