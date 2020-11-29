<template>
  <div>
    <h1>Michael said {{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
