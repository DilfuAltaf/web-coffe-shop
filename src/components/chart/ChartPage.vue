<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Loading & Scroll
const showLoading = ref(true)
const isScrolled = ref(false)

// Cart data
const cart = ref([])

function loadCart() {
  const stored = localStorage.getItem('cart')
  cart.value = stored ? JSON.parse(stored) : []
}

function increaseQty(index) {
  cart.value[index].quantity++
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

function decreaseQty(index) {
  if (cart.value[index].quantity > 1) {
    cart.value[index].quantity--
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }
}

function removeItem(index) {
  cart.value.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

function goBack() {
  window.history.back()
}

onMounted(() => {
  // Loading screen 0.5 detik lalu hilang
  setTimeout(() => {
    showLoading.value = false
  }, 500)

  loadCart()

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
  }
  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

function handleOrder() {
  const totalItems = cart.value.reduce((sum, item) => sum + item.quantity, 0)

  if (totalItems === 0) {
    alert('Your cart is empty. Please add some items first.')
  } else {
    alert('Your order is being processed. Thank you for shopping with us!')
  }
}
</script>

<template>
  <!-- Loading Screen (paling atas) -->
  <transition name="fade">
    <div
      v-if="showLoading"
      class="fixed inset-0 flex flex-col items-center justify-center bg-[#c5a47e] z-[9999]"
    >
      <img src="/img/biji_coffe.png" alt="Coffee Bean" class="w-20 h-20 animate-spin mb-4" />
      <p class="text-[#4A2E0D] text-lg font-medium animate-pulse">Loading coffee...</p>
    </div>
  </transition>

  <!-- Navbar -->
  <nav
    class="fixed top-0 left-0 w-full z-50 flex justify-between h-[90px] items-center px-[75px] text-white bg-[#A59786]"
  >
    <h1 class="text-[24px] font-semibold"><a href="/home">Café de Aroma</a></h1>
    <div class="flex items-center gap-6">
      <a href="#"><i class="fas fa-bag-shopping text-white text-2xl"></i></a>
      <a href="/">
        <button
          class="bg-[#4A2E0D] w-[124px] h-[46px] text-[18px] rounded-full transition-all duration-300 hover:bg-[#603913] hover:scale-105 hover:shadow-lg hover:text-yellow-200"
        >
          Logout
        </button>
      </a>
    </div>
  </nav>

  <!-- Main content -->
  <div class="bg-[#F7EBD9] min-h-screen font-sans text-[#3E2E23] pt-[90px]">
    <div class="px-6 py-4">
      <button @click="goBack" class="text-sm mb-4 text-[#3A2E2A] flex items-center">
        <a href="/home">&larr; Back</a>
      </button>

      <div class="bg-[#FAECD8] rounded-xl p-6 overflow-x-auto">
        <table class="w-full table-auto text-sm">
          <thead class="text-left border-b border-[#E3CBA8]">
            <tr>
              <th class="py-2">Product</th>
              <th class="py-2">Price</th>
              <th class="py-2">Quantity</th>
              <th class="py-2">Total</th>
              <th class="py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="cart.length === 0">
              <td colspan="5" class="py-12">
                <div class="flex flex-col items-center justify-center">
                  <p class="text-gray-400 font-semibold mb-4">No Item in Chart</p>
                </div>
              </td>
            </tr>

            <tr v-else v-for="(item, index) in cart" :key="index" class="border-b border-[#E3CBA8]">
              <td class="py-4 flex items-center gap-4">
                <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded-md" />
                <div>
                  <p class="font-semibold">{{ item.name }}</p>
                  <div class="text-[#FFB800] text-sm">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </td>
              <td>Rp.{{ item.price }}</td>
              <td>
                <div class="flex items-center border border-gray-300 rounded w-max">
                  <button class="px-2" @click="decreaseQty(index)">−</button>
                  <span class="px-3">{{ item.quantity }}</span>
                  <button class="px-2" @click="increaseQty(index)">+</button>
                </div>
              </td>
              <td>Rp.{{ item.price * item.quantity }}</td>
              <td>
                <button
                  @click="removeItem(index)"
                  class="text-[#3E2E23] hover:text-red-500 text-lg"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-center mt-6">
        <a
          href="/OrderNow"
          class="text-white bg-[#4A2E0D] w-[200px] h-[46px] text-[18px] rounded-full transition-all duration-300 hover:bg-[#603913] hover:scale-105 hover:shadow-lg hover:text-yellow-200 flex items-center justify-center"
        >
          Shopping More
        </a>
      </div>
    </div>
  </div>

  <div id="order" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-3xl px-4">
    <div class="bg-[#FAECD8] rounded-xl shadow-lg p-6 border border-[#E3CBA8]">
      <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
      <div class="flex justify-between mb-2">
        <span>Total Items:</span>
        <span>{{ cart.reduce((sum, item) => sum + item.quantity, 0) }}</span>
      </div>
      <div class="flex justify-between mb-4">
        <span>Total Price:</span>
        <span>Rp.{{ cart.reduce((sum, item) => sum + item.price * item.quantity, 0) }}</span>
      </div>
      <button
        @click="handleOrder"
        class="w-full bg-[#4A2E0D] text-white py-3 rounded-lg hover:bg-[#603913] transition"
      >
        Order Now
      </button>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Segoe UI', sans-serif;
}

/* Fade transition for loading screen */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
