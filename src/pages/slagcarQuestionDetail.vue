<template>
    <div class="slagcarQuestionDetail">
        <div class="title">
            <h1>{{slagcarQuestions[questionIndex].question}}?</h1>
        </div>
        <div class="answer">
            {{slagcarQuestions[questionIndex].answer}}
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    data() {
        return {
            questionIndex:this.$route.params.questionIndex
        };
    },
    computed:{
        ...mapState([
            "slagcarQuestions"
        ])
    }
};
</script>

<style scoped lang="less">
.slagcarQuestionDetail{
    .title{
        margin: 0 30px;
        padding: 20px 0;
        h1{
            line-height: 60px;
            font-size: 32px;
            color: black;
            font-weight: 800;
        }
        border-bottom: 2px solid #f0eff5;
    }
    .answer{
        padding: 0 30px;
        line-height: 50px;
        margin-top: 25px;
        font-size: 32px;
        color: #898989;
    }
}
</style>
