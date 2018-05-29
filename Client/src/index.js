import App from './index.vue';
import Vue from 'vue';

Vue.config.productionTip = false;

let appDiv = document.querySelector('#app');
if (!appDiv) {
  appDiv = document.createElement('div');
  appDiv.setAttribute('id', 'app');
  document.body.appendChild(appDiv);
}

new Vue({
  el: appDiv,
  render: h => h(App),
});
