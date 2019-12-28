import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

// 创建一个路由器实例
// 并且配置路由规则
import Container from './Container.vue'
import Broadcast from './Broadcast.vue'
import Channel from './Channel.vue'
import Account from './Account.vue'
import MyAccount from './MyAccount.vue'
import System from './System.vue'
import Login from "./Login.vue";
import Server from "./Server.vue";
import ExternalApp from "./ExternalApp.vue";
import DDPlayer from "./DDPlayer.vue";
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/main',
      component: Container,
      children: [
        {
          path: "broadcast",
          component: Broadcast,
          name: "推流任务"
        },
        {
          path: "channel",
          component: Channel,
          name: "频道管理"
        },
        {
          path: "account",
          component: Account,
          name: "账号管理"
        },
        {
          path: "myAccount",
          component: MyAccount,
          name: "我的账号"
        },
        {
          path: "system",
          component: System,
          name: "系统管理"
        }, {
          path: "server",
          component: Server,
          name: "转播服务器管理"
        }, {
          path: "externalApp",
          component: ExternalApp,
          name: "外部服务授权管理"
        }, {
          path: "",
          component: Broadcast
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/ddplayer',
      component: DDPlayer
    }
  ]
})
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
