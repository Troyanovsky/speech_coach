<script setup></script>

<template>
  <div class="h-screen w-screen bg-base-100">
    <!--Nav Bar-->
    <div
      class="absolute inset-x-0 top-0 h-16 w-screen bg-primary shadow-md flex flex-row items-center"
    >
      <div class="text-primary-content justify-self-start">Back</div>
      <div class="text-center text-primary-content justify-self-center">
        Page Title
      </div>
    </div>

    <!--Tab Bar-->
    <div
      class="absolute inset-x-0 bottom-0 flex h-20 w-screen flex-row items-center justify-evenly border-t-2 border-primary border-opacity-30"
    >
      <div
        class="h-16 w-16 flex items-center justify-center rounded-md bg-primary"
      >
        <div class="text-primary-content">Record</div>
      </div>
      <div class="h-16 w-16 flex items-center justify-center rounded-md">
        <div class="text-primary">Result</div>
      </div>
      <div class="h-16 w-16 flex items-center justify-center rounded-md">
        <div class="text-primary">Profile</div>
      </div>
    </div>
  </div>
</template>
