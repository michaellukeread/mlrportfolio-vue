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

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    text-align: center;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

</style>
