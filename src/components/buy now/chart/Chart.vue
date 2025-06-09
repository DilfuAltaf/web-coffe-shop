<template>
  <div class="bg-[#F7EBD9] min-h-screen font-sans text-[#3E2E23]">
    <header class="text-white py-10 px-6 flex justify-between items-center">
      <nav
        class="fixed top-0 left-0 w-full z-50 flex items-center h-[90px] px-[75px] text-white bg-[#99856B]"
      >
        <h1 class="text-[24px] font-semibold flex-shrink-0"><a href="#">Café de Aroma</a></h1>
        <ul class="flex gap-[56px] flex-1 justify-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">Coffe</a></li>
          <li><a href="#">Bakery</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <div class="flex items-center">
          <button
            class="bg-[#4A2E0D] w-[124px] h-[46px] text-[18px] rounded-full transition-all duration-300 hover:bg-[#603913] hover:scale-105 hover:shadow-lg hover:text-yellow-200 ml-4"
          >
            Login
          </button>
        </div>
              
      </nav>
    </header>

    <div class="px-6 py-4">
      <button @click="goBack" class="text-sm mb-4 text-[#3A2E2A] flex items-center">← Back</button>

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
            <tr v-for="(item, index) in cart" :key="index" class="border-b border-[#E3CBA8]">
              <td class="py-4 flex items-center gap-4">
                <img :src="item.image" alt="item.name" class="w-16 h-16 object-cover rounded-md" />
                <div>
                  <p class="font-semibold">{{ item.name }}</p>
                  <div class="text-[#FFB800] text-sm">★★★★★</div>
                </div>
              </td>
              <td>Rp.{{ item.price * item.quantity }}</td>
              <td>
                <div class="flex items-center border border-gray-300 rounded w-max">
                  <button class="px-2" @click="decreaseQty(index)">−</button>
                  <span class="px-3">{{ item.quantity }}</span>
                  <button class="px-2" @click="increaseQty(index)">+</button>
                </div>
              </td>
              <td>Rp.{{ item.price * item.quantity }}</td>
              <td>
                <button @click="removeItem(index)" class="text-[#3E2E23] hover:text-red-500">
                  <font-awesome-icon :icon="['fas', 'trash']" class="text-lg" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping, faTrash)

export default {
  name: 'CartPage',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      cart: [
        {
          name: 'Dalgona Coffee',
          price: 138,
          quantity: 1,
          image: '/img/dalgona.jpg',
        },
        {
          name: 'Lungo Coffee',
          price: 199,
          quantity: 1,
          image: '/img/gambar kopi.jpg',
        },
        {
          name: 'Flaky Pastry',
          price: 89,
          quantity: 1,
          image: '/img/gambar1.jpg',
        },
        {
          name: 'Shortcrust Pastry',
          price: 119,
          quantity: 1,
          image: '/img/makanan2.jpg',
        },
      ],
    }
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
  },
  methods: {
    increaseQty(index) {
      this.cart[index].quantity++
    },
    decreaseQty(index) {
      if (this.cart[index].quantity > 1) this.cart[index].quantity--
    },
    removeItem(index) {
      this.cart.splice(index, 1)
    },
    goBack() {
      window.history.back()
    },
  },
}
</script>

<style scoped>
body {
  font-family: 'Segoe UI', sans-serif;
}
</style>
