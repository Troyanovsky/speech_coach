<script setup></script>

<template>
  <div
    class="h-screen w-screen bg-base-100 flex flex-col items-center justify-center"
  >
    <!--Nav Bar-->
    <div
      class="absolute inset-x-0 top-0 h-16 w-screen bg-base-200 shadow-lg flex flex-row items-center justify-between"
    >
      <div class="text-primary ml-4">Back</div>
      <div class="text-center text-primary text-lg"><b>Page Title</b></div>
      <div class="text-primary invisible mr-4">Back</div>
    </div>

    <!--Page Content-->
    <div class="mx-auto my-auto flex flex-col items-center justify-center">
      <div class="text-3xl text-secondary-focus mb-4 visible">02:37</div>
      <div
        class="w-48 h-48 btn btn-circle btn-secondary btn-outline shadow-lg flex items-center justify-center text-2xl text-center"
      >
        Start<br />Recording
      </div>
    </div>

    <!--Tab Bar-->
    <div
      class="absolute inset-x-0 bottom-0 flex h-20 w-screen flex-row items-center justify-center border-t-2 border-neutral border-opacity-30"
    >
      <div class="h-16 w-16 flex items-center justify-center m-auto">
        <div class="text-primary"><b>Record</b></div>
      </div>
      <div class="h-16 w-16 flex items-center justify-center m-auto">
        <div class="text-primary">Result</div>
      </div>
      <div class="h-16 w-16 flex items-center justify-center m-auto">
        <div class="text-primary">Profile</div>
      </div>
    </div>
  </div>
</template>
