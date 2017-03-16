<template>
  <div class="hello">
    <div class="tab">
      <img src="../assets/logo.png">
      <h1 class="hello-h1">{{ msg }}</h1>
    </div>
    <div class="tab-a" id="tab_a">
      <h1>Vue.js核心思想：</h1>
      <p>1.数据驱动</p>
      <p>2.组件化</p>
    </div>
    <div class="tab-b" id="tab_b">
      <h1>数据驱动</h1>
      <h2>Data-Driven</h2>
    </div>
    <div class="tab-c" id="tab_c">
      <h1>通过MVVM的数据双向绑定实现自动同步</h1>
      <img src="../assets/img1.png" alt="">
    </div>
     <div class="tab-d" id="tab_d">
      <img src="../assets/img2.png" alt="">
    </div>
     <div class="tab-e" id="tab_e">
      <h1>组件化</h1>
      <h2>Component-Oriented</h2>
    </div>
     <div class="tab-f" id="tab_f">
      <h1>每个组件都可以看做是一个ViewModel</h1>
      <img src="../assets/img3.png" alt="">
    </div>
     <div class="tab-g" id="tab_g">
      <h1>每个组件都可以看做是一个ViewModel</h1>
      <img src="../assets/img4.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到小花的Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello-h1{
  margin-top: 20px;
}
.hello{
  text-align: center;
}
.tab,.tab-a,.tab-b,.tab-c,.tab-d,
.tab-e,.tab-f,.tab-g,.tab-h{
  padding-top: 150px;
  height: 600px;

}
.tab-a{
  padding-top:20%; 
}
.tab-a p{
  font-size: 24px;
  margin-top: 30px;
  margin-left: -80px;
 }
 .tab-a p+p{
  margin-left: -95px;
 }
 .tab-b,.tab-e{
  background: #42b983;
  color: #FFFFFF;
  padding-top: 25%;
 }
 .tab-c,
 .tab-d{
  padding-top: 80px;
 }
.tab-c img,
.tab-d img,
.tab-f img,
.tab-g img{
    width: 60%
  }

</style>
