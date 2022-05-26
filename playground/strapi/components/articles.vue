<script setup lang="ts">
import { ref } from 'vue'
import ArticleCard from "./article-card.vue"
defineProps<{ data: any }>()

</script>
<template>
    <TezLazy :sourcePath="data.dynamicSourcePath" v-slot="source" >
  <div v-for="article of source.items">
      <article-card :article="article"></article-card>
  </div> 
  </TezLazy> 
  
</template>
