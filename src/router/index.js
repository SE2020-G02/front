import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: resolve => require(['@/views/log/login'], resolve),
  },
  {
    path: '/register',
    name: 'register',
    component: resolve => require(['@/views/log/register'], resolve),
  },
  {
    path: '/forgetpwd',
    name: 'forgetpwd',
    component: resolve => require(['@/views/log/forgetpwd'], resolve),
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/views/home/main'], resolve),
    redirect: '/index',
    children: [{
        path: '/index',
        name: 'index',
        component: resolve => require(['@/views/index/main'], resolve),
      },
      {
        path: '/contest',
        name: 'contest',
        component: resolve => require(['@/views/contest/main'], resolve),
      },
      {
        path: '/practice',
        name: 'practice',
        component: resolve => require(['@/views/practice/main'], resolve),
      },
      {
        path: '/reward',
        name: 'reward',
        component: resolve => require(['@/views/reward/main'], resolve),
      },
      {
        path: '/ranking',
        name: 'ranking',
        component: resolve => require(['@/views/ranking/main'], resolve),
      },
      {
        path: '/user',
        name: 'user',
        component: resolve => require(['@/views/user/main'], resolve),
      },
      {
        path: '/admin',
        name: 'admin',
        component: resolve => require(['@/views/admin/main'], resolve),
      },
      {
        path: '/room',
        name: 'room',
        component: resolve => require(['@/views/room'], resolve),
      },
      {
        path: '/blog',
        name: 'blog',
        component: resolve => require(['@/views/blog'], resolve),
      },
      {
        path: '/question',
        name: 'question',
        component: resolve => require(['@/views/question'], resolve),
      },
      {
        path: '/new-question',
        name: 'new-question',
        component: resolve => require(['@/views/new-question'], resolve),
      },
      {
        path: '/changepwd',
        name: 'changepwd',
        component: resolve => require(['@/views/user/changepwd'], resolve),
      },
      {
        path: '/writeblog',
        name: 'writeblog',
        component: resolve => require(['@/views/writeblog'], resolve),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');

    if (token === 'null' || token === '') {
      next('/');
    } else {
      next();
    }
  }
});

export default router