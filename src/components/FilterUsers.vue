<template>
  <div
    class="transition ease-in bg-filter hover:bg-hover max-w-xl p-5 rounded-2xl h-12 flex items-center mb-10 gap-4 mx-auto delay-75 shadow-lg hover:inset-shadow-xl"
  >
    <img src="../assests/search.png" class="h-8" alt="Search box" />
    <input
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      class="min-w-full outline-0 font-medium text-blue-100 placeholder-green-50"
      placeholder="who are you searching for?"
    />
  </div>
</template>

<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>
