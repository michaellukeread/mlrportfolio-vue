<template>
  <div class='container'>
    <h1>Hi, I'm Michael Read</h1>
    <h1>I'm a {{skills[1]}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data: function () {
    return {
      skills: [
        'Front-end Developer',
        'UI/UX Designer',
        'Game Designer'
      ]
    }
  }
}
</script>

<style scoped>
  .container { height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column; }
</style>
