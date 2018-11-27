<template>
  <div>
    <router-view/>
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import FootGuide from './components/FooterGuide/FooterGuide'
import {reqAddress} from "./api";

export default {
  name: 'App',

 async mounted(){
    //发异步ajax请求
    const result = await reqAddress('116.36867', '40.10038')
   console.log(result.data);
 },

  components: {
     FootGuide
  }
}
</script>

<style lang="stylus" scoped>

</style>
