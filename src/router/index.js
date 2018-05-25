import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mindex from '@/pages/index'
import Login from '@/pages/login'
import My from '@/pages/my'
import Daily from '@/pages/daily'
import BackhoeEffciency from '@/pages/backhoeEffciency'
import SlagcarEffciency from '@/pages/slagcarEffciency'
import RefuelingSearch from '@/pages/refuelingSearch'
import HelpCenter from '@/pages/helpCenter'
import BackhoeQuestionDetail from '@/pages/backhoeQuestionDetail'
import SlagcarQuestionDetail from '@/pages/slagcarQuestionDetail'
import SystemIntroduction from '@/pages/systemIntroduction'
import ManualOfOperation from '@/pages/manualOfOperation'
import RefuelingAuditing from '@/pages/refuelingAuditing'
import RefuelingObjection from '@/pages/refuelingObjection'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      meta:{
        title:"正在跳转"
      },
      component: Mindex
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        title:"登录"
      },
      component: Login
    },{
      path:'/my',
      name:'my',
      meta:{
        title:"个人中心"
      },
      component:My
    },{
      path:'/daily',
      name:'daily',
      meta:{
        title:"数据日报"
      },
      component:Daily
    },{
      path:'/backhoeEffciency',
      name:'backhoeEffciency',
      meta:{
        title:"挖机效率"
      },
      component:BackhoeEffciency
    },{
      path:'/slagcarEffciency',
      name:'slagcarEffciency',
      meta:{
        title:"渣车效率"
      },
      component:SlagcarEffciency
    },{
      path:'/refuelingSearch',
      name:'refuelingSearch',
      meta:{
        title:"加油查询"
      },
      component:RefuelingSearch
    },{
      path:'/helpCenter',
      name:'helpCenter',
      meta:{
        title:"帮助中心"
      },
      component:HelpCenter
    },{
      path:'/backhoeQuestionDetail',
      name:'backhoeQuestionDetail',
      meta:{
        title:"常见挖机问题"
      },
      component:BackhoeQuestionDetail
    },{
      path:'/slagcarQuestionDetail',
      name:'slagcarQuestionDetail',
      meta:{
        title:"常见渣车问题"
      },
      component:SlagcarQuestionDetail
    },{
      path:'/systemIntroduction',
      name:'systemIntroduction',
      meta:{
        title:"系统介绍"
      },
      component:SystemIntroduction
    },{
      path:'/manualOfOperation',
      name:'ManualOfOperation',
      meta:{
        title:"操作手册"
      },
      component:ManualOfOperation
    },{
      path:'/refuelingAuditing',
      name:'RefuelingAuditing',
      meta:{
        title:"加油工单审核"
      },
      component:RefuelingAuditing
    },{
      path:'/refuelingObjection',
      name:'RefuelingObjection',
      meta:{
        title:"异议原因"
      },
      component:RefuelingObjection
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

export default router;
