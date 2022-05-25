<script setup lang="ts">
import { ref } from 'vue'
import ArticleCard from "./article-card.vue"
defineProps<{ data: any }>()

</script>
<template>
<div class="container mx-auto p-5 sm:p-10 md:p-16 relative">
      <h1 class="text-5xl font-bold">Tez Blog</h1>
    <div >
    <TezLazy class="flex flex-wrap" :sourcePath="data.dynamicSourcePath" v-slot="source" >
      

  <div class="w-full lg:w-1/2" v-for="article of source.items">
      <article-card :article="article"></article-card>
  </div> 
  
      </TezLazy> 
    </div>
</div>
  
</template>
