<template>
    <div class="backhoeEffciency">
        <v-screening></v-screening>
        <div class="bigbox" v-for="(item,index) in backhoeWorkList" :key="index">
            <v-mtitle :title="item.bossName"></v-mtitle>
            <div class="mui-content" v-for="(backhoe,key) in item.backhoeList" :key="key">
                <div class="backhoe-box">
                    <div class="imgbox">
                        <img :src="wj"/>
                    </div>
                    <div class="textbox">
                        <span class="name">{{backhoe.name}}</span>
                        <div class="size28">
                            <span>挖机编号：</span><span class="tsbz">{{backhoe.backhoe.deviceNumber}}</span>
                            &nbsp;&nbsp;
                            <!-- <span style="margin-left:20rpx">品牌型号：</span><span class="tsbz">小松360</span> -->
                        </div>
                        <div class="size28">
                            <span>今日挖掘：<span class="tsbz">{{backhoe.backhoe.count}}</span>车</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style="margin-left:20rpx">总 工 时：<span class="tsbz">{{backhoe.backhoe.h}}</span>时<span class="tsbz">{{backhoe.backhoe.m}}</span>分</span>
                        </div>
                        <div class="size28">
                            <span>挖掘工时：</span><span class="tsbz">{{backhoe.backhoe1.h}}</span>时<span class="tsbz">{{backhoe.backhoe1.m}}</span>分
                            &nbsp;&nbsp;
                            <span style="margin-left:20rpx" v-if="backhoe.backhoe2">辅助工时：
                                <span class="tsbz">{{backhoe.backhoe2.h}}</span>时
                                <span class="tsbz">{{backhoe.backhoe2.m}}</span>分
                            </span>
                            <span style="margin-left:20rpx" v-else>辅助工时：
                                <span class="tsbz">0</span>时<span class="tsbz">0</span>分
                            </span>
                        </div>
                        <div class="size28">
                            <span>效　　率：<span class="tsbz">{{parseInt(backhoe.backhoe.cs*60)}}</span>车/小时</span>
                            &nbsp;&nbsp;
                            <span style="margin-left:20rpx"><span class="tsbz">{{parseInt(backhoe.backhoe.sc)}}</span>分<span class="tsbz">{{parseInt(backhoe.backhoe.sc%1*60)}}</span>秒/车</span>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Screening from "../components/screening"
import Mtitle from "../components/mtitle"
import wj from "../assets/images/wj.jpg";
import {mapState,mapActions} from "vuex";

export default {
    components:{
        'v-screening':Screening,
        'v-mtitle':Mtitle
    },
    data() {
        return {
            wj:wj,
        };
    },
    computed:{
        ...mapState([
            "backhoeWorkList",
            "date",
            "projectId"
        ])
    },
    methods: {
        ...mapActions([
            "getData"
        ]),
        getBackhoe(){
            var params = {
                property:"backhoeWorkList",
                url :"/index/getTopBackhoeWorkList",
                data:{
                    itemId : this.projectId,
                    date : this.date
                }  
            }
            this.getData(params)
        }
    },
    watch: {
        date:function(val){
            this.getBackhoe();
        },
        projectId:function(val){
            this.getBackhoe();
        },
    },
    mounted(){
        this.getBackhoe();
    }
};
</script>

<style scoped lang="less">
.bigbox{
    padding-top:100px; 
}
.mui-content {
  border-top: 2px solid #e3e3e5;
  .backhoe-box {
    background: white;
    height: 265px;
    border-bottom: 2px solid #e3e3e5;
    .imgbox {
        width: 140px;
        height: 100%;
        margin-left: 20px;
        float: left;
        img{
            width: 100%;
            margin-top:60px;
        }
    }
    .textbox {
      width: 565px;
      padding-left: 25px;
      padding-top: 20px;
      float: left;
      .name {
        line-height: 50px;
        font-size: 32px;
        font-weight: bold;
        color: #1e90ff;
      }
    }
  }
}
</style>
