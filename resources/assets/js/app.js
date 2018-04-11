/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Menu from './components/Menu.vue'
import FormTask from './components/FormTask.vue'
import Task from './components/Task.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
  history: false,
  routes: [
    {
      path: '/',
      name: 'root',
      component: Task
    },
    {
      path:'/see/:id',
      name: 'see',
      component: FormTask,
      props: {
        newTask: false
      }
    },
    {
      path:'/create',
      name: 'create',
      component: FormTask,
      props: {
        newTask: true
      }
    }
  ]
});

Vue.component('app-menu', Menu);

new Vue({
  el: '#app',
  name: 'app',
  router
});
