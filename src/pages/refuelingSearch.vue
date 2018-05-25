<template>
    <div class="refuelingSearch">
        <v-screening></v-screening>
        <div class="bigbox" v-for="(item,index) in refuelingList" :key="index">
            <div class="title">
                <div class="title-box">
                    <div>
                        <img :src="yt"/>
                        加油点：<span class="tsbz">{{item.deviceNumber}}</span>
                    </div>
                    <div>
                        来油：<span class="tsbz">{{item.oilFrom}}</span>升 加油：<span class="tsbz">{{item.oilTo}}</span>升
                    </div>
                </div>
            </div>
            <div class="mui-content"  v-for="(oil,key) in item.oilList" :key="key">
                <div class="refueling-box">                    
                    <div class="imgbox">
                        <template v-if="oil.oil.device_type==1">
                            <img :src="wj"/>
                        </template>
                        <template v-if="oil.oil.device_type==2">
                            <img :src="zc"/>
                        </template>
                        <template v-if="oil.oil.device_type==3">
                            <img :src="jyx"/>
                        </template>
                    </div>
                    <div class="textbox">
                        <div>
                            <span class="tlbz" v-if="oil.oil.refuel_type==1">加油</span>
                            <span class="tlbz" v-if="oil.oil.refuel_type==2">来油</span>
                            <span class="tlbz" v-if="oil.oil.refuel_type==3">初始</span>
                            <span style="float:right;font-size:32rpx"><span class="tlbz">{{oil.oil.refuel_amount}}</span>升</span>
                        </div>
                        <div class="size28">
                            <span>加油设备编号：<span class="tsbz" style="font-size:32rpx">04</span></span>
                        </div>
                        <div class="size28">
                            <span>加油时间：</span><span class="tsbz" style="font-size:32rpx">{{oil.oil.create_date.split(" ")[1]}}</span>
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
import yt from "../assets/images/yt.png";
import zc from "../assets/images/zc.jpg";
import wj from "../assets/images/wj.jpg";
import jyx from "../assets/images/jyx.png";
import {mapState,mapActions} from "vuex";

export default {
    components:{
        'v-screening':Screening,
    },
    data() {
        return {
            zc:zc,
            wj:wj,
            yt:yt,
            jyx:jyx,
        };
    },
    computed:{
        ...mapState([
            "refuelingList",
            "date",
            "projectId"
        ])
    },
    methods: {
        ...mapActions([
            "getData"
        ]),
        getRefueling(){
            var params = {
                property:"refuelingList",
                url :"/index/getOilList",
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
            this.getRefueling();
        },
        projectId:function(val){
            this.getRefueling();
        },
    },
    mounted() {
        this.getRefueling();
    }
};
</script>

<style scoped lang="less">
.refuelingSearch{
    .mui-content {
        border-top: 2px solid #e3e3e5;
        .refueling-box {
            overflow: hidden;
            background: white;
            border-bottom: 2px solid #e3e3e5;
            .imgbox {
                width: 120px;
                height: 180px;
                margin-left: 20px;
                float: left;
                img{
                    width: 100%;
                    margin-top:30px;
                }
            }
            .textbox {
                width: 540px;
                height: 100%;
                padding-left: 25px;
                margin-top: 20px;
                float: left;
            }
        }
    }
    .title{
        height: 138px;
        padding-top:100px; 
        background: #efeff4;
        overflow: hidden;
        .title-box{
            margin: 15px auto; 
            width: 90%;
            height: 110px;
            border-radius: 6px;
            background: white; 
            box-shadow: 0 3px 6px rgba(0,0,0,.3);
            text-align: center;
            padding: 10px 0;
            box-sizing: border-box;
            div{
                height: 45px;
                line-height: 45px;
                img{
                    display: inline-block;
                    height:25px;  
                }
            }
        }
    }
}

</style>
