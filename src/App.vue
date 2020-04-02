<template>
    <div id="app">
        <img src="https://vuejs.org/images/logo.png" alt="Vue logo">
        <slot name="greetings"></slot>
        <ul>
          <li>
            To learn more about Vue, visit
            <a :href="this.$parent.docsURL" target="_blank">
              {{ this.$parent.humanizeURL(this.$parent.docsURL) }}
            </a>
          </li>
          <li>
            For live help with simple questions, check out
            <a :href="this.$parent.discordURL" target="_blank">
              the Discord chat
            </a>
          </li>
          <li>
            For more complex questions, post to
            <a :href="this.$parent.forumURL" target="_blank">
              the forum
            </a>
          </li>
        </ul>
    </div>
</template>
<script>
  export default{
    name: "App",   
  }
</script>