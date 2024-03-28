<template>
    <div>
        <ServDetails v-if="servData" :imgsrc="imgsrc" :details="details" :title="title"/>
    </div>
</template>

<script setup>
import ServDetails from '../components/ServDetails.vue';
import DetailedData from '../components/serDetails'
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routeName = ref(route.name);
const servData = computed(() => {
    return DetailedData[routeName.value] || null;
});
const imgsrc = computed(() => servData.value ? servData.value.imgsrc : '');
const title = computed(() => servData.value ? routeName.value : '');
const details = computed(() => servData.value ? servData.value.details : '');
</script>

<style scoped>
/* Add your scoped styles here */
</style>