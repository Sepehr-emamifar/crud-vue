<template>
<<<<<<< HEAD
  <div v-if="error">
    <p class="text-4xl">error : {{ error.message }}</p>
  </div>
  <div v-else>
    <FilterUsers v-model="filterInput" />
    <h1 class="text-4xl mb-5">Users:</h1>

    <div
      class="mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5"
    >
      <div
        v-for="user in filteredSearch"
        :key="user.id"
        class="p-6 bg-primary border-gray-200 text-white rounded-lg shadow-lg shadow-gray-400 hover:bg-hover transition ease-in-out hover:inset-shadow-xl delay-75"
      >
        <h5 class="mb-2 text-xl font-bold tracking-tight">{{ user.name }}</h5>
        <p class="font-normal text-gray-100">phone: {{ user.phone }}</p>
        <p class="font-normal">email: {{ user.email }}</p>
=======
  <div>
    <div v-if="loading">
      <h1 class="text-2xl mx-auto mt-10 max-w-3xl">loading...</h1>
    </div>
    <div v-else-if="error" class="text-xl mx-auto">
      sorry we got an error: <br />
      <p class="text-2xl">
        {{ error.message }}
      </p>
    </div>
    <div
      v-else
      class="mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5"
    >
      <div
        v-for="user in users"
        :key="user.id"
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
      >
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {{ user.name }}
        </h5>
        <p class="font-normal text-gray-700">id: {{ user.id }}</p>
        <p class="font-normal text-gray-700">phone: {{ user.phone }}</p>
        <p class="font-normal text-gray-700">email: {{ user.email }}</p>
        <a class="font-normal text-gray-700"> website: {{ user.website }} </a>
>>>>>>> a8e1ff9 (WIP: save local changes)
      </div>
    </div>
  </div>
</template>
<script setup>
<<<<<<< HEAD
import { onMounted, ref } from "vue";

import { getUsers } from "@/services/UserService";

const users = ref([]);
const error = ref();
import FilterUsers from "@/components/FilterUsers.vue";

import { useFilterSearch } from "@/composables/useFiltersearch";
const { filteredSearch, filterInput } = useFilterSearch(users);

onMounted(async () => {
  const result = await getUsers();
  users.value = result.data;
  error.value = result.error;
  console.log(Object.keys(result.data).length);
=======
import { ref, onMounted } from "vue";
import axios from "axios";
const users = ref(null);
const error = ref("");
const loading = ref(true);

//read
const getData = async () => {
  try {
    const res = await axios.get("http://localhost:5000/users");
    users.value = res.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
//create
const postData = async () => {
  try {
    const res = await axios.post("http://localhost:5000/users", {
      name: "sepehr",
      phone: "+321312312",
      email: "sepehremami@gmail.com",
      website: "sepehr.dev",
    });
    users.value.push(res.data);
    console.log(users.value);
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
//update
const putData = async () => {
  try {
    const res = await axios.put("http://localhost:5000/users/4", {
      name: "ali(updated)",
      phone: "+112312312",
      email: "aliemami@gmail.com",
      website: "ali.dev",
    });
    // const index = users.value.findIndex((u) => u.id === 4);
    // if (index !== -1) {
    //   users.value[index] = res.data;
    // }
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
const patchData = async () => {
  try {
    const res = await axios.patch("http://localhost:5000/users/3", {
      name: "yoyo(update)",
    });
    // const index = users.value.findIndex((u) => u.id === 10);
    // if (index !== -1) {
    //   users.value[index] = res.data;
    // }
  } catch (error) {
    error.value = error;
  } finally {
    loading.value = false;
  }
};

//delete
// const deleteData = async () => {
//   try {
//     await axios.delete("http://localhost:5000/users/1");
//     const index = users.value.findIndex((u) => u.id === 1);
//     if (index !== -1) {
//       users.value.splice(index, 1);
//     }
//   } catch (error) {
//     error.value = error;
//   }
// };

onMounted(() => {
  getData();
  postData();
  // putData();
  // patchData();
  // deleteData();
>>>>>>> a8e1ff9 (WIP: save local changes)
});
</script>
