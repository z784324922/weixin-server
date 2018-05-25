<template>

</template>

<script>
import { Indicator } from 'mint-ui';

export default {
    data() {
        return {
        };
    },
    created() {
        Indicator.open({
            text: '正在跳转',
            spinnerType: 'snake'
        });
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfe1eb876ddcbb70a&redirect_uri=http://www.tulaoban.net/wechat/oauth&response_type=code&scope=snsapi_userinfo&state=111&connect_redirect=1#wechat_redirect"
        // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2d7f31d9f1eb2644&redirect_uri=http://www.tulaoban.net/wechat/oauth&response_type=code&scope=snsapi_userinfo&state=111&connect_redirect=1#wechat_redirect"
        
    },
};
</script>