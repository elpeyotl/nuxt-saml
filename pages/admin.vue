<template>
    <div><h1>Admnin</h1></div>
</template>

<script>
    export default {
      name: "admin.vue",
      serverMiddleware: [
        '~/api/auth.js'
      ],
    }
</script>

<style scoped>

</style>
