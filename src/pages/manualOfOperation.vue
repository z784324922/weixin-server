<template>
    <div class="manualOfOperation">
        <div class="wrap">
            <h1>系统操作手册</h1>
            <div class="box">
                <div class="title">一、挖机司机操作培训：</div>
                <div class="content">
                    &emsp;&emsp;打开土老板app——登录账号密码（账号为该司机手机号、初始密码为123456）——点击开始工作即可（点击开始工作后默认为挖掘工作状态，要求每装满一车对渣车尾部拍一次照，拍照需将渣车编号拍入；若为修路或其他非挖掘装车状态，则点击开始工作后主页面左方辅助工时，切换至辅助工时模式，以便于记录工作时长）
                </div>
            </div>
            <div class="box">
                <div class="title">二、渣车司机操作培训：</div>
                <div class="content">
                    &emsp;&emsp;打开土老板app——登录账号密码（账号为该司机手机号、初始密码为123456）——点击开始工作——渣车到达指定挖掘点选择挖机编号然后确定即可（渣车从指定挖掘点选择挖机确定后沿指定运输路线出发，开始运输，到达指定倒渣点后算完成一次运输）
                </div>
            </div>
            <div class="box">
                <div class="title">三、加油员操作培训：</div>
                <div class="content">
                    &emsp;&emsp;打开土老板app——登录账号密码（账号为该加油员手机号、初始密码为123456）——点击开始工作
                    <br>&emsp;&emsp;1、来油时点击来油，输入来油数量，点击确认，完成来油数量记录
                    <br>&emsp;&emsp;2、加油时点击加油，将加油仪表刻度归零并点击拍照，然后加油中途对加油对象油箱处再拍一到三次照片，加油结束时对加油仪表刻度拍照，再在加油端界面点击右方车辆图形手动添加加油设备编号并确认，最后点击屏幕左方‘加油完毕’，输入加油数量点击确认即可
                </div>
            </div>
            <div class="box">
                <div class="title">四、路线采集员操作培训：</div>
                <div class="content">
                    &emsp;&emsp;打开土老板app——登录账号密码（账号为该加油员手机号、初始密码为123456）——点击登录
                    <br>&emsp;&emsp;1、挖掘点采集：根据项目现场实际挖掘点，当路线采集员持土老板手机，GPS定位于挖掘点时，数量也根据实际挖掘点数量决定
                    <br>&emsp;&emsp;2、中间点采集：根据项目现场挖掘点至渣场实际运输路线，当路线采集员持土老板手机，GPS定位于中间某点时，取1到2个中间点，然后采集
                    倒渣点采集：根据项目现场渣场点决定，当路线采集员持土老板手机，GPS定位于渣场时，采集倒渣点
                </div>
            </div>
            <div class="box">
                <div class="title">五、项目管理人员及项目老板操作培训：</div>
                <div class="content">
                    &emsp;&emsp;该项目管理人员及项目老板私人微信关注‘土石方智能挖运大管家’，点击右下方‘用户注册’，输入账号密码登录，点击‘实时查询’可实时查询挖机渣车实时数据，点击‘我的报表’可查询数据日报和数据月报
                </div>
            </div>
            <div class="box">
                <div class="title">六、后台系统操作培训：</div>
                <div class="content">
                    &emsp;&emsp;1、打开后台网址：<a href="http://www.tulaoban.net/customer/#/login">http://www.tulaoban.net/customer</a>，
                    用管理员账号密码登录进入土老板后台首页
                    <br>&emsp;&emsp;2、基础数据录入培训：项目人员联系方式的录入、项目总方量的录入、已完成项目方量的录入、设备型号的录入等（所有基础数据录入都是在‘基础信息栏’完成）
                    <br>&emsp;&emsp;3、订单审核：点击过程管理，然后就可以根据实际需要点击订单审核，审核订单的目的是查看当日完成订单是否有异常，有异常再需要项目管理核实处理
                </div>
            </div>
            <div class="h30"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    created() {
    },
    mounted() {
    }
};
</script>

<style scoped lang="less">
.manualOfOperation{
    .wrap{
        padding: 0 30px;
        margin-bottom: 50px;
        h1{
            height: 130px;
            line-height: 130px;
            font-size: 45px;
        }
        .box{
            margin-bottom: 30px;
            .title{
                height: 50px;
                font-size: 32px;
            }
            .content{
                font-size:28px;
                line-height: 40px;
            }
        }
        .h30{
            height: 30px;
        }
    }
}
</style>
