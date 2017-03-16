<template>
  <div class="child">
    <p>我是子组件</p>
    <p>父组件给我传了一个值是：<span>{{childName}}</span></p>
    <p>父组件给我传了一个动态值是：<span>{{childMsg}}</span></p>
    <input v-model="message">
    <button v-on:click="clickchild">向父组件发送信息</button>
    <slot></slot>
    <slot name="one"></slot>
    <slot name="two"></slot>
  </div>
</template>
<script>
  
  export default{
      data:function(){
      return {
        message:''
      }
    },
    props:["childName","childMsg"],
    methods:{
      clickchild:function(){
        this.$emit("child-click",this.message)
        this.message=''
      }
    }

  }
</script>
<style scoped>
.child{
  margin-top: 30px;
}
span{
  color: #42b983;
}
</style>
