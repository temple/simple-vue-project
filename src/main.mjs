import greetings from './components/greetings.vue'
import App from './App.vue'

let app = new Vue({
  components: {
    greetings : greetings
  },
  data: {
    greeting: 'Welcome to your Vue.js app!',
    docsURL: 'http://vuejs.org/guide/',
    discordURL: 'https://chat.vuejs.org',
    forumURL: 'http://forum.vuejs.org/'
  },
  render(h){return h(App);},
  methods: {
    humanizeURL: url => url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')   
  }
}).$mount('#app')
