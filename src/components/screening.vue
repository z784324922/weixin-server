<template>
    <div class="screening"> 
        <div class="title-ul">
            <div class="title-li" @click="openProjectPicker">
                {{project}}
                <div class="arrow-bottom">
                    <img :src="arrow">
                </div>
            </div>
            <div class="title-li" @click="openDatePicker" style="border-left: solid 1px #d3d3d3;">
                {{date}}
                <div class="arrow-bottom">
                    <img :src="arrow">
                </div>
            </div>
            <mt-datetime-picker
                ref="picker"
                type="date"
                v-model="pickerVisible"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="datechange">
            </mt-datetime-picker>
        </div>
        <mt-popup
            v-model="isShow"
            position="bottom"
            popup-transition="popup-fade">
            <mt-picker :slots="slots" valueKey="name" @change="onProjectChange"></mt-picker>
        </mt-popup>
        
    </div>
</template>

<script>
import arrow from "../assets/images/arrow-bottom.png";
import {mapState,mapActions} from "vuex";

export default {
    name: "screening",
    data() {
        return {
            isShow:false,
            arrow:arrow,
            pickerVisible : "2018-1-1",
            index: 0, 
            today:(new Date()).format("YYYY-MM-dd"),
        };
    },
    computed:{
        ...mapState([
            "slots",
            "project",
            "date"
        ])
    },
    methods: {
        ...mapActions([
            "changeDate",
            "getMyProjects",
            "changeData"
        ]),
        openProjectPicker() {
            this.isShow = true;
        },
        openDatePicker() {
            this.$refs.picker.open();
        },
        datechange(value) {
            this.changeDate(value.format("YYYY-MM-dd"))
            this.pickerVisible = value.format("YYYY-MM-dd");
        },
        onProjectChange(picker,values){
            if(values[0]){
                this.$store.state.project = values[0].name;
                var params = {
                    property:"projectId",
                    json:values[0].id
                }
                this.changeData(params)
            }
        }
    },
    created() {
        // if(!localStorage.tulaobanOpenId){
        //     this.$router.push({path:'/index'})
        // }
        // else{
            var params = {
                url :"/index/getMyProjects"
            }
            this.getMyProjects(params)
        // }   
    },
    mounted() {
        if(!this.date){
            this.changeDate(this.today)
        }
    }
};
</script>

<style scoped lang="less">
.screening {
    width: 100%;
    background: #fff;
    position: fixed;
    z-index: 4;
    top: 0;
    .mint-popup{
        width: 100%;
        div{
            font-size: 30px;
        }
    }
    .title-ul{
        list-style-type: none;
        overflow: hidden;
        background: white;
        border-bottom: solid 2px #d3d3d3;
        .title-li{
        float: left;
        width: 49%;
        font-size: 32px;
        text-align: center;
        line-height: 100px;
        }
    }
    .arrow-bottom{
        float: right;
        margin-right: 20px;
        line-height: 100px;
        img{
            height: 20px;
            display: inline-block; 
            vertical-align: middle;
        }
    }
}
</style>
