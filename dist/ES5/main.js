"use strict";

var _greetings = _interopRequireDefault(require("./components/greetings.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new Vue({
  el: '#app',
  components: {
    greetings: _greetings["default"]
  },
  data: {
    greeting: 'Welcome to your Vue.js app!',
    docsURL: 'http://vuejs.org/guide/',
    discordURL: 'https://chat.vuejs.org',
    forumURL: 'http://forum.vuejs.org/'
  },
  methods: {
    humanizeURL: function humanizeURL(url) {
      return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    }
  }
});