import App from './index.vue';
import Summoner from './summoner_page.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

Vue.config.productionTip = false;

const router = new VueRouter({
  path: '/summoner', component: Summoner
});

let appDiv = document.querySelector('#app');
if (!appDiv) {
  appDiv = document.createElement('div');
  appDiv.setAttribute('id', 'app');
  document.body.appendChild(appDiv);
}

const app = new Vue({
  router,
  el: appDiv,
  render: h => h(App),
});
