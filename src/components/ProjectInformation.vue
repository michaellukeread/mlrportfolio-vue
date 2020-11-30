<template>
    <div :class='showProjectInformationClass' class='project-container'>
        <h1 class=''>{{project.name}}</h1>
        <img :src='project.img' :alt='project.id'>
        <p>{{project.desc}}</p>
        <a :href='project.instagramLink'>
            <button>Instagram</button>
        </a>
        <a :href='project.githubLink'>
            <button>Git Hub</button>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ProjectInformation',
    props: {
        project: Object,
        showProjectInformationClass: Object
    }
}
</script>

<style scoped>
    .project-container { height: 100%; width: 0; background: coral; position: fixed; z-index: 1; top: 0; left: 0;  transition: 0.8s; overflow: hidden;}
    .toggleClass { width: 50%; opacity: 1; }
    img { width: 50%; }
</style>