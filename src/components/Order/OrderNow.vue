<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// State
const showLoading = ref(true)
const isScrolled = ref(false)
const likedItems = ref([])

// Search Query
const searchQuery = ref('')

// Data Menu
const coffees = [
  {
    name: 'Dalgona Coffee',
    description: 'Whipped coffee made using instant coffee.',
    price: 138,
    image: 'img/dalgona.png',
  },
  {
    name: 'Lungo Coffee',
    description: 'A lungo is a long espresso with a milder taste.',
    price: 99,
    image: 'img/lungo.png',
  },
  {
    name: 'Iced Coffee',
    description: 'Iced coffee is cold coffee with ice.',
    price: 99,
    image: 'img/iced.png',
  },
  {
    name: 'Piccolo Latte',
    description: 'Piccolo coffee has a taste that is not too sour.',
    price: 159,
    image: 'img/piccolo.png',
  },
]

const desserts = [
  {
    name: 'Flaky Pastry',
    description: 'Flaky pastry is known for its thin and crispy texture.',
    price: 69,
    image: 'img/flaky_pastry.png',
  },
  {
    name: 'Shortcrust Pastry',
    description: 'A crisp, crumbly shortcrust pastry made from butter.',
    price: 99,
    image: 'img/shortcrust_pastry.png',
  },
  {
    name: 'Puff Pastry',
    description: 'A type of laminated pastry dough characteristically flaky.',
    price: 49,
    image: 'img/puff_pastry.png',
  },
  {
    name: 'Choux Pastry',
    description: 'A French pastry dough that is unique for its hollow center.',
    price: 79,
    image: 'img/choux_pastry.png',
  },
]

// Computed filtered menu berdasarkan searchQuery (case insensitive)
const filteredCoffees = computed(() => {
  if (!searchQuery.value) return coffees
  return coffees.filter(coffee =>
    coffee.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filteredDesserts = computed(() => {
  if (!searchQuery.value) return desserts
  return desserts.filter(dessert =>
    dessert.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Lifecycle hooks and logic
onMounted(() => {
  // Loading screen delay 3 detik
  setTimeout(() => {
    showLoading.value = false
  }, 3000)

  // Load liked items dari localStorage kalau ada
  const storedLikes = localStorage.getItem('likedItems')
  if (storedLikes) {
    likedItems.value = JSON.parse(storedLikes)
  }

  // Scroll event untuk mendeteksi posisi scroll
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
  }
  window.addEventListener('scroll', handleScroll)

  // Cleanup event scroll saat component diunmount
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// Fungsi toggle like/unlike
function toggleLike(name) {
  const index = likedItems.value.indexOf(name)
  if (index === -1) {
    likedItems.value.push(name)
  } else {
    likedItems.value.splice(index, 1)
  }
  localStorage.setItem('likedItems', JSON.stringify(likedItems.value))
}

// Cek apakah item sudah di-like
function isLiked(name) {
  return likedItems.value.includes(name)
}
</script>

<template>
  <div class="min-h-screen transition-colors duration-1000 bg-[#E1D8C7] text-[#4A2E0D] font-sans">

    <!-- Loading Screen -->
    <div
      v-if="showLoading"
      class="fixed inset-0 flex flex-col items-center justify-center z-50 bg-[#c5a47e]"
    >
      <img src="/img/biji_coffe.png" alt="Coffee Bean" class="w-20 h-20 animate-spin mb-4" />
      <p class="text-[#4A2E0D] text-lg font-medium animate-pulse">Loading coffee...</p>
    </div>

    <!-- Main Content -->
    <main v-else class="max-w-7xl mx-auto px-4 py-8">

      <!-- Navbar -->
      <nav
        class="fixed top-0 left-0 w-full z-50 flex justify-between h-[90px] items-center px-[75px] text-white bg-[#A59786]"
      >
        <h1 class="text-[24px] font-semibold"><a href="#">Café de Aroma</a></h1>
        <ul class="flex gap-[56px]">
          <li><a href="#">Home</a></li>
          <li><a href="#">Coffe</a></li>
          <li><a href="#">Bakery</a></li>
          <li><a href="#">About</a></li>
        </ul>
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

      <!-- Back Link & Search -->
      <div class="flex items-center justify-between gap-4 mb-6 mt-[80px]">
        <a href="/home" class="text-sm text-[#4A2E0D] text-[18px] inline-block">&larr; Back</a>
        <div class="relative w-[250px]">
          <span class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#4A2E0D]">
            <i class="fas fa-search"></i>
          </span>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search Menu..."
            class="w-full h-[50px] pl-12 pr-4 rounded-full bg-white text-[#4A2E0D]"
          />
        </div>
      </div>

      <!-- Coffee Section -->
      <section class="mb-12" v-if="filteredCoffees.length">
        <h2 class="text-2xl font-bold mb-4">OUR SPECIAL COFFEE</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div
            v-for="(coffee, index) in filteredCoffees"
            :key="index"
            class="bg-[#E3DDD4] rounded-lg shadow-md overflow-hidden w-[250px] h-[450px] flex flex-col transition-all duration-500 hover:scale-105"
          >
            <img
              :src="coffee.image"
              alt="coffee image"
              class="h-[280px] w-full object-cover p-3 rounded-2xl"
            />
            <div class="p-4 flex-grow">
              <h3 class="text-[20px] font-semibold text-[#2B2724]">{{ coffee.name }}</h3>
              <p class="text-[12px] text-[#838383] mt-1">{{ coffee.description }}</p>
            </div>
            <div class="p-4 border-t border-[#E1D8C7]">
              <div class="flex justify-between items-center">
                <span class="text-[12px] font-semibold">Rp.{{ coffee.price }}</span>
                <div class="flex items-center gap-3">
                  <button class="text-[12px] bg-[#E1D8C7] text-[#4A2E0D] px-3 py-1 rounded">
                    Buy Now
                  </button>
                  <div class="flex gap-2">
                    <i
                      class="fas fa-heart text-[14px] cursor-pointer"
                      :class="isLiked(coffee.name) ? 'text-red-500' : 'text-[#4A2E0D]'"
                      @click="toggleLike(coffee.name)"
                    ></i>
                    <i class="fas fa-shopping-cart text-[14px] cursor-pointer hover:text-[#4A2E0D]"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Dessert Section -->
      <section v-if="filteredDesserts.length">
        <h2 class="text-2xl font-bold mb-4">OUR SPECIAL DESSERT</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div
            v-for="(dessert, index) in filteredDesserts"
            :key="index"
            class="bg-[#E3DDD4] rounded-lg shadow-md overflow-hidden w-[250px] h-[450px] flex flex-col transition-all duration-500 hover:scale-105"
          >
            <img
              :src="dessert.image"
              alt="dessert image"
              class="h-[280px] w-full object-cover p-3 rounded-2xl"
            />
            <div class="p-4 flex-grow">
              <h3 class="text-[20px] font-semibold text-[#2B2724]">{{ dessert.name }}</h3>
              <p class="text-[12px] text-[#838383] mt-1">{{ dessert.description }}</p>
            </div>
            <div class="p-4 border-t border-[#E1D8C7]">
              <div class="flex justify-between items-center">
                <span class="text-[12px] font-semibold">Rp.{{ dessert.price }}</span>
                <div class="flex items-center gap-3">
                  <button class="text-[12px] bg-[#E1D8C7] text-[#4A2E0D] px-3 py-1 rounded">
                    Buy Now
                  </button>
                  <div class="flex gap-2">
                    <i
                      class="fas fa-heart text-[14px] cursor-pointer"
                      :class="isLiked(dessert.name) ? 'text-red-500' : 'text-[#4A2E0D]'"
                      @click="toggleLike(dessert.name)"
                    ></i>
                    <i class="fas fa-shopping-cart text-[14px] cursor-pointer hover:text-[#4A2E0D]"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Kalau tidak ada hasil pencarian -->
      <p v-if="searchQuery && !filteredCoffees.length && !filteredDesserts.length" class="text-center text-[#4A2E0D] mt-10 text-lg">
        No results found for "{{ searchQuery }}"
      </p>

    </main>
  </div>
</template>
