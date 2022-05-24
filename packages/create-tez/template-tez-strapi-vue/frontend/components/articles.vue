<script setup lang="ts">
import { ref } from 'vue'
import ArticleCard from "./article-card.vue"
defineProps<{ data: any }>()

</script>
<template>
<div class="container mx-auto p-5 sm:p-10 md:p-16 relative">
      <h1>Tez Blog</h1>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full lg:w-1/2 px-4">
    <TezLazy :sourcePath="data.dynamicSourcePath" v-slot="source" >
  <div v-for="article of source.items">
      <article-card :article="article"></article-card>
  </div> 
  </TezLazy> 
      </div>
    </div>
</div>
  
</template>
