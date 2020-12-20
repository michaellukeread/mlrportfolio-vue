<template>
    <div class='footerContainer'>
        <font-awesome-icon class='envelope' :icon="envelope" size="2x" />
        <p>mread100@gmail.com</p>
        <p>0478 589 469</p>
    </div>
</template>

<script>

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'Contact',
    computed: {
        envelope() { return faEnvelope }
    }
}
</script>

<style scoped>

.footerContainer { display: flex; flex-direction: row; align-items: center; width: 50%; justify-content: flex-end; }
.envelope { color: grey; }  
p { margin-left: 1rem; margin-right: 1rem; text-transform: uppercase; text-decoration: none; color: grey; padding-top: 5vh;padding-bottom: 5vh; margin: 0; padding-left: 5%; padding-right: 5%; }

</style>