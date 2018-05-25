
import axios from "axios";
import qs from "qs"

// axios.defaults.baseURL = "http://192.168.0.200:10011/";     // 本地服务器地址 
axios.defaults.baseURL = "http://www.tulaoban.net/wechat/";    //  线上服务器地址

// 请求的拦截器
axios.interceptors.request.use( (config)=> {
    const openid = localStorage.tulaobanOpenId;
     // 判断请求的类型
     // 如果是post请求就把默认参数拼到data里面
     // 如果是get请求就拼到params里面
    if(config.method === 'post') {
        let data = qs.parse(config.data)
        config.data = qs.stringify({
            // openid : "o3_daswJauDM5g8_w9FAgR0DryPU",
            openid:openid,
            ...data
        })
    } else if(config.method === 'get') {
        config.params = {
            // openid : "o3_daswJauDM5g8_w9FAgR0DryPU",
            openid:openid,
            ...config.params
        }
    }
    return config;
}, (error)=> {
    return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {  
    // openid 已过期，重定向到微信权限验证接口  
    if (response.data.code == -109){  
        localStorage.clear();
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2d7f31d9f1eb2644&redirect_uri=http://www.tulaoban.net/wechat/oauth&response_type=code&scope=snsapi_userinfo&state=111&connect_redirect=1#wechat_redirect"
    }  
    return response  
}, function (error) {  
    return Promise.reject(error)  
})

Date.prototype.format = function(format) {
    var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
    };
    if(this.getMinutes()<10){
          date["m+"]="0"+this.getMinutes();
    }
    if(this.getSeconds()<10){
          date["s+"]="0"+this.getSeconds();
    }
    if(this.getHours()<10){
        date["h+"]="0"+this.getHours();
    }
    if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                  format = format.replace(RegExp.$1, RegExp.$1.length == 1
                          ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
    }
    return format;
}
export default {
    //post方法调用接口,改变state
    getData({commit},params){
        axios.post(params.url,{
            ...params.data
        })
        .then(res=>{return res.data;})
        .then(json=>{
            var data = {
                property:params.property,
                json:json.data
            }
            commit("changedata",data)
        })
    },
    //获取日报信息
    getDaily({commit},params){
        axios.post(params.url,{
            itemId:params.itemId,
            date:params.date
        })
        .then(res=>{return res.data;})
        .then(json=>{
            var data = {
                property:"daily",
                json:json.data
            }
            commit("changedata",data)
        })
    },
    //获取用户信息
    getUserInfo({commit},params){
        axios.post(params.url)
        .then(res=>{return res.data;})
        .then(json=>{
            var data = {
                property:"userInfo",
                json:json.data
            }
            localStorage.tulaobanUserType = json.data.user_type;
            localStorage.tulaobanProperty = json.data.property;
            commit("changedata",data)
        })
    },
    //获取项目列表
    getMyProjects({commit},params){
        axios.post(params.url)
        .then(res=>{return res.data;})
        .then(json=>{
            var projectNmae =[];
            for(var i=0;i<json.data.length;i++){
                projectNmae.push({"id":json.data[i].id,"name":json.data[i].item_name})
            }

            var data = {
                property:"slots",
                json:[{
                    flex: 1,
                    values:projectNmae,
                    className: 'slot1',
                }]
                
            }
            commit("changedata",data)
        })
    },
    changeDate({commit},params){
        var data = {
            property:"date",
            json:params
        }
        commit("changedata",data)
    },
    changeData({commit},params){
        commit("changedata",{...params})
    },
}