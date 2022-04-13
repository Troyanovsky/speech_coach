<script setup></script>

<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <div class="w-4/5 h-full flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold">
        Oops...<br /><span class="text-error">404 Error</span><br />
        Page Not Found
      </h1>
      <img
        src="/NotFoundIllustration.svg"
        alt="Page Not Found"
        class="w-full"
      />
      <button
        class="btn btn-primary my-6"
        @click="$router.push({ path: '/home' })"
      >
        Return Home
      </button>
    </div>
  </div>
</template>
