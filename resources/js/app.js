
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Carousel3d from 'vue-carousel-3d';

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';


Sentry.init({
  dsn: 'https://d0ff352d528a49629a4cec979dbe30b8@sentry.io/1808617',
  integrations: [new Integrations.Vue({ Vue, attachProps: true })],
});


Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Carousel3d)

import VueTimeline from "@growthbunker/vuetimeline";
Vue.use(VueTimeline, {
  theme: "light",
});

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

import App from './views/App'
import Welcome from './views/Welcome'
import About from './views/About'
import Signup from './views/Signup'
import Login from './views/Login'

import BlogHome from './views/blog/Home'
import Post from './views/blog/Post'

import ForumHome from './views/forum/Home';
import Categories from "./views/forum/Categories";
import Thread from "./views/forum/Thread";
import Threads from "./views/forum/Threads";

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome,
      meta: { hasJumbotronElement: true }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { hasJumbotronElement: true }
    },
    {
      path: '/register',
      name: 'register',
      component: Signup,
      meta: { requiresGuest: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresGuest: true }
    },
    {
      path: '/forum',
      component: ForumHome,
      children: [
        {
          path: '',
          name: 'forum',
          component: Categories,
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Threads
        },
        {
          path: 'thread/:id',
          name: 'thread',
          component: Thread,
        }
      ]
    },
    // -- Blog
    {
      path: '/blog',
      name: 'blog',
      component: BlogHome,
      meta: { navStayTop: true }
    }, {
      path: '/blog-post/:id',
      name: 'blog-post',
      props: true,
      component: Post,
      meta: { navStayTop: true }
    },
    // Blog -- //
    {
      path: '/admin',
      name: 'admin',
      component: Login,
      meta: { requiresAuth: true }
    },
  ],
});

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  getters: {
    isAuthenticated: state => {
      return localStorage.getItem("authToken") !== null;
    }
  },
  actions: {
    checkUser(context) {
      axios.get("/api/user").then(response => {
        context.commit('setUser', response.data.user || {})
      })
    }
  }
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = store.getters.isAuthenticated;
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('login');
  }
  if (to.matched.some(record => record.meta.requiresGuest) && isAuthenticated) {
    next('home');
  }
  next();
});

import VueAos from "vue-aos"
Vue.component('vue-aos', VueAos);

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  store,
});