<template>
  <div class="min-h-screen bg-[#f3e8dc] text-[#2e2e2e]">
    <header class="flex justify-between items-center px-6 py-4 bg-[#b19678] text-white">
      <div class="text-xl font-semibold">Café de Aroma</div>
      <nav class="hidden md:flex space-x-6">
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">Coffee</a>
        <a href="#" class="hover:underline">Bakery</a>
        <a href="#" class="hover:underline">About</a>
      </nav>
      <button class="bg-[#3a2f1f] text-white px-4 py-1 rounded">Login</button>
    </header>

    <div class="px-6 py-4">
      <a href="#" class="text-sm text-gray-600 hover:underline">&larr; Back</a>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-10">
      <div class="w-full flex items-center justify-center rounded h-[400px]">
        <img src="/img/dalgona.jpg" alt="" class="w-full h-full object-contain" />
      </div>

      <div class="space-y-4 flex flex-col gap-[10px]">
        <span class="bg-[#6b4f35] text-white text-xs px-3 py-1 w-[65px] rounded">In stock</span>
        <h1 class="text-4xl font-bold">Dalgona Coffe</h1>
        <p class="text-gray-700">whipped coffee mode using instant coffee</p>

        <div class="text-2xl font-bold">Rs138</div>

        <div class="flex items-center space-x-2 text-yellow-500">
          <span>★★★★★</span>
          <span class="text-sm text-gray-600">5.0 Rating | 22 Review</span>
        </div>

        <div class="flex items-center space-x-4">
          <div class="flex items-center border rounded">
            <button @click="decreaseQty" class="px-3 py-1">−</button>
            <span class="px-4">{{ quantity }}</span>
            <button @click="increaseQty" class="px-3 py-1">+</button>
          </div>
          <button class="bg-[#6b4f35] text-white px-6 py-2 rounded shadow hover:bg-[#523e2c]">
            Add to cart
          </button>
        </div>

        <div class="flex items-center text-sm space-x-4 pt-4 text-gray-600">
          <span>♡ Add to Wishlist</span>
        </div>

        <p class="text-sm text-gray-600">Category: Coffe</p>
        <p class="text-sm text-gray-600">Tag: Our Shop</p>

        <div class="flex items-center space-x-3 pt-4">
          <span>Share :</span>
          <a href="#" class="text-gray-600 hover:text-black">●</a>
          <a href="#" class="text-gray-600 hover:text-black"></a>
          <a href="#" class="text-gray-600 hover:text-black"></a>
          <a href="#" class="text-gray-600 hover:text-black"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const quantity = ref(1)

const increaseQty = () => {
  quantity.value++
}

const decreaseQty = () => {
  if (quantity.value > 1) quantity.value--
}
</script>

<style scoped></style>
