<template>
    <div class='navbar-container'>
        <ul class='navbar'>
            <li class='navbar-item' v-on:click='scrollHome()'>Home</li>
            <li class='navbar-item' v-on:click='scrollProjects()'>Projects</li>
            <li><a class='navbar-item' href="https://www.instagram.com/mlrportfolio/">Instagram</a></li>
            <li><a class='navbar-item' href="https://github.com/michaellukeread">Github</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        scrollProjects() {  
            document.querySelector(".projects-container").scrollIntoView({
                behavior: 'smooth'
            });
        },
        scrollHome() {
            document.querySelector('.navbar').scrollIntoView({
                behavior: 'smooth'
            });
        },
        toggleContact() {
            alert('Contact Page: Gimme your number')
        }
  }
}
</script>

<style scoped>
    .navbar-container { z-index: 0; }
    .navbar { list-style: none; display: flex; flex-direction: row; justify-content: center; padding: 0; padding-top: 5vh;padding-bottom: 5vh; margin: 0;}
    .navbar-item { margin-left: 1rem; margin-right: 1rem; text-transform: uppercase; text-decoration: none; color: grey; cursor: pointer; }
    .navbar-item:hover { color: #2D3748; }
    a { text-decoration: none; }
</style>