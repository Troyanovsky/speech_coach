<script setup>
import { reactive, ref } from 'vue';

const props = defineProps({
  pageTitle: { type: String, defualt: 'Page Title' },
});
</script>

<template>
  <div
    class="fixed inset-x-0 top-0 h-16 w-screen bg-base-200 shadow-lg flex flex-row items-center justify-between"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 stroke-neutral ml-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
    <div class="text-center text-primary text-lg">
      <b>{{ props.pageTitle }}</b>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 stroke-neutral mr-6 invisible"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </div>
</template>
