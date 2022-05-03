<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <TezLazy sourcePath="filter-collections/cdf6b4d2679ec5dc957c418865fe7731" v-slot="item" >
   <h1> {{item}}</h1>
  </TezLazy> -->
    <tez-slot></tez-slot>
  <router-link to="/custom">Custom</router-link><br/>
  <router-link to="/test">Test</router-link><br/>
  <router-link to="/articles/a-bug-is-becoming-a-meme-on-the-internet">a-bug-is-becoming-a-meme-on-the-internet</router-link><br/>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
