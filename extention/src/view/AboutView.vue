<template>
    <div>
        <TwoInOne :name="'Welcome to About Page!'"  :imgsrc="office" visit="service" :btnName="'Services'"/>
    </div>
</template>

<script setup>
import TwoInOne from '../components/TwoInOne.vue'
import office from '../assets/images/office3.jpg'
</script>

<style scoped>

</style>