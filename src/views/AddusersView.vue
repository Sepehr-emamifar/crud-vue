<template>
  <form
    @submit.prevent="addUser"
    class="max-w-xl mx-auto bg-primary rounded-2xl flex flex-col items-center gap-6 font-[Poppins] text-white py-8 px-0 sm:px-2 shadow-2xl shadow-gray-800"
  >
    <div class="flex items-center gap-2 outline-0">
      <img class="h-6" src="../assests/user.png" alt="user logo" />
      <h1 class="text-2xl font-bold">Add User</h1>
    </div>

    <div class="form__kid2 min-w-4/5">
      <p class="mb-1">Username</p>
      <input
        v-model="userNameInput"
        class="input h-13 w-full outline-none ring-0 text-white font-semibold placeholder:font-normal rounded-lg placeholder:text-gray-200 transition-all ease-in delay-75"
        type="text"
        placeholder="E.g: Jamshid Hamedi"
        required
      />
    </div>

    <div class="form__kid3 min-w-4/5">
      <p class="mb-1">Phone</p>
      <input
        v-model="userPhoneInput"
        class="input h-13 w-full outline-none ring-0 text-white font-semibold placeholder:font-normal rounded-lg placeholder:text-gray-200 transition-all ease-in delay-75"
        type="tel"
        placeholder="E.g: +989129129129"
        required
      />
    </div>

    <div class="form__kid4 min-w-4/5">
      <p class="mb-1">Email</p>
      <input
        v-model="userEmailInput"
        class="input h-13 w-full outline-none ring-0 text-white font-semibold placeholder:font-normal rounded-lg placeholder:text-gray-200 transition-all ease-in delay-75"
        type="text"
        placeholder="Example@gmail.com"
        required
      />
    </div>

    <div class="form__kid6 min-w-4/5">
      <button
        type="submit"
        class="bg-white text-black w-full h-12 mt-4 rounded-sm transition-all ease-in delay-75 hover:bg-gray-200 hover:cursor-pointer hover:scale-99"
      >
        Register User
      </button>
    </div>
  </form>
</template>
<script setup>
import { useAddUser } from "@/composables/useAddUser";
const { userNameInput, userPhoneInput, userEmailInput, addUser } = useAddUser();
</script>

<style scoped>
.input {
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 14px;
  border-style: none;
  padding-block: 10px;
  border-radius: 5px;
  border-inline: 50px;
}
.input:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
