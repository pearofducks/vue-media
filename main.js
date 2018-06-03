import Vue from 'vue'
import App from './App.vue'
import media from './index.js'

Vue.use(media)

new Vue({
	el: '#app',
	render: h =>
		h(App, {
			props: {},
		}),
});
