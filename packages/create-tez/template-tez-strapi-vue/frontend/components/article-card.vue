<script setup lang="ts">
defineProps<{ article: any }>();
</script>
<template>
  <div class="w-full shadow-lg hover:shadow-2xl transition-all delay-100 ease-in rounded-md px-4 h-full mt-14">
    <div class="card px-4 py-8 flex flex-wrap h-full">
        <div class="h-[300px] overflow-hidden">
          
          <tez-link
            class="no-underline"
            :to="article.slug"
            :title="article.title"
          >
          <img v-tez-src="article.image.url" :width="article.image.width" :height="article.image.height" :alt="article.image.alternativeText">
          </tez-link>
        </div>
      <div
        class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
      >
        <div>
          <div
            class="mb-4 inline-block"
            v-for="item in article.categories"
            :key="item.name"
          >
            <tez-link
              :to="item.slug"
              class="rounded-sm bg-[#eeeeee] px-2 py-1 text-black text-xs leading-4 inline-flex mr-4 mb-0"
              >{{ item.name }}</tez-link
            >
          </div>

          <tez-link
            class="no-underline"
            :to="article.slug"
            :title="article.title"
          >
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-black"
            >
              {{ article.title }}
            </h5>
          </tez-link>
          <div
            class="text-gray-700 text-base my-4"
            v-html="[article.content.slice(0, 220).concat('...')]"
          ></div>
        </div>
      </div>
      <div class="flex items-center mt-auto">
        <tez-link
          :to="article.author.slug"
          class="flex items-center text-black no-underline"
        >
          <img
            class="rounded-full mr-4"
            v-tez-src="article.author.picture.url"
            :alt="article.author.picture.alternativeText"
            height="50"
            width="50"
          />
          {{ article.author.name }}
        </tez-link>
      </div>
    </div>
  </div>
</template>
