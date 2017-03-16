<template>
  <div class="example1">
   <!-- 数据绑定 -->
   <div class="e1">
    <input v-model="message" placeholder="填写">
    <p>Message is: {{ message }}</p>
  </div>

  <!-- 过渡效果 -->
  <div class="e1 ex1">
    <div class="ex-div">
     <button v-on:click="show = !show" v-bind:class="{showbtn:show}">
      过渡按钮
    </button>
    <br>
    <transition name="fade">
      <div class="fade-div" v-show="show"></div>
    </transition>
  </div>
  <div class="ex-div">
    <button @click="show2 = !show2" v-bind:class="{showbtn:show2}">
      动画按钮
    </button>
    <br>
    <transition name="bounce">
      <div class="fade-div" v-if="show2"></div>
    </transition>
  </div>
  <div class="ex-div">
    <button @click="show3 = !show3" :class="{showbtn:show3}">
      JS钩子
    </button>
    <br>
    <transition name="bounce"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    >
    <div class="fade-div" v-if="show3"></div>
  </transition>
</div>
</div>



<!-- 父子组件通信 -->
<div class="e1">
  <label for="">给子组件传递动态值</label>
  <input v-model="parentMsg">
  <p>子组件传给我的数据：<span>{{parentm}}</span></p>
  <br>
  <xxxx child-name="我是父组件" v-bind:child-msg="parentMsg" v-on:child-click="handleIt">
    <p slot="one">这是分发内容One{{parentm}}</p>
    <p slot="two">这是分发内容Two</p>
    <p >这是分发内容默认分发处</p>
  </xxxx>


</div>

</div>
</template>
<script>
  import xxxx from 'components/child'
 
  export default {
    name: 'example1',
    data () {
      return {
        message:'',
        show:true,
        show2:true,
        show3:true,
        parentMsg:'',
        parentm:[]
      }
    },
    components:{
      xxxx },
    methods:{
      handleIt:function(message){
        this.parentm.push(message)
      },
      beforeEnter: function (el) {
       console.log("这是beforEnter")
     },
     enter:function(el,done){
       console.log("这是Enter")
       done()
     },
     leave:function(el,done){
       console.log("这是leave")
       done()
     }

   }
 }


</script>
<style scoped>
  .example1{
    padding: 0 20%;
  }
  .e1{
    margin: 100px 0px;
  }
  .ex1{
    height: 500px;
  }
  .ex-div{
    height: 170px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .fade-div{
    margin: 20px 0px;
    width: 100px;
    height: 100px;
    background: #ed6100;
  }
  .bounce-enter-active {
    animation: bounce-in 2s;
  }
  .bounce-leave-active {
    animation: bounce-out 2s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0) ;
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
  .showbtn{
    background: #dddddd;
  } 
  span{
    color: #42b983;
  }
</style>
