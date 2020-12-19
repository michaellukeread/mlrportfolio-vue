<template>
  <div id="app">
    <Navbar/>
    <Landing/>
    <Projects/>
    <Navbar/>
  </div>
</template>

<script>

import Landing from './components/Landing.vue';
import Projects from './components/Projects.vue';
import Navbar from './components/Navbar.vue';
//import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Landing,
    Projects,
    Navbar
  }
}

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');

  #app {
    font-family: 'Open Sans', sans-serif;;
    box-sizing: border-box;
    text-align: center;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

</style>
