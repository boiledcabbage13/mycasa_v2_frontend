import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Components from './components';
import './mixin';
import './assets/app.scss'

window.EventBus = new Vue();

Vue.config.productionTip = false

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
