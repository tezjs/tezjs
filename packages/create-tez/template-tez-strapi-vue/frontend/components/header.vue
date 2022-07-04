<script setup lang="ts">
import { ref } from "vue";

defineProps<{ data: any }>();
</script>
<template>
  <div>
    <header>
      <TezLazy :sourcePath="data.dynamicSourcePath" v-slot="source">
        <nav class="bg-white dark:bg-gray-800">
          <div class="px-6 py-3 mx-auto">
            <div
              class="
                flex flex-col
                md:flex-row md:justify-between md:items-center
              "
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <tez-link
                    class="
                      text-2xl
                      font-bold
                      text-gray-800
                      transition-colors
                      duration-200
                      transform
                      dark:text-white
                      lg:text-3xl
                      hover:text-gray-700
                      dark:hover:text-gray-300
                      no-underline
                    "
                    to="/"
                    >Tez JS</tez-link
                  >
                </div>
              </div>
              <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
              <div class="items-center md:flex">
                <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                  <tez-link
                    v-bind:key="category.slug"
                    :to="category.slug"
                    v-for="category in source.items"
                    class="
                      my-1
                      text-sm
                      leading-5
                      text-gray-400
                      transition-colors
                      duration-200
                      transform
                      dark:text-gray-200
                      hover:text-gray-600
                      dark:hover:text-gray-400
                      md:mx-4 md:my-0
                      no-underline
                    "
                  >
                    {{ category.name }}</tez-link
                  >
                </div>
              </div>
            </div>
          </div>
        </nav>
      </TezLazy>
    </header>
  </div>
</template>
