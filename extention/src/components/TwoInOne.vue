<template>
<div class="container mx-auto px-5 lg:px-20 mt-20 z-0">
  <div class="office flex justify-center md:hidden">
    <img :src="imgsrc" alt="office-image" class="w-full h-auto">
  </div>

  
  <div class="h-[30vh] md:h-[80vh] flex flex-col md:flex-row justify-between items-center gap-10 mt-20">
    <div class="w-full flex flex-col items-center md:items-start">
      <h1 class="text-2xl md:text-4xl text-slate-700 my-1">
        {{ name }}
        <br><strong class="text-blue-700 text-5xl lg:text-6xl font-bold my-1">Extention Team</strong> 
      </h1>
      <p class="text-2xl md:text-3xl text-slate-700">TEAM WORK MAY THE SUCCESS BE WITH U</p>
      <button class="bg-blue-600 hover:bg-blue-900  font-bold text-white mt-3 outline-none py-4 px-12 rounded-full mt-5" @click="$router.push(visit)">{{ btnName }} <i class="bi bi-arrow-right"></i></button>
    </div>
    <div class="office hidden md:flex justify-center">
      <img :src="imgsrc" alt="office-image" class="w-[100%] h-[100%] mt-0 ">
    </div>
  </div>
</div>
</template>

<script setup>
import {
    defineProps
} from 'vue';
const props = defineProps(['name', 'imgsrc', 'visit', 'btnName'])
</script>

<style scoped>

.office{
    animation: up-down 1s alternate infinite;
    z-index: -1;
    position: relative;
}
@keyframes up-down {
    0%{
        transform: translateY(10px);
    }
    100%{
        transform: translateY(-10px);
    }
}
</style>


