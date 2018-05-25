<template>
    <div class="backhoeEffciency">
        <v-screening></v-screening>
        <div class="bigbox" v-for="(item,index) in slagCarWorkList" :key="index">
            <v-mtitle :title="item.bossName"></v-mtitle>
            <div class="mui-content" v-for="(slagCar,key) in item.slagCarList" :key="key">
                <div class="slagcar-box">
                    <div class="imgbox">
                        <img :src="zc"/>
                    </div>
                    <div class="textbox">
                        <div class="size28">
                            <span>渣车编号：</span><span class="tlbz">{{slagCar.deviceNumber}} {{slagCar.name}}</span>
                            <span style="margin-left:10px">今日运输：<span class="tsbz">{{slagCar.count}}</span>车</span>
                        </div>
                        <div class="size30">
                            <span>其中：</span>
                        </div>
                        <div class="size32" v-for="(line,lineIndex) in slagCar.countByLine" :key="lineIndex">
                            <span style="margin-left:30px" v-if="line.lineName">{{line.lineName}}：{{line.countByLine}}车</span>
                            <span style="margin-left:30px" v-else>未匹配线路：{{line.countByLine}}车</span>
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
import zc from "../assets/images/zc.jpg";
import {mapState,mapActions} from "vuex";

export default {
    components:{
        'v-screening':Screening,
        'v-mtitle':Mtitle
    },
    data() {
        return {
            zc:zc,
        };
    },
    computed:{
        ...mapState([
            "slagCarWorkList",
            "date",
            "projectId"
        ])
    },
    methods: {
        ...mapActions([
            "getData"
        ]),
        getSlagcar(){
            var params = {
                property:"slagCarWorkList",
                url :"/index/getTopSlagCarWorkList",
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
            this.getSlagcar();
        },
        projectId:function(val){
            this.getSlagcar();
        },
    },
    mounted() {
        this.getSlagcar();
    }
};
</script>

<style scoped lang="less">
.bigbox{
    padding-top:100px; 
}
.mui-content{
    border-top:2px solid #e3e3e5;
    .slagcar-box{
        overflow: hidden;
        background: white;
        border-bottom:2px solid #e3e3e5;  
        .imgbox{
            width: 140px;
            height: 180px;
            margin-left:20px; 
            float: left;
            img{
                width: 100%;
                margin-top:20px;
            }
        }
        .textbox{
            width: 565px;
            height: 100%;
            padding-left: 25px;
            margin-top:20px;
            float: left;
            .name{
                line-height: 60px;
                font-size: 32px;
                font-weight: bold;
                color: #1E90FF;
            }
        }
    }
}
</style>
