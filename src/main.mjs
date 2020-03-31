import greetings from './components/greetings.mjs'

let app = new Vue({
  el: '#app',
  components: {
    greetings : greetings
  },
  data: {
    greeting: 'Welcome to your Vue.js app!',
    docsURL: 'http://vuejs.org/guide/',
    discordURL: 'https://chat.vuejs.org',
    forumURL: 'http://forum.vuejs.org/'
  },
  methods: {
    humanizeURL: url => url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')   
  }
})
