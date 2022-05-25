<script setup lang="ts">
defineProps<{ article: any }>();
</script>
<template>
      <router-link
    :to="article.slug"
    class="uk-link-reset"
  >
    <div class="card px-4 py-10">
        <img class="bg-cover text-center overflow-hidden" :src="article.image.url" :style="{height:'391px !important'}" /> 
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
        <img
            class="w-16 h-16 border border-teal-500 rounded-full border-solid"
            src="https://my-strapi-app-images-upload.s3.ap-south-1.amazonaws.com/avatar_image_c40b95e3d5.jpg"
            alt="{{ article.author.name }}"
          />
        <p class="mx-4">{{ article.author.name }}</p>
      </div>
    </div>
    </router-link>
</template>