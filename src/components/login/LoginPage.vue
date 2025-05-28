<script setup>
import InputLogin from './InputLogin.vue'
</script>

<template>
  <div class="bg-[#E3D7C7] text-[#4A2E0D] w-full h-screen flex">
    <div class="flex flex-col w-[50%]">
      <h1 class="font-bold pt-[36px] pl-[48px]">Café de Aroma</h1>
      <div class="ml-[162px] flex flex-col items-start">
        <h2 class="font-semibold text-[50px] mt-10">Welcome Back</h2>
        <h3 class="text-[28px] mt-2">Join and get 10% off Your first der!</h3>
        <div class="flex flex-col gap-[30px] mt-[50px]">
          <InputLogin />
          <InputLogin placeholder="Enter your Password" input="password" />
        </div>
        <div
          class="flex justify-between items-center w-[485px] text-sm text-[#4A2E0D] mt-[20px] text-[14px]"
        >
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="w-4 h-4 mr-2 border border-[#4A2E0D] bg-[#E3D7C7] rounded-sm text-[#4A2E0D] focus:ring-0"
            />
            Remember for 30 days
          </label>
          <a href="#" class="hover:underline">Forgot Password</a>
        </div>
        <button
          class="w-[485px] h-[70px] text-[24px] bg-[#7F6445] rounded-[12px] mt-[57px] text-white hover:bg-[#6e5438] transition"
        >
          <a href="/src/components/home page/HomePage.vue">Login</a>
        </button>
      </div>
    </div>
    <div class="w-[50%] h-full flex justify-end bg-[url('/public/login.png')]"></div>
  </div>
</template>
