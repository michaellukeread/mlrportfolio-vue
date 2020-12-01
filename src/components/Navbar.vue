<template>
    <div>
        <ul class='navbar'>
            <li class='navbar-item'><a href="">Home</a></li>
            <li class='navbar-item'><a href="">Projects</a></li>
            <li class='navbar-item'><a href="">About</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
    .navbar { list-style: none; display: flex; flex-direction: row; justify-content: center; padding: 0; margin-top: 5vh;}
    .navbar-item { margin-left: 1rem; margin-right: 1rem; text-transform: uppercase; }
    a { text-decoration: none; color: grey; }
    a:hover { color: #2D3748; }
</style>