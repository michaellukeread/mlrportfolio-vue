<template class='landing'>
  <div class='container'>
    <h1>Hi, I'm Michael Read</h1>
    <h2>I'm a {{skills[2]}}</h2>
    <div>
      <font-awesome-icon class='icons' :icon="instagram" size="2x" />
      <font-awesome-icon class='icons' :icon="github" size="2x" />
    </div>
    <button class='landing-button' v-on:click="scroll()">See My Work</button>
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
  methods: {
      scroll() {  
      document.querySelector(".grid").scrollIntoView({
        behavior: "smooth"
      });
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
  h1 { font-size: 4rem; margin: 0; padding: 0; font-weight: 300; color: #2D3748; }
  h2 { font-size: 2.5rem; margin: 0; padding: 0; font-weight: 100; margin-bottom: 1rem; color: #2D3748 }
  .icons { margin-left: .5rem; margin-right: .5rem; margin-bottom: 1rem; }
  .landing-button { height: 50px; width: 200px; background-color: #2D3748; text-align: center; transition: .5s; border-radius: .5rem; color: white; text-decoration: none; text-transform: uppercase;  }
  .landing-button:hover { background-color: green; }
</style>
