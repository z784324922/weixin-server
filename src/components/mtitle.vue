<template>
    <div class="mtitle">
        <div class="mtitle-box">
            <img :src="tx"/>
            <span class="tsz">{{title}}</span>
        </div>
    </div>
</template>

<script>
import tx from "../assets/images/tx.png";

export default {
    props:{
        title:String
    },
    data() {
        return {
            tx:tx
        };
    },
};
</script>

<style scoped lang="less">
.mtitle{
  height: 90px;
  background: #efeff4;
  overflow: hidden;
  .mtitle-box{
    margin: 15px auto; 
    width: 95%;
    height: 60px;
    line-height: 60px;
    border-radius: 6px;
    background: white; 
    box-shadow: 0 3px 6px rgba(0,0,0,.3);
    text-align: center;
    img{
        width: 26px; 
        height: 26px;
        margin-right: 10px;
        display: inline-block;
    }
  }
}
</style>
