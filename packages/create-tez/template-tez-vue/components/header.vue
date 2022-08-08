<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-gray-100
          py-6
          md:justify-start md:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#"
            ><span class="sr-only">Workflow</span
            ><img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
          /></a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            class="
              bg-white
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-indigo-500
            "
            id="headlessui-popover-button-1"
            type="button"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span
            ><svg
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg></button
          ><!---->
        </div>
        <nav class="hidden md:flex space-x-10">
          <div class="relative">
            <button
              class="
                text-gray-500
                group
                bg-white
                rounded-md
                inline-flex
                items-center
                text-base
                font-medium
                hover:text-gray-900
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
              id="headlessui-popover-button-4"
              type="button"
              aria-expanded="false"
            >
              <span>Home</span></button
            >
          </div>
          <a
            href="https://github.com/tezjs/tezjs" target="blank"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            TezJS
          </a>
        </nav>
        
      </div>
    </div>
  </div>
</template>