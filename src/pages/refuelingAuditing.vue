<template>
    <div class="refuelingAuditing">
        <div class="wrap">
            <p class="text">设备编号：{{refuelingDetail.deviceNumber}}</p>
            <p class="text">内容：{{refuelingDetail.content}}</p>
            <p class="text">时间：{{refuelingDetail.date}}</p>
            <p class="text">备注内容：{{refuelingDetail.remark}}</p>
            <div class="imgBox">
                <img :src="refuelingDetail.imgUrl">
            </div>
            <div class="btnBox">
                <mt-button type="primary" @click.native="confirm">确认</mt-button>
                <mt-button type="danger" @click.native="objection">异议</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import zc from "../assets/images/zc.jpg";

export default {
    data() {
        return {
            refuelingDetail:{
                deviceNumber:"Z01",
                content:"Z01请求加油，加油量100L，请您予以确认。",
                date:"2018年3月15日 15：31：20",
                remark:"这是备注内容",
                imgUrl:zc
            }
        };
    },
    methods: {
        confirm() {
            console.log("确认通过!");
        },
        objection() {
            console.log("有异议!");
        }
    }
};
</script>

<style scoped lang="less">
.refuelingAuditing{
    .wrap{
        padding: 30px;
        .text{
            height: 50px;
            font-size: 28px;
        }
        .imgBox{
            text-align: center;
            img{
                display: inline-block;
                margin-top: 50px;
                width: 80%;
            }
        }
        .btnBox{
            margin-top: 50px;
            text-align: center;
        }
    }
}
</style>
