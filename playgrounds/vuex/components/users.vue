<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters,useStore } from "vuex"
export default defineComponent({
    computed: {
        ...mapGetters({
            users: "user/getUsers"
        })
    },
    mounted(){
      const store = useStore();
      store.dispatch('user/fetchUsers')
    }
  })</script>
<template>
  <h1>
    Users
  </h1>
    <ul>
    <li v-for="user in users" :key="user.id">{{ user.fullName }}</li>
  </ul>
</template>