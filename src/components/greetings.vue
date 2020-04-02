<template>
    <h1>{{ greeting }}</h1>
</template>

<script>
export default {
    props:{
        "greeting":{
            required: true,
            type: String
        }
    }
}
</script>