import Vue from 'vue'
import App from './App.vue'
import mq from './module.js'

Vue.use(mq)

new Vue({
	el: '#app',
	render: h =>
		h(App, {
			props: {},
		}),
});
