import greetings from './components/greetings.mjs'

var app = new Vue({
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
    humanizeURL: function (url) {
      return url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')
    }
  }
})
