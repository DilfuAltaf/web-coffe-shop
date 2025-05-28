<script setup></script>

<template>
  <div class="w-full h-full bg-[#E1D8C7]">
    <nav
      class="fixed top-0 left-0 w-full z-50 flex justify-between h-[90px] items-center bg-[#c5a47e] px-[75px] text-white"
    >
      <h1 class="text-[24px] font-semibold">Café de Aroma</h1>
      <ul class="flex gap-[56px]">
        <li><a href="#">Home</a></li>
        <li><a href="#">Coffe</a></li>
        <li><a href="#">Bakery</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div class="">
        <button class="bg-[#4A2E0D] w-[124px] h-[46px] text-[18px] rounded-full">Login</button>
      </div>
    </nav>

    <div class="pt-[90px]">
      <div class="h-[700px]  text-white flex flex-col justify-center pl-[160px]" style="background-image: url('/public/bg.png');">
        <h2 class="text-[18px] font-semibold">Welcome to Coffe Shop!</h2>
        <h1 class="text-[52px] font-bold w-[690px] pt-[16px] pb-[32px]">We serve the richeast coffee in the city!</h1>
        <button class="w-[200px] h-[60px] text-[20px] font-semibold bg-white rounded-full text-black">Order Now</button>
      </div>
    </div>
    
  </div>
</template>
