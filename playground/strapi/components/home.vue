<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ data: any }>()

</script>

<template>
  <div class="mainBody">
    <div class="introSection">
      <div class="card items-center">
        <div class="col-40">
          <a class="logo" href="#" target="_blank">
          </a>
        </div>
        <div class="col-60">
          <h2>
            {{data.title}}
          </h2>
          <p>
            {{data.info}}
          </p>
          <ul v-for="feature of data.features">
            <li>{{feature}}</li>
          </ul>
          <p class="description">{{data.getStarted}} </p>
        </div>
      </div>
      <div class="gitHub">
        <a href="#" target="_blank"
          ><svg
            class="githubIcon"
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
.col-40 {
  width: 40%;
}
.col-60 {
  width: 60%;
}
.items-center {
  align-items: center;
}
.mainBody {
  position: relative;
  display: flex;
  justify-content: center;
}
.introSection {
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
}
.logo {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  align-items: center;
}
.card {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 1.875rem;
  -webkit-box-shadow: 1.5px 2.598px 6.5px rgba(0,0,0,0.23);
  -moz-box-shadow: 1.5px 2.598px 6.5px rgba(0,0,0,0.23);
  box-shadow: 1.5px 2.598px 6.5px rgba(0,0,0,0.23);
  padding: 1.5rem;
  text-align: left;
}
span.bg-graident{
  background: linear-gradient(to right bottom, #3aabdf, #00b5d5, #00bcb8, #00be8e, #63bd5e);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
h2 {
  font-size: 1.875rem;
  line-height: 2rem;
  font-weight: 600;
  line-height: 1.75rem;
}
p{
  font-size: 1.375rem;
  line-height: 30px;
}
p.description {
  font-size: 1.375rem;
  line-height: 3.125rem;
  border-top: 2px solid #6d6c6c;
  margin-top: 2rem;
  padding-top: 2rem;
}
ul {
  font-size: 1.375rem;
  line-height: 1.875rem;
  margin-top: 1rem;
  padding-left: 14px;
}
ul li {
  margin-top: 1rem;
  list-style: none;
}
ul li::before {
  position: relative;
  top: -2px;
  left:-5px;
  content: "";
  background: linear-gradient(to right bottom, #3aabdf, #00b5d5, #00bcb8, #00be8e, #63bd5e);
  font-weight: bold;
  display: inline-block; 
  width: 8px;
  height: 8px;
  border-radius:100%;
  margin-right:0.3125rem;
}
.gitHub {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}
.githubIcon,
.twitterIcon {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 2rem;
  width: 2rem;
  color: #b6b6b6;
}
.githubIcon:hover,
.twitterIcon:hover {
  color: #6d6c6c;
}
</style>
