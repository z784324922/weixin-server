<template>
<div class="daily">
    <v-screening></v-screening>
    <div class="mui-content" v-if="daily!=''">
        <!-- 挖机  v-if="(userType&&userType!=4)||(userType==4&&property==0)"-->
        <div class="mui-card" v-if="(userType&&userType!=4)||(userType==4&&property==0)">
            <div class="mui-card-header">
                <img :src="wj" style="width: 25px; max-width: 200px; height: 20px" />
                挖机工作量（已审核通过）
            </div>
            <div class="mui-card-content">
            <div class="mui-card-content-inner" style="overflow: auto">
                <!-- <div class="alidiv"> -->
                    <span class="lspan">当日累计挖掘：<span class="tsbz">{{daily.countBackhoeWorkNumber.count}}</span> 车
                    </span>
                    <span class="rspan" decode="true">总 工 时：<span class="tsbz">{{daily.countBackhoeWorkNumber.h}}</span>小时<span class="tsbz">{{daily.countBackhoeWorkNumber.m}}</span>分
                    </span>
                    <span class="lspan">其中挖掘工时：<span class="tsbz">{{daily.countBackhoeWorkNumber1.h}}</span>小时<span class="tsbz">{{daily.countBackhoeWorkNumber1.m}}</span>分
                    </span>
                    <span class="rspan">辅助工时：<span class="tsbz">{{daily.countBackhoeWorkNumber2.h}}</span>小时<span class="tsbz">{{daily.countBackhoeWorkNumber2.m}}</span>分
                    </span>
                <!-- </div> -->
            </div>
            </div>
            <div class="mui-card-footer">
                <div style="text-align: center;width:100%">
                    <router-link :to="{name:'backhoeEffciency'}">
                        <span id="wja">（查看挖机效率列表）</span>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 渣车 v-if="(userType&&userType!=4)||(userType==4&&property==1)"-->
        <div class="mui-card" v-if="(userType&&userType!=4)||(userType==4&&property==1)">
            <div class="mui-card-header">
                <img :src="zc" style="width: 25px; max-width: 200px; height: 25px" />
            渣车工作量（已审核通过）
            </div>
            <div class="mui-card-content">
            <div class="mui-card-content-inner" style="overflow: auto">
                <div class="alidiv" style="width:100%;span-align:center">
                    <span>当日累计运输：<span class="tsbz">{{daily.countSlagCarWorkNumber}}</span> 车
                    </span>
                </div>
            </div>
            </div>
            <div class="mui-card-footer">
                <div style="text-align: center;width:100%">
                    <router-link :to="{name:'slagcarEffciency'}">
                        <span id="wja">（查看渣车效率列表）</span>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 加油 v-if="(userType&&userType!=4)||(userType==4&&property==1)"-->
        <div class="mui-card" v-if="(userType&&userType!=4)||(userType==4&&property==1)">
            <div class="mui-card-header">
            油量使用情况
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" style="overflow: auto">
                    <div class="alidiv" style="width:100%;span-align:center">
                        <span>当日来油<span class="tsbz">{{daily.oilSumFrom.sum?daily.oilSumFrom.sum:0}}</span>升 加油<span class="tsbz">{{daily.oilSumTo.sum?daily.oilSumTo.sum:0}}</span>升
                        </span>
                    </div>
                    <div class="alidiv" style="width:100%;span-align:center">
                        <span>当日库存油量<span class="tsbz">{{(daily.oilStock*0.84/1000).toFixed(2)}}</span>吨（<span class="tsbz">{{daily.oilStock}}</span>升）
                        </span>
                    </div>
                </div>
            </div>
            <div class="mui-card-footer">
                <div style="text-align: center;width:100%">
                    <router-link :to="{name:'refuelingSearch'}">
                        <span id="wja">（查看油料详情）</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Screening from "../components/screening"
import wj from "../assets/images/wj.jpg";
import zc from "../assets/images/zc.jpg";
import {mapState,mapActions} from "vuex";

export default {
    components:{
        'v-screening':Screening
    },
    data() {
        return {
            wj:wj,
            zc:zc,
            userType:localStorage.tulaobanUserType,
            property:localStorage.tulaobanProperty
        };
    },
    computed:{
        ...mapState([
            "daily",
            "date",
            "projectId"
        ])
    },
    watch: {
        date:function(val){
            var params = {
                url :"/index/getDaily",
                itemId : this.projectId,
                date : val
            }
            if(this.projectId){
                this.getDaily(params)
            }
        },
        projectId:function(val){
            var params = {
                url :"/index/getDaily",
                itemId : val,
                date : this.date
            }
            if(this.date){
                this.getDaily(params)
            }
        },
    },
    methods: {
        ...mapActions([
            "getDaily"
        ])
    }
};
</script>

<style scoped lang="less">
.daily{
    height: 100%;
    background-color: #efeff4;
    .title-ul{
        list-style-type: none;
        overflow: hidden;
        background: white;
        border-bottom: solid 1px #d3d3d3;
        .display_show{
            display: block;
        }
        .display_none{
            display: none;
        }
        .title-li{
            float: left;
            width: 49.8%;
            font-size: 32px;
            text-align: center;
            line-height: 100px;
        }
    }
    .mui-content{
        padding-top: 100px;
        .mui-card{
            font-size: 32px;
            position: relative;
            overflow: hidden;
            margin: 20px;
            border-radius: 6px;
            background-color: #fff;
            background-clip: padding-box;
            box-shadow: 0 3px 6px rgba(0,0,0,.3);
            .mui-card-footer,.mui-card-header{
                font-size: 32px;
                position: relative;
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                min-height: 44px;
                padding: 25px 45px;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                justify-content: space-between;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
            }
            .mui-card-content {
                font-size: 28px;
                position: relative;
                border-top: 2px solid #e3e3e5;
                border-bottom: 2px solid #e3e3e5;
                .mui-card-content-inner{
                    position: relative;
                    padding: 30px;
                    .alidiv{
                        text-align: center;
                    }
                    .lspan {
                        width: 52%;
                        float: left;
                    }
                    .rspan {
                        width: 44%;
                        float: left;
                    }
                }
            }
            .mui-card-header{
                // display: block;
                // text-align: center
                justify-content: center
            }
            .mui-card-footer{
                div{
                    span{
                        color: #007aff;
                        font-size: 28px;
                    }
                }
            }
        }
    }
}
</style>
