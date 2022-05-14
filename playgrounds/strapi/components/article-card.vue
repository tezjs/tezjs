<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ article: any }>()

</script>
<template>
      <router-link
    :to="article.slug"
    class="uk-link-reset"
  >
    <div class="uk-card uk-card-muted">
      <div class="uk-card-media-top">
        <img :src="article.image.url" height="100" />
      </div>
      <div class="uk-card-body">
        <p v-if="article.category" id="category" class="uk-text-uppercase">
          {{ article.category.name }}
        </p>
        <p id="title" class="uk-text-large">{{ article.title }}</p>
        <hr class="uk-divider-small" />
        <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
          <div>
            <!-- <img
              class="avatar"
              :src="article.author.picture.url"
              style="position: static; border-radius: 50%; object-fit: cover"
              width="40px"
              height="40px"
              :alt="article.title"
            /> -->
          </div>
          <div class="uk-width-expand">
            <p class="uk-margin-remove-bottom">{{ article.author.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
