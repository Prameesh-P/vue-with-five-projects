<template>
   <header class="flex justify-between items-center bg-white shadow-md h-[80px] px-5 lg:px-24 ralative z-100">
<div class="text-3xl font-extrabold text-blue-600 hover:text-yellow-400 cursor-pointer" >
    <router-link to="/"><i class="bi bi-code">Extention</i></router-link>
</div>
    <nav class="flex gap-4 flex-col md:flex-row md:bg-transparent p-5 md:gap-10 px-6 md:static absolute bg-white shadow-md md:shadow-none md:w-auto my-7 md:my-0 left-0 w-full duration-100 z-100" :class="[open?'top-0':'top-[-390%]']">
        <router-link to="/" class="text-slate-900 py-5 hover:text-slate-400 px-4 py-2">Home</router-link>
        <router-link to="/about" class="text-slate-900 py-5 hover:text-slate-400 px-4 py-2">About</router-link>
        <router-link to="/service" class="text-slate-900 py-5 hover:text-slate-400 px-4 py-2">Service</router-link>
    </nav>
    <div class="text-4xl text-gray-600 cursor-pointer hover:text-gray-400 md:hidden z-20" @click="menuOpen">
        <i :class="[open?'bi bi-x':'bi bi-list']"></i>
    </div>

  </header>
</template>

<script setup>
import {ref} from 'vue'
const open=ref(false)

const menuOpen = ()=>{
    open.value = !open.value
}
</script>

<style scoped>

</style>