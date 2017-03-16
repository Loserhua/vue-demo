<template>
  <div class="nav">
    <ul>
      <li v-for='navlist in navlists'>
      <router-link :to="navlist.url" exact>{{navlist.message}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
  name: 'navbar',
  data () {
    return {
      navlists:[
        {
          message:"vue首页",
          url:"/"
        },
        {
          message:"实例1",
          url:"./example1"
        },
        {
          message:"实例2",
          url:"./example2"
        },
        {
          message:"实例3",
          url:"./example3"
        },
      ]
    }
  }
}
</script>
<style scoped>
  .nav{
    background: #42b983;
    padding: 0 10%;
  }
  .nav li{
    display: inline-block;
  }
  .nav li a{
    padding: 15px 20px;
    display: block;
    color:#2c3e50;
    font-size: 16px;
  }
  
</style>
