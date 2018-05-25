<template>
    <!--页面主内容区开始-->
    <div class="mui-page-content">
        <div class="my-top">
            <div class="box-left">
                <img :src="timg">
            </div>
            <div class="box-mid">
                <p class="username">{{userInfo.name}}</p>
                <p class="uid">帐号：{{userInfo.user_name}}</p>
            </div>
            <div class="box-right">
                <img :src="arrow">
            </div>
        </div>
        <div class="my-mid">
            <router-link to="/daily">
                <div class="link">
                    <div class="link-left">
                        数据日报
                    </div>
                    <div class="link-right">
                        <img :src="arrow">
                    </div>
                </div>
            </router-link>
            <!-- <div class="link">
                <div class="link-left">
                    数据月报
                </div>
                <div class="link-right">
                    <img :src="arrow" alt="">
                </div>
            </div> -->
        </div>
        <!-- <div class="my-mid">
            <div class="link">
                <div class="link-left">
                    挖机查询
                </div>
                <div class="link-right">
                    <img :src="arrow" alt="">
                </div>
            </div>
            <div class="link">
                <div class="link-left">
                    渣车查询
                </div>
                <div class="link-right">
                    <img :src="arrow" alt="">
                </div>
            </div>
        </div> -->
        <div class="my-bottom" @click="exit">
            退出登录
        </div>
    </div>
</template>

<script>
import timg from "../assets/images/timg.jpg";
import arrow from "../assets/images/arrow-right.png";
import router from "../router";
import axios from "axios";
import {mapState,mapActions} from "vuex";

export default {
    data() {
        return {
            timg:timg,
            arrow:arrow,
        };
    },
    computed:{
        ...mapState([
            "userInfo"
        ])
    },
    methods: {
        ...mapActions([
            "getUserInfo"
        ]),
        //退出登录
        exit (){
            localStorage.clear();
            window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2d7f31d9f1eb2644&redirect_uri=http://www.tulaoban.net/wechat/oauth&response_type=code&scope=snsapi_userinfo&state=111&connect_redirect=1#wechat_redirect"
        }
    },
    created() {
        if(!localStorage.tulaobanOpenId){
            this.$router.push({path:'/index'})
        }
        else{  
            var params = {
                url :"/index/getUserInfo"
            }
            this.getUserInfo(params)
        }   
    },
};
</script>

<style scoped lang="less">
.mui-page-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #efeff4;
    .my-top{
        margin-top: 30px;
        height: 110px;
        border-top: 1px solid #e2e2e6;
        border-bottom: 1px solid #e2e2e6;
        background: white;
        >div{
            float: left;
        }
        .box-left{
            overflow: hidden;
            text-align: center;
            line-height: 110px;
            margin-left:30px;
            img{
                display: inline-block; 
                vertical-align: middle;
                height: 90px;
            } 
        }
        .box-mid{
            margin-left: 30px;
            .username{
                margin-top: 20px;
                font-size: 28px;
                color: black;
                margin-bottom: 5px;
            }
            .uid{
                font-size: 24px;
                color: #a4a4a8;
            }
        }
        .box-right{
            float: right;
            margin-right: 30px;
            line-height: 110px;
            img{
                height: 30px;
                display: inline-block; 
                vertical-align: middle;
            }
        }
    }
    .my-mid{
        height: 72px;
        border-top: 1px solid #e2e2e6;
        border-bottom: 1px solid #e2e2e6;
        margin-top:35px;  
        background: white;
        .link{
            height: 72px;
            margin-left: 25px;
            // border-bottom: 1px solid #e2e2e6;
            .link-left{
                float: left;
                height: 72px;
                line-height: 72px;
                font-size: 28px;
            }
            .link-right{
                float: right;
                margin-right: 30px;
                line-height: 72px;
                img{
                    height: 30px;
                    display: inline-block; 
                    vertical-align: middle;
                }
            }
        }

    }
    .my-bottom{
        margin-top: 30px;
        height: 74px;
        text-align: center;
        line-height: 74px;
        font-size: 28px;
        border-top: 1px solid #e2e2e6;
        border-bottom: 1px solid #e2e2e6;
        background: white;
    }
}

</style>
