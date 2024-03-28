<template>
    <div class="bg-white shadow-lg sm:skew-y-6">
        <img :src="imgsrc" :alt="title" class="w-full object-cover h-[200px]">
    <div class="text p-9">
        <h2 class="text-state-800 py-1 font-medium text-lg">{{ title }}</h2>
        <button class="bg-blue-600 hover:bg-blue-900  font-bold text-white mt-3 outline-none py-4 px-12 rounded-full" @click="$router.push('/'+title)">Learn More</button>
    </div>
</div>
</template>

<script setup>
const props = defineProps(['imgsrc', 'title'])
console.log('/service/',props.title);
</script>

<style scoped>

</style>