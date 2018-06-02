import Vue from 'vue'
import App from './App.vue'
import media from './index.js'

Vue.use(media, {
  mobile: 'screen and (max-width: 768px)',
  desktop: 'screen and (min-width: 768px)'
})

new Vue({
	el: '#app',
	render: h =>
		h(App, {
			props: {},
		}),
});
