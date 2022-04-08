<script setup></script>

<template>
  <!--Modal for log in-->
  <input type="checkbox" id="login-modal" class="modal-toggle" />
  <label for="login-modal" class="modal cursor-pointer modal-middle">
    <label class="modal-box relative" for="">
      <label
        for="login-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="text-xl font-bold pt-4">Hello There! Please log in.</h3>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Your Email"
          class="input input-bordered w-full max-w-xs"
        />
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Your Password"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="modal-action">
        <label for="login-modal" class="btn btn-primary"> Log In </label>
        <label for="login-modal" class="btn btn-outline btn-neutral">
          Cancel
        </label>
      </div>
    </label>
  </label>

  <!--Landing page hero-->
  <div
    class="bg-accent bg-opacity-30 h-96 w-96 rounded-full absolute -left-28 -top-32"
  ></div>
  <div
    class="bg-secondary bg-opacity-30 h-96 w-96 rounded-full absolute -right-20 -bottom-20"
  ></div>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col items-center">
      <h1 class="text-4xl font-bold text-center text-primary">Speech Coach</h1>
      <h2 class="text-2xl text-center">Speak with Confidence</h2>
      <div class="w-7/8">
        <img src="/home_hero_1.svg" class="w-full" />
      </div>
      <label for="login-modal" class="btn btn-primary modal-button">
        Get Started
      </label>
    </div>
  </div>
</template>
