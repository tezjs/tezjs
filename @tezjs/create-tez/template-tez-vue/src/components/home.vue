<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ data: Array<string> }>()

</script>

<template>
  <div
    class="mainBody"
  >
    
    <div class="introSection">
      <a
        class="logo"
        href="#"
        target="_blank"
      >
        <img alt="Tez logo" src="../assets/logo.png" />
      </a>
      <div class="card ">
        <h2>
          Welcome to your Tez Application
        </h2>
        <p>
          We recommend you take a look at the
          , whether you are new or have previous experience with the
          framework.
        </p>
        <p class="description">
          To get started, remove. Have fun!
        </p>
      </div>
      <div class="gitHub">
        <a href="#" target="_blank"
          ><svg
            class=" githubIcon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
              fill="currentColor"
            /></svg
        ></a>
        <a href="#" target="_blank"
          ><svg
            class="twitterIcon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
              fill="currentColor"
            /></svg
        ></a>
      </div>
    </div>
  </div>
</template>

 

<style scoped>
.mainBody{
    position: relative;
    display: flex;
    justify-content: center;
}
.introSection{
    max-width: 56rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
}
.logo{
    display: flex;
    justify-content: center;
    padding-top: 2rem;

}
.card{
    margin-top: 2rem;
    background-color: #ffffff;
    overflow: hidden;
    border-radius: 0.5rem;
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    padding: 1.5rem;
    text-align: left;
}
h2{
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    line-height: 1.75rem;
}
p.description{
    border-top: 2px dashed #6d6c6c;
    margin-top: 2rem;
    padding-top: 2rem;

}
.gitHub{
    display: flex;
    justify-content: center;
    padding-top: 1rem;
}
.githubIcon, .twitterIcon{
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    height: 2rem;
    width: 2rem;
    color: #b6b6b6;
}
.githubIcon:hover, .twitterIcon:hover{
    color: #6d6c6c;
}
</style>

