<template>
  <!-- <div id="zone" draggable="true" @dragstart="drag"></div>
    <div id="save" @drop.prevent="drop" @dragover.prevent="allowDrop"></div> -->
  <div id="wall">
    <div class="main">
      <div class="oppoArea area">
        <div class="top_zoom">
          <div class="cheerZone"></div>
          <div class="signiZone">
            <div class="left_signiZone"></div>
            <div class="center_signiZone"></div>
            <div class="right_signiZone"></div>
          </div>
          <div class="mainDeckAndMainTrash"></div>
        </div>
        <div class="middle_zoom">
          <div class="enerZone"></div>
          <div class="checkZone"></div>
          <div class="lrigZone"></div>
          <div class="keyZone"></div>
          <div class="lrigZoneAndLrigTrash"></div>
        </div>
        <div class="bottom_zoom">
          <div class="lifeClothes"></div>
          <div class="hands"></div>
        </div>
      </div>

      <!-- 己方区域 -->
      <div class="ownArea area">
        <div class="top_zoom">
          <div class="cheerZone"></div>
          <div class="signiZone">
            <div class="left_signiZone"></div>
            <div class="center_signiZone"></div>
            <div class="right_signiZone"></div>
          </div>
          <div class="mainDeckAndMainTrash"></div>
        </div>
        <div class="middle_zoom">
          <div class="enerZone"></div>
          <div class="checkZone"></div>
          <div class="lrigZone"></div>
          <div class="keyZone"></div>
          <div class="lrigZoneAndLrigTrash"></div>
        </div>
        <div class="bottom_zoom">
          <div class="lifeClothes"></div>
          <div class="hands"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        game: null,
      }
    },
    methods: {
        startGame(game) {
          this.game = game  
        }
      
    }
  }
</script>

<style>
  #wall {
    display: flex;
    margin: 0;
  }

  .detail {
    flex-grow: 2;
    width: 100%;
  }

  .main {
    height: 100vh;
    width: 100%;
    flex-grow: 6;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .chat {
    width: 100%;
    flex-grow: 2;
  }

  .area {
    height: 450px;
    width: 100%;
    border: 1px solid red;
  }

  .oppoArea {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .ownArea {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .top_zoom {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .cheerZone {
    height: 210px;
    width: 210px;
    border: 1px solid red;
  }

  .signiZone {
    height: 210px;
    width: 630px;
    border: 1px solid red;
  }

  .mainDeckAndMainTrash {
    height: 210px;
    width: 300px;
    border: 1px solid red;
  }

  .middle_zoom {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .enerZone {
    width: 210px;
    height: 210px;
    border: 1px solid red;
  }

  .checkZone {
    width: 210px;
    height: 210px;
    border: 1px solid red;
  }

  .keyZone {
    width: 210px;
    height: 210px;
    border: 1px solid red;
  }

  .lrigZoneAndLrigTrash {
    width: 300px;
    height: 210px;
    border: 1px solid red;
  }

  .lrigZone {
    height: 210px;
    width: 210px;
    border: 1px solid red;
    background: url(../assets/images/WDK01-001.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* 媒体查询 */
  /* PC */
  @media screen and (min-width: 1000px) {
    body {
      background-color: rosybrown;
    }
  }

  /* iPad */
  @media screen and (min-width:750px) and (max-width: 1000px) {
    body {
      background-color: skyblue;
    }
  }
</style>