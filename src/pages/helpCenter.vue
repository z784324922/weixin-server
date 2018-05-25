<template>
    <div class="helpCenter">
        <div class="title">
            <h1>热点问题</h1>
        </div>
        <div class="question">
            <div class="question-title">
                <img :src="wj"/>
                <span>挖机端：</span>
            </div>
            <div class="question-wrap" v-for="(item,i) in backhoeQuestions" :key="item.questionId">
                <router-link :to="{name:'backhoeQuestionDetail',params:{questionIndex:i}}">
                    <div class="question-box">
                        <div class="link-left">
                            {{item.question}}？
                        </div>
                        <div class="link-right">
                            <img :src="arrow">
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="question-title">
                <img :src="zc"/>
                <span>渣车端：</span>
            </div>
            <div class="question-wrap" v-for="(item,j) in slagcarQuestions" :key="item.questionId">
                <router-link :to="{name:'slagcarQuestionDetail',params:{questionIndex:j}}">
                    <div class="question-box">
                        <div class="link-left">
                            {{item.question}}？
                        </div>
                        <div class="link-right">
                            <img :src="arrow">
                        </div>
                    </div>
                </router-link>   
            </div>
        </div>
    </div>
</template>

<script>
import arrow from "../assets/images/arrow-right.png";
import wj from "../assets/images/wj.jpg";
import zc from "../assets/images/zc.jpg";
import {mapState} from "vuex";

export default {
    data() {
        return {
            arrow:arrow,
            wj:wj,
            zc:zc
        };
    },
    computed:{
        ...mapState([
            "backhoeQuestions",
            "slagcarQuestions"
        ])
    }
};
</script>

<style scoped lang="less">
.helpCenter{
    .title{
        padding-top: 20px;
        background: #f0eff5;
        h1{
            height: 110px;
            line-height: 110px;
            color: #5f5f61;
            font-size: 28px;
            padding-left: 30px;
        }
    }
    .question{
        .question-title{
            overflow: hidden;
            margin-left: 20px;
            height: 100px;
            img{
                width: 55px;
                display: inline-block;
                vertical-align: middle;
            }
            span{
                display: inline-block;
                vertical-align: middle;
                height: 100px;
                line-height: 100px;
                font-size: 32px;
                font-weight: 800;
            }
        }
        .question-wrap{
            margin-left: 20px;
            .question-box{
                overflow: hidden;
                border-bottom:2px solid #f0eff5;
                .link-left{
                    float: left;
                    height: 90px;
                    line-height: 90px;
                    width: 90%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    color: #5f5f61;
                    font-size: 30px;
                }
                .link-right{
                    float: right;
                    margin-right: 30px;
                    line-height: 90px;
                    img{
                        height: 30px;
                        display: inline-block; 
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}
</style>
