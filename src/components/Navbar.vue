<template>
  <nav class="border-[#def2f1] bg-secondary h-20">
    <div
      class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="http://localhost:5173/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="../assests/user.png" class="h-10" alt="User Logo" />
        <span
          class="self-center text-2xl font-bold whitespace-nowrap dark:text-[#feffff]"
          >Crud Users</span
        >
      </a>
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        @click="showMenu = !showMenu"
        aria-controls="navbar-default"
        :aria-expanded="showMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        :class="[showMenu ? 'block' : 'hidden', 'w-full md:block md:w-auto']"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-10 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 a:border-gray-700 md:bg-transparent bg-gray-500 relative opacity-95"
        >
          <li>
            <RouterLink
              :class="{ active: $route.name === 'Home' }"
              :to="{ name: 'Home' }"
              @click="showMenu = !showMenu"
              class="page block py-2 text-white font-bold px-3 rounded-sm md:hover:bg-transparent md:border-0 transition-all ease-in delay-75 mx-auto text-center"
              aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'Users' }"
              @click="showMenu = !showMenu"
              :class="{ active: $route.name === 'Users' }"
              class="button page block py-2 text-white font-bold px-3 rounded-sm md:hover:bg-transparent md:border-0 transition-all ease-in delay-75 mx-auto text-center"
              >User List</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'AddUsers' }"
              @click="showMenu = !showMenu"
              :class="{ active: $route.name === 'AddUsers' }"
              class="button page block py-2 text-white font-bold px-3 rounded-sm md:hover:bg-transparent md:border-0 transition-all ease-in delay-75 mx-auto text-center"
              >Add user</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
const showMenu = ref(false);
</script>
<style scoped>
.page:hover {
  color: #000;
  background-color: #fffeff;
  border-radius: 5px;
}
.active {
  background-color: #fffeff;
  color: #000;
}
.title {
  max-width: 60%;
}
</style>
