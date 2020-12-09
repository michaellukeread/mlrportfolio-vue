<template>
    <div :class='showProjectInformationClass' class='project-container'>
        <h1>{{project.name}}</h1>
        <img :class='showprojectinfocontainer' :src='project.img' :alt='project.id'>
        <div>
            <a :href='project.instagramLink'><font-awesome-icon :icon="instagram" size="4x"/></a>
            <a :href='project.githubLink'><font-awesome-icon :icon="github" size="4x"/></a>
        </div>
    </div>
</template>

<script>

import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
    name: 'ProjectInformation',
    props: {
        project: [Object, String],
        showProjectInformationClass: Object,
        showprojectinfocontainer: Object
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
    .project-container { height: 100vh; width: 0; background:white; position: fixed; z-index: 1; top: 0; left: 0;  transition: 0.8s; overflow-x: hidden; box-shadow: 4px 0px 15px -8px rgba(0,0,0,0.77);     justify-content: center;
    display: flex; flex-direction: column; align-items: center; }
    .project-information-contents { width: 0%; transition: 2s;  }
    .toggleClass { width: 50%; opacity: 1; }
    .toggleClass2 { width: 50%; opacity: 1; }
    img { width: 50%; }
</style>