<script setup>
const props = defineProps({
  currentPage: String,
});
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-0 bg-base-200 flex h-20 w-screen flex-row items-center justify-center border-t-2 border-neutral border-opacity-30"
  >
    <div
      class="h-16 w-16 flex flex-col items-center justify-center m-auto"
      @click="$router.push({ path: '/record' })"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        :class="{
          'stroke-primary': $route.path == '/record',
          'stroke-neutral': $route.path !== '/record',
        }"
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
      <div
        :class="{
          'text-primary': $route.path == '/record',
          'text-neutral': $route.path !== '/record',
        }"
      >
        Record
      </div>
    </div>
    <div
      class="h-16 w-16 flex flex-col items-center justify-center m-auto"
      @click="$router.push({ path: '/results' })"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        :class="{
          'stroke-primary': $route.path == '/results',
          'stroke-neutral': !$route.path !== '/results',
        }"
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
      <div
        :class="{
          'text-primary': $route.path == '/results',
          'text-neutral': $route.path !== '/results',
        }"
      >
        Results
      </div>
    </div>
    <div
      class="h-16 w-16 flex flex-col items-center justify-center m-auto"
      @click="$router.push({ path: '/profile' })"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        :class="{
          'stroke-primary': $route.path == '/profile',
          'stroke-neutral': !$route.path !== '/profile',
        }"
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
      <div
        :class="{
          'text-primary': $route.path == '/profile',
          'text-neutral': !$route.path !== '/profile',
        }"
      >
        Profile
      </div>
    </div>
  </div>
</template>
