<template>
    <div class="container mx-auto px-5 xl:px-24">
        <div class="text">
            <h1 class="text-blue-700 text-4xl font-bold text-center mt-5">Our Services</h1>
        </div>
        <div class="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="data in ServData" :key="data">
                <Card :imgsrc="data.imgsrc" :title="data.title"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ServData from  '@/components/serviceData'
import Card from '@/components/Card.vue'
</script>

<style scoped>

</style>