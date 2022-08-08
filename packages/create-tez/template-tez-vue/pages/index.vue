<script >
import headerComponent from "/@/components/header.vue";
import footerComponent from "/@/components/footer.vue";
export default {
  components: {
    headerComponent: headerComponent,
    footerComponent:footerComponent
  },
  head: {
    title: "tezjs: starter vue project",
  },
};
</script>
<template>
  <headerComponent></headerComponent>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Build ultra-modern, super-fast, secure, and scalable websites
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          The fastest and future-proof framework that enables developers to build blazing-fast websites.
        </p>
      </div>
      <div class="mt-10">
        <dl
          class="
            space-y-10
            md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10
          "
        >
          <div class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                An Open-Source Framework with Endless Possibilities
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              The primary goal of TezJS is to improve core web vitals without compromising the user experience. This provides endless possibilities for every team member
            </dd>
          </div>
          <div class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  ></path>
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Development and Deployment in the Blink of an Eye
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              The incredible community, broad ecosystem, headless framework, and component-driven architecture of TezJS help you develop and deploy your website in minutes.
            </dd>
          </div>
          <div class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Short Page Load Time for Amazing User Experience 
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
             When every millisecond counts and every byte is precious, you must ensure that you’re only loading the data your users need. TezJS lets you load only the required data which is asked. 
            </dd>
          </div>
          <div class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
              Combine Data and Create Rich Web Experiences 
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              TezJS has a common data layer that makes it simple for developers to combine data from various sources and render it side by side. It’s easy to consistently add content to your site from Strapi, etc.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

 <footerComponent></footerComponent>
</template>