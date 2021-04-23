<template>
  <div id="battle">
    <a-layout>
      <a-layout-content>
        <a-row>
          <a-col :span="4">
            <detailvue></detailvue>
          </a-col>
          <a-col :span="14">
            <openvue></openvue>
          </a-col>
          <a-col :span="4">
            <chatvue></chatvue>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import detailvue from './detail.vue'
import openvue from './open.vue'
import chatvue from './chat.vue'

export default { 
  components: {
    detailvue,
    openvue,
    chatvue
  },
  methods: {
    returnIndex() {
        this.$router.replace('/index')
      }
  }
}
</script>

<style>
</style>