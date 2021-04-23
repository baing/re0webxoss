import Vue from 'vue'
import VueRouter from 'vue-router'
import room from '../src/components/room.vue'
import deckEditor from '../src/components/deckEditor.vue'
import index from '../src/components/index.vue'
import battle from '../src/components/battle.vue'

Vue.use(VueRouter)

const routes = [
  { path:'/', redirect: '/index'},
  { path: '/room', component: room },
  { path: '/deckEditor', component: deckEditor },
  {path:'/index',component:index},
  {path:'/battle',component:battle}
]

const router = new VueRouter({
  routes ,
  mode: 'history'
})

export default router