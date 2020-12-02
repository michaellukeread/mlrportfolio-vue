<template>
    <div>
        <ul class='navbar'>
            <li class='navbar-item' v-on:click='scrollHome()'>Home</li>
            <li class='navbar-item' v-on:click='scrollProjects()'>Projects</li>
            <li class='navbar-item' v-on:click='scrollContact()'>Contact</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        scrollProjects() {  
            document.querySelector(".grid").scrollIntoView({
                behavior: 'smooth'
            });
        },
        scrollHome() {
            document.querySelector('.landing').scrollIntoView({
                behavior: 'smooth'
            });
        }
  }
}
</script>

<style scoped>
    .navbar { list-style: none; display: flex; flex-direction: row; justify-content: center; padding: 0; margin-top: 5vh;}
    .navbar-item { margin-left: 1rem; margin-right: 1rem; text-transform: uppercase; }
    a { text-decoration: none; color: grey; }
    a:hover { color: #2D3748; }
</style>