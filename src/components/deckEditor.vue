<template>
  <div id="deckEditor">
    <a-layout>
      <a-layout-content>
        <a-row type="flex" justify="space-between">
          <a-col :span="4">
            <div>
              <detailvue></detailvue>
            </div>
          </a-col>
          
          <a-col :span="14">
            <div id="deck">
              <deckvue></deckvue>
            </div>
          </a-col>
          
          <a-col :span="4">
            <div id="searcher">
              <searchervue></searchervue>
            </div>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
  import detailvue from './detail.vue'
  import deckvue from './deck.vue'
  import searchervue from './searcher.vue'

  export default {
    deckEditor() {},
    components: {
      detailvue,
      deckvue,
      searchervue
    },
    data() {
      return {
      }
    },
    watch: {
    }
  }
</script>

<style>
 #deckEditor {
   background: url(../assets/bg.png);
 }
</style>