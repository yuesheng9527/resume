import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let threejs = JSON.parse(localStorage.getItem('threejs'))
if(threejs===null){threejs=true}
export default new Vuex.Store({
  state: {
    threejs:threejs,
    web:true
  },
  mutations: {//this.$store.commit('方法名')
    // addToCar (state,goodsinfo) {
    //   let flag = false
    //   state.car.some(item=>{
    //     if(item.id==goodsinfo.id){
    //       item.count+=parseInt(goodsinfo.count)
    //       flag = true
    //       return true
    //     }
    //   })
    //   if(!flag){
    //     state.car.push(goodsinfo)
    //   }
    //   localStorage.setItem('car',JSON.stringify(state.car))  
    // },
    threejs(state){
      localStorage.setItem('threejs',JSON.stringify(!state.threejs));
      location.reload();
    },
    web(state,flag){
      state.web = flag;
    }
  },
  getters:{
    // getAllCount(state){
    //   let c = 0;
    //   state.car.forEach(item=>{
    //     c+=item.count;
    //   })
    //   return c
    // },
  }
})