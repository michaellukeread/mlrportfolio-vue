<template class='landing'>
  <div>
    <div class='container'>
      <h1 class='heading'>Hi, I'm Michael Read</h1>
      <vue-swimlane class='text' :circular='false' :words="['Front-end Developer', 'UI/UX Designer', 'Game Designer', 'Full Stack Developer']" :scale='3' :transitionDelay='1000' ></vue-swimlane>
      <a class='landing-button' v-on:click="scroll()">See My Work</a>
    </div>
    <div>
      <font-awesome-icon class='cheveronIcon' :icon="chevronDown" size="3x" />
    </div>
  </div>
</template>

<script>

import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Landing',
  data: function () {
    return {

    }
  },
  methods: {
      scroll() {  
      document.querySelector(".projects-container").scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  computed: {
    instagram () { return faInstagram },
    github() { return faGithub },
    chevronDown() { return faChevronDown }
  }
}
</script>

<style scoped>
  .container { height: 80vh; display: flex; justify-content: center; align-items: center; flex-direction: column; }
  .heading { font-size: 4rem; margin: 0; padding: 0; font-weight: 400; color: #2D3748; }
  .subheading { font-size: 2.5rem; margin: 0; padding: 0; font-weight: 100; margin-bottom: 1rem; color: #2D3748 }
  .icons { margin-left: .5rem; margin-right: .5rem; margin-bottom: 1rem; }
  .landing-button { background-color:#39425c; border-radius: .5rem; display:inline-block; cursor:pointer; color:#ffffff; font-size:1.2rem; padding:16px 51px;	text-decoration:none; text-transform: uppercase; transition: .5s; font-weight: 600;}
  .landing-button:hover { background-color: grey; }
  .cheveronIcon { color: #2D3748; transform: translateY(0); animation-name: hover; animation-duration: 4s; animation-iteration-count: infinite; }

  @keyframes hover {
    0% {transform: translateY(0)}
    50% {transform: translateY(-10px)}
    100% {transform: translateY(0)}
  }
</style>
