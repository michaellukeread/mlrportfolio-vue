<template>
    <div>
        <div>
            <ProjectInformation :name='selectedProject.name' :desc='selectedProject.desc' :showProjectInformationClass='toggleState'/>
            <div v-on:click='toggleClass()' :class='{crossOverlay: toggleOverlay}' class='cross'>X</div>
            <div v-on:click='toggleClass()' :class='{overlayActive: toggleOverlay}' class='overlay'></div>
        </div>
        <ul class='filter'>
            <input class='filter-radio' id='all' type='radio' value='' v-model='search'>
            <label for='all'>All</label>
            <input class='filter-radio' id='web' type='radio' value='Web' v-model='search'>
            <label for='web'>Web</label>
            <input class='filter-radio' id='ui' type='radio' value='UI' v-model='search'>
            <label for='ui'>UI</label>
            <input class='filter-radio' id='game' type='radio' value='Game' v-model='search'>
            <label for='game'>Game</label>
        </ul>
        <div class='grid'>
            <div class='grid-element' v-for="project in filteredProjects" :key="project.id">
                <label>
                    <input class='grid-element-radio' type='radio' :value='project' v-model='selectedProject' v-on:click="toggleClass()">
                    <img :src="project.img" :alt="project.id">
                </label>
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
    .filter-radio { display: none }
    .filter-radio + label { display: inline-block; margin: -2px; padding: 4px 12px; margin-bottom: 0; font-size: 14px; line-height: 20px;  color: #333; text-align: center;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; cursor: pointer; background-color: #f5f5f5; background-image: linear-gradient(to bottom, #fff, #e6e6e6);
    background-repeat: repeat-x; border: 1px solid #ccc; border-color: #e6e6e6 #e6e6e6 #bfbfbf; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border-bottom-color: #b3b3b3; }
    .filter-radio:checked + label { background-image: none;  outline: 0; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05); background-color: #e0e0e0; }

    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); grid-template-rows: auto; grid-auto-flow: row dense;}
    .grid img { width: 100%; height: 100%; object-fit: cover; transition: 0.3s; text-align: center; color: white; }
    .grid img:hover { opacity: 20%; cursor: pointer; }
    .grid-element-radio { display: none; }
    .grid-element-radio + img { cursor: pointer; }

    .cross { position: fixed; top: 2%; left: 1%; z-index: 1; transition: 0.8s; opacity: 0;}
    .crossOverlay { opacity: 1; }
    .overlay { opacity: 0; background-color: black; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: -1; transition: 0.8s;}
    .overlayActive { opacity: 0.2; z-index: 0;}

</style>