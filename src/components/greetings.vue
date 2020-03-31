<script>
const GreetingComponent = {
    template: `
    <h1>{{ this.$parent.greeting }}</h1>
    `
}

module.exports = GreetingComponent
</script>