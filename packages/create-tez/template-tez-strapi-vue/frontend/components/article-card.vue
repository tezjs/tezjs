<script setup lang="ts">
defineProps<{ article: any }>();
</script>
<template>
      <tez-link
    :to="article.slug"
    class="uk-link-reset"
  >
    <div class="card px-4 py-10">
        <img class="bg-cover text-center overflow-hidden" v-tez-src="article.image.url" :style="{height:'391px !important'}" /> 
      <div
        class="
          mt-3
          bg-white
          rounded-b
          lg:rounded-b-none lg:rounded-r
          flex flex-col
          justify-between
          leading-normal
        "
      >
        <div class="">
          <span v-for="category of article.categories" :key="category.name"
            
            class="
              text-md text-gray-600
              hover:text-teal-500
              uppercase
              transition
              duration-500
              ease-in-out
              no-underline
            "
          >
            {{ category.name }}
          </span>
          <span
            
            class="
              block
              text-black
              font-bold
              text-2xl
              mb-2
              hover:text-teal-600
              transition
              duration-500
              ease-in-out
              no-underline
            "
            >{{ article.title }}</span
          >
          
        </div>
      </div>
      <div class="flex items-center">
        
        <p class="mx-4">{{ article.author.name }}</p>
      </div>
    </div>
    </tez-link>
</template>