<template>
    <div :class='showProjectInformationClass' class='container'>
        <h1>{{name}}</h1>
        <p>{{desc}}</p>
    </div>
</template>

<script>
export default {
    name: 'ProjectInformation',
    props: {
        name: String,
        desc: String,
        showProjectInformationClass: Object
    }
    //methods: {
        //toggleOffClass() {
            //this.showProjectInformationClass = false
        //}
    //}
}
</script>

<style scoped>
    .container { height: 100%; width: 0; background: coral; position: fixed; z-index: 1; top: 0; left: 0;  transition: 0.5s; overflow: hidden;}
    .toggleClass { width: 50%; opacity: 1; }
</style>