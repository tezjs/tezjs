<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ data: any }>()

</script>
<template>
  <div>
    
    <div class="mx-auto prose md:prose-lg lg:prose-2xl prose-h1:text-teal-500 prose-h1:text-left prose-h2:text-left prose-p:text-lg prose-p:text-justify prose-slate prose-a:text-green-500 prose-em:text-teal-400 prose-blockquote:text-green-400 prose-ul:text-left">
        <div class="not-prose">
        <h2 class="text-5xl font-bold text-teal-500">{{data.title}}</h2>
        </div>
        <img class="aspect-video max-w-full h-auto" :src="data.image.url" :alt="data.title" width="788" height="414">
        <div v-html="data.content"></div>
    </div>
  </div>
      
</template>
<style lang="css">
h1{
    font-size: 2.5rem !important;
}
</style>