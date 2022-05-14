<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ data: any }>()

</script>
<template>
    <TezLazy :sourcePath="data.dynamicSourcePath" v-slot="source" >
   <div>
    <nav class="uk-navbar-container uk-navbar" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#modal-full" uk-toggle><span uk-icon="icon: table" /></a>
          </li>
          <li>
            <router-link to="/" >Strapi Blog</router-link>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li v-for="category in source.items">
            <router-link
              :to="category.slug"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>


  </div>
  </TezLazy> 
</template>
