import App from './app.vue';
import Index from './index.vue'
import Summoner from './summoner_page.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
  // dynamic segments start with a colon
  {path: '/', component: Index},
  {path: '/Region/:region/Summoner/:summoner_id', component: Summoner}
  ],
  mode: "history"
});

let appDiv = document.querySelector('#app');
if (!appDiv) {
  appDiv = document.createElement('div');
  appDiv.setAttribute('id', 'app');
  document.body.appendChild(appDiv);
}

new Vue({
  router,
  el: appDiv,
  render: h => h(App),
});
