<template>
    <div class='footerContainer'>
        <font-awesome-icon class='envelope' :icon="envelope" size="2x" />
        <p>mread100@gmail.com</p>
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

.footerContainer { display: flex; flex-direction: row; align-items: center; justify-content: flex-end; }
.envelope { color: grey; }
p { margin-left: 1rem; margin-right: 1rem; text-transform: uppercase; text-decoration: none; color: grey; }

</style>