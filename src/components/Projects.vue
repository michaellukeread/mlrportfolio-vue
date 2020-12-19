<template>
    <div class='container'>
        <h1 class='projects-container'>Projects</h1>
        <div :class='{overlayActive: toggleOverlay }' class='overlay' v-on:click="toggleProject()"></div>

        <div :class='{projectContainerActive: toggleProjectContainer}' class='projectContainer'>
            <h2>{{selectedProject.name}}</h2>
            <div class='projectContainerImgContainer'>
                <img class='projectContainerImg' :src='selectedProject.img' :alt='selectedProject.id'>
            </div>
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
        <transition-group class='projects' name='projects'>
            <div class='project' v-for="project in filteredProjects" :key="project.id">
                <label>
                    <input class='project-radio' type='radio' :value='project' v-model='selectedProject' v-on:click="toggleProject()">
                    <img class='project-image' :src="project.img" :alt="project.id">
                </label>
            </div>
        </transition-group>
    </div>
</template>

<script>

import jsonProjects from '../assets/projects.json';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
    name: 'Projects',
    data: function() {
        return {
            projects: jsonProjects,
            toggleOverlay: false,
            toggleProjectContainer: false,
            search: '',
            selectedProject: '',
            overflowHidden: 'hidden'
        }
    },
    methods: {
        toggleProject() {
            document.body.style.overflow = this.overflowHidden;
            this.toggleProjectContainer = !this.toggleProjectContainer;
            this.toggleOverlay = !this.toggleOverlay;
            if (this.overflowHidden == 'hidden') { this.overflowHidden = '' } else { this.overflowHidden = 'hidden' }
        }
    }, 
    computed: {
        filteredProjects() {
            return this.projects.filter(project => {
                return project.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        },
        cross() { return faTimes },
        instagram () { return faInstagram },
        github() { return faGithub }
    }
}
</script>

<style scoped>

    /* Style on projects container */

    .container { background-color: #2D3748; padding-top: 3vh; padding-bottom: 5%; margin-bottom: 1vh;}
    h1 { color: white; font-weight: 200; font-size: 3rem; padding-bottom: 5vh; padding-top: 5vh;}

    /* Filter Styles */

    .filter { display: flex; flex-direction: row; justify-content: center; list-style: none; margin-bottom: 5vh; padding: 0;}
    .filter-radio { display: none; }
    .filter-radio + label { display: inline-block; margin: -2px; padding: .7rem 2.5rem; margin-bottom: 0; font-size: 14px; color: white; text-align: center; cursor: pointer; background-color: #2D3748;
    border: 1px solid white; transition: 0.5s; border-radius: .5rem; margin-left: .5rem; margin-right: .5rem; text-transform: uppercase; font-weight: 600;}
    .filter-radio + label:hover{ background-color: white; color: #2D3748; }
    .filter-radio:checked + label { background-image: none;  outline: 0; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05); background-color: #e0e0e0; color: #2D3748;}

    /* Projects Section Styles */

    .projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); grid-template-rows: auto; grid-auto-flow: row dense; }
    .projects-enter { transform: scale(0.8) translatey(-80px); opacity: 1; }
    .projects-leave-to{ transform: translatey(30px); opacity: 0; }
    .projects-leave-active { position: absolute; z-index:-2; }
    .project { transition: all .5s ease-in-out; }
    .project-image { width: 100%; height: 100%; }
    .project-radio { display: none; }
    .project-radio + img { cursor: pointer; }

    /* Projects window */

    .projectContainer { height: 100vh; width: 0; background: white; position: fixed; z-index: 1; top: 50%; transform: translate(-50%, -50%); left: 50%; transition: 0.8s; overflow-x: hidden; box-shadow: 4px 0px 15px -8px rgba(0,0,0,0.77); justify-content: center; display: flex; flex-direction: column; align-items: center; display: flex; flex-direction: column; align-items: center; }
    .projectContainerActive { width: 60vw }
    .projectContainerImgContainer { width: 80%; height: 80%; }
    .projectContainerImg { width: 100%; height: 100%; }
    .cross { position: fixed; top: 2%; left: 1%; z-index: 1; transition: .5s; opacity: 0;}
    .crossOverlay { opacity: 1; cursor: crosshair; }
    .overlay { opacity: 0; background-color: black; width: 100%; height: 100%; position: fixed; bottom: 0; left: 0; z-index: -1; transition: .5s;}
    .overlayActive { opacity: 0.8; cursor: crosshair; z-index: 0; }

    </style>