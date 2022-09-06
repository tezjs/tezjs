<template>
  <footer
    class="bg-[#345ca8] border border-solid border-transparent border-t border-t-[#f0f0f0] py-5 text-white overflow-hidden"
  >
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4 items-center justify-between">
        <div class="w-full lg:w-1/5 xl:w-3/12 px-4 text-center xl:text-left">
          <tez-link to="/" title="TezJS" class="inline-flex items-center">
            <img
                v-tez-src="'/images/tez-logo-white.png'"
                alt="TezJS"
                width="230"
                height="35"
            />
          </tez-link>
        </div>
        <div
          class="w-full lg:w-3/5 xl:w-6/12 my-4 lg:my-0 px-4 text-center mx-auto mt-4"
        >
          <p class="p-0 my-0 text-center text-base">
          Open-source MIT Licensed. <a target="_blank" title="TezJS" href="https://github.com/tezjs/tezjs" class="underline hover:no-underline">TezJS</a> | Powered by Strapi | Developed with <a href="https://tezjs.io/" target="_blank" class="underline hover:no-underline">TEZJS.io</a>
          </p>
        </div>
        <div
          class="w-full lg:w-1/5 xl:w-3/12 px-4 flex justify-center lg:justify-end items-center text-right"
        >
          <ul class="list-none pl-0 mb-0 flex">
            <li class="flex items-center">
              <a href="https://twitter.com/tez_js" rel="nofollow noopener" title="Twitter" target="_blank"
              class="flex"
                ><img
                  class="align-baseline mx-4"
                  width="25"
                  height="25"
                  v-tez-src="'/images/twitter-white.svg'"
                  alt="Twitter"
              /></a>
            </li>
            <li class="flex items-center">
                 <a
                href="https://github.com/tezjs/tezjs"
                title="Github"
                rel="nofollow noopener"
                target="_blank"
                class="flex"
              >
              <img
                class="align-baseline"
                width="25"
                height="25"
                v-tez-src="'/images/github-white.svg'"
                alt="GitHub"
              />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>