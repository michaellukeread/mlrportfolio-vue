<template>
    <div class='navbar-container'>
        <ul class='navbar'>
            <li class='navbar-item' v-on:click='scrollHome()'>Home</li>
            <li class='navbar-item' v-on:click='scrollProjects()'>Projects</li>
            <li class='navbar-item' v-on:click='toggleContact()'>Contact</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        scrollProjects() {  
            document.querySelector(".scroll-wheel").scrollIntoView({
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
    .navbar { list-style: none; display: flex; flex-direction: row; justify-content: center; padding: 0; margin-top: 5vh;}
    .navbar-item { margin-left: 1rem; margin-right: 1rem; text-transform: uppercase; text-decoration: none; color: grey; cursor: pointer; }
    .navbar-item:hover { color: #2D3748; }
</style>