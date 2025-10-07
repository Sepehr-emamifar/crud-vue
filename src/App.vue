<script setup>
<<<<<<< HEAD
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
  </div>
  <div class="max-w-7xl mx-auto mt-10 py-4 px-8">
=======
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container px-10">
    <nav>
      <ul>
        <RouterLink :to="{ name: 'home' }">home</RouterLink>
        |
        <RouterLink :to="{ name: 'users' }">users</RouterLink>
      </ul>
    </nav>
>>>>>>> a8e1ff9 (WIP: save local changes)
    <RouterView />
  </div>
</template>

<style scoped></style>
