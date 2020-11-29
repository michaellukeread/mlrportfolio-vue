<template>
    <div>
        <div>
            <ProjectInformation :name='selectedProject.name' :desc='selectedProject.desc' :showProjectInformationClass='toggleState'/>
            <div v-on:click='toggleClass()' :class='{crossOverlay: toggleOverlay}' class='cross'>X</div>
            <div v-on:click='toggleClass()' :class='{overlayActive: toggleOverlay}' class='overlay'></div>
        </div>
        <ul class='filter'>
            <input type='radio' value='' v-model='search'>
            <input type='radio' value='Web' v-model='search'>
            <input type='radio' value='UI' v-model='search'>
            <input type='radio' value='Game' v-model='search'>
        </ul>
        <div class='grid'>
            <div class='grid-element' v-for="project in filteredProjects" :key="project.id">
                <img :src="project.img" :alt="project.id">
                <input type='radio' :value='project' v-model='selectedProject' v-on:click="toggleClass()">
            </div>
        </div>
    </div>
</template>

<script>

import jsonProjects from '../assets/projects.json';
import ProjectInformation from '../components/ProjectInformation.vue';

export default {
    name: 'Projects',
    components: {
        ProjectInformation
    },
    data: function() {
        return {
            projects: jsonProjects,
            search: '',
            selectedProject: '',
            toggleState: {toggleClass: false},
            toggleOverlay: false
        }
    },
    methods: {
        toggleClass() {
            this.toggleState.toggleClass = !this.toggleState.toggleClass;
            this.toggleOverlay = !this.toggleOverlay;
        }
    },    
    computed: {
        filteredProjects() {
            return this.projects.filter(project => {
                return project.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        }
    }
}
</script>

<style scoped>

    .filter { display: flex; flex-direction: row; justify-content: center; list-style: none;}
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); grid-template-rows: auto; grid-auto-flow: row dense;}
    .grid img { width: 100%; height: 100%; object-fit: cover; transition: 0.3s; text-align: center; color: white; }
    .grid img:hover { opacity: 20%; cursor: pointer; }
    .cross { position: fixed; top: 2%; left: 1%; z-index: 1; transition: 0.8s; opacity: 0;}
    .crossOverlay { opacity: 1; }
    .overlay { opacity: 0; background-color: black; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: -1; transition: 0.8s;}
    .overlayActive { opacity: 0.2; z-index: 0;}

</style>
