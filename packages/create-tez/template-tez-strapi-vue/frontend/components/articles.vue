<script setup lang="ts">
import { ref } from 'vue'
import ArticleCard from "./article-card.vue"
defineProps<{ data: any }>()

</script>
<template>
<div class="container mx-auto p-5 sm:p-10 md:p-16 relative">
    <div>
    <TezLazy class="tezLazy" :sourcePath="data.dynamicSourcePath" v-slot="source">
      <tez-iterator class="tezIterator flex flex-wrap -mx-4" :items="source.items" v-slot="article">
      <article-card :article="article"/>
      </tez-iterator>
      </TezLazy> 
      
    </div>
</div>
  
</template>
<style lang="css">
div.tezIterator > div{
  width: 100%;
  padding: 0px 14px;
  margin-bottom: 20px;
}
@media (min-width:1024px) {
  div.tezIterator > div{
    width: 50%;
    padding: 0px 14px;
    margin-bottom: 30px;
  }
}
@media (min-width:1280px) {
  div.tezIterator > div{
    width: 33.33%;
    padding: 0px 14px;
    margin-bottom: 40px;

  }
}
</style>