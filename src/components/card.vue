<template>
  <div>
    <a-card hoverable id="card" :bordered="false">
      <img id="card1" slot="cover" src="../assets/image/download.jpg" alt="image" width="240px">
    </a-card>
    
  </div>
</template>

<script>
export default {
  card() {}
}
</script>

<style>
  #card {
    width: 240px;
    border-radius:5%
  }

  #card1 {
    border-radius:5%
  }
</style>