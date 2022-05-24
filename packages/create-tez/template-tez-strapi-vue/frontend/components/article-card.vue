<script setup lang="ts">
import { ref } from "vue";

defineProps<{ article: any }>();
</script>
<template>
    <div class="card px-4 py-10">
        <img class="bg-cover text-center overflow-hidden" :src="article.image.url" height="300" /> 
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
              text-md text-green-600
              uppercase
              font-bold
              hover:text-gray-900
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
              text-gray-900
              font-bold
              text-2xl
              mb-2
              hover:text-green-600
              transition
              duration-500
              ease-in-out
              no-underline
            "
            >{{ article.title }}</span
          >
          <p class="text-gray-700 text-base mt-2" v-html="article.content">
          </p>
        </div>
      </div>
      <div class="flex items-center">
        <a href="#" class="">
          <img
            class="w-16 h-16 border border-teal-500 rounded-full border-solid"
            src="https://my-strapi-app-images-upload.s3.ap-south-1.amazonaws.com/avatar_image_c40b95e3d5.jpg"
            alt="{{ article.author.name }}"
          />
        </a>
        <p class="mx-4">{{ article.author.name }}</p>
      </div>
    </div>
</template>