<script setup>
import NavBarVue from '../components/NavBar.vue';
</script>

<template>
  <div
    class="h-screen w-screen bg-base-200 flex flex-col items-center justify-center"
  >
    <!--Nav Bar
    <div
      class="absolute inset-x-0 top-0 h-16 w-screen bg-base-200 shadow-lg flex flex-row items-center justify-between"
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
      <div class="text-center text-primary text-lg"><b>Page Title</b></div>
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
    -->
    <NavBarVue pageTitle="Results"></NavBarVue>

    <!--Tab Bar-->
    <div
      class="absolute inset-x-0 bottom-0 bg-base-200 flex h-20 w-screen flex-row items-center justify-center border-t-2 border-neutral border-opacity-30"
    >
      <div class="h-16 w-16 flex flex-col items-center justify-center m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-neutral"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
        <div class="text-neutral">Record</div>
      </div>
      <div class="h-16 w-16 flex flex-col items-center justify-center m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <div class="text-primary">Result</div>
      </div>
      <div class="h-16 w-16 flex flex-col items-center justify-center m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-neutral"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <div class="text-neutral">Profile</div>
      </div>
    </div>
  </div>
</template>
