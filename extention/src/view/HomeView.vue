<template>
    <div class="">
        <TwoInOne :name="'Welcome To Home'"  :imgsrc="office1" visit="about" :btnName="'About us'"/>
    </div>
</template>

<script setup>
import TwoInOne from '../components/TwoInOne.vue'
import office1 from '../assets/images/office.jpg'
</script>

<style scoped>

</style>