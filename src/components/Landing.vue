<template>
  <div class='container'>
    <h1>Hi, I'm Michael Read</h1>
    <h2>I'm a {{skills[1]}}</h2>
    <font-awesome-icon :icon="instagram" size="4x" />
    <font-awesome-icon :icon="github" size="4x" />
  </div>
</template>

<script>

import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

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
  },
  computed: {
    instagram () {
      return faInstagram
    },
    github() {
      return faGithub
    }
  }
}
</script>

<style scoped>
  .container { height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column; }
</style>
