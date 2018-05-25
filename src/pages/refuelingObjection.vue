<template>
    <div class="refuelingObjection">
        <div class="wrap">
            <div class="title">请输入异议原因：</div>
            <mt-field  type="textarea" rows="4" v-model="introduction"></mt-field>
            <div class="btnBox">
                <mt-button type="primary" @click.native="submit">提交</mt-button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            introduction:""
        };
    },
    methods: {
        submit() {
            console.log(this.introduction);
        }
    }
};
</script>

<style scoped lang="less">
.refuelingObjection{
    .wrap{
        padding: 30px;
        .title{
            height: 80px;
            font-size: 32px;
        }
        .btnBox{
            margin-top: 50px;
            text-align: center;
        }
    }
}
</style>
