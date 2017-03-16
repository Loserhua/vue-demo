<template>
  <div id="app">
  <navbar></navbar>

  <router-view></router-view>
  </div>
  </div>
 
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'app',
  components: {
    navbar
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  color:#2c3e50;
  font-size: 16px;
}
h1,h2,h3{
  font-weight: normal;
}
a{
  text-decoration: none;
  color:  #4f9639;
}
input{
  border: 1px solid #42b983;
  width: 300px;
  height: 36px;
  padding: 0px 10px;
  margin: 15px 0px;
}
button{
  width: 148px;
  background: #ed6100;
  height: 36px;
  border: none;
  color: #FFFFFF;
}

 .router-link-active{
    color: #ed6100 !important;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* text-align: center; */
/*   color: #2c3e50;
  margin-top: 60px; */
  /* background: #4f9639; */

}
#Mydiv{
  min-height: 100%;
  background: green;
  width: 100%
}

</style>
