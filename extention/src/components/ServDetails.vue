<template>
     <h1 class="text-black text-4xl font-bold text-center m-5 z-10 gap-5" >{{ title }}</h1>
     <div class="w-full flex justify-between items-center">
    <!-- <button class="bg-blue-500 hover:bg-blue-400 font-bold text-white mt-3 outline-none py-4 px-12 rounded-full flex justify-center" @click="$router.push('/service')"><i class="bi bi-box-arrow-left"> </i> </button> -->
</div>
     <div class="office flex justify-center md:hidden">
    <img :src="imgsrc" alt="office-image" class="w-full h-auto">
  </div>
  <div class="w-full flex justify-center p-[4%]"></div>
    <div class="h-[10vh] md:h-[45vh] flex flex-col md:flex-row justify-between items-center gap-5 mt-10 ">
        <div class="office hidden md:flex justify-center">
      <img :src="imgsrc" alt="office-image" class="w-[60%] h-[60%] mt-0 ">   
    </div>
        <div class="text p-5 text-white  text-2xl font-bold bg-blue-600 rounded-3xl">
            <h1>{{details}}</h1></div>
            <div class="w-1/5 flex justify-center p-[4%]"></div>
         
    </div>
 
</template>

<script setup>
import {
    defineProps
} from 'vue';
const props = defineProps(['imgsrc', 'details', 'title'])
</script>

<style scoped>
.office {
    animation: pulse 4s ease-in-out infinite;
    z-index: -1;
    position: relative;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>