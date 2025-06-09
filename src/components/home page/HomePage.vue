<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showLoading = ref(true)
const showWelcome = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  setTimeout(() => {
    showLoading.value = false
    showWelcome.value = true

    setTimeout(() => {
      showWelcome.value = false
    }, 2000)
  }, 500)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
  }

  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <div
    class="min-h-screen transition-colors duration-1000"
    :class="showLoading || showWelcome ? 'bg-[#c5a47e]' : 'bg-[#E1D8C7]'"
  >
    <div
      v-if="showLoading"
      class="fixed inset-0 flex flex-col items-center justify-center z-50 bg-[#c5a47e]"
    >
      <img src="/img/biji_coffe.png" alt="Coffee Bean" class="w-20 h-20 animate-spin mb-4" />
      <p class="text-[#4A2E0D] text-lg font-medium animate-pulse">Loading coffee...</p>
    </div>

    <div
      v-else-if="showWelcome"
      class="fixed inset-0 flex items-center justify-center z-50 bg-[#c5a47e]"
    >
      <h1 class="text-[#4A2E0D] font-extrabold text-4xl text-center animate-fadeInOut">
        Welcome to Coffee Shop
      </h1>
    </div>

    <div v-else class="w-full h-full">
      <nav
        class="fixed top-0 left-0 w-full z-50 flex justify-between h-[90px] items-center px-[75px] text-white"
        :class="[
          'fixed top-0 left-0 w-full z-50 flex justify-between h-[90px] items-center px-[75px] text-white transition-colors duration-300',
          isScrolled ? 'bg-[#A59786]' : 'bg-transparent',
        ]"
      >
        <h1 class="text-[24px] font-semibold"><a href="#">Café de Aroma</a></h1>
        <ul class="flex gap-[56px]">
          <li><a href="#">Home</a></li>
          <li><a href="#menu">Coffe</a></li>
          <li><a href="#bakery">Bakery</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <div class="flex items-center gap-6">
          <!-- Ikon tas belanja -->
          <a href="#">
            <i class="fas fa-bag-shopping text-white text-2xl"></i>
          </a>

          <!-- Tombol logout -->
          <a href="/">
            <button
              class="bg-[#4A2E0D] w-[124px] h-[46px] text-[18px] rounded-full transition-all duration-300 hover:bg-[#603913] hover:scale-105 hover:shadow-lg hover:text-yellow-200"
            >
              Logout
            </button>
          </a>
        </div>
      </nav>

      <div>
        <div
          class="h-[800px] text-white flex flex-col justify-center pl-[160px]"
          style="
            background-image: url('/public/img/bg.png');
            background-size: cover;
            background-position: center;
          "
        >
          <h2 class="text-[18px] font-semibold">Welcome to Coffe Shop!</h2>
          <h1 class="text-[52px] font-bold w-[690px] pt-[16px] pb-[32px]">
            We serve the richeast coffee in the city!
          </h1>
          <button
            class="w-[200px] h-[60px] text-[20px] font-semibold bg-white rounded-full text-black"
          >
            <a href="/OrderNow">Order Now</a>
          </button>
        </div>
      </div>
    </div>

    <div
      id="menu"
      class="flex justify-between items-center py-[35px] px-[250px] gap-[150px] bg-[#dedede]"
    >
      <div>
        <a href="#" class="flex flex-col items-center gap-2">
          <img src="/img/hot_coffe.png" class="w-[50px] h-[45px]" alt="hot coffe" />
          <p>Hot Coffe</p>
        </a>
      </div>
      <div>
        <a href="#" class="flex flex-col items-center gap-2">
          <img src="/img/iced_coffe.png" class="w-[50px] h-[45px]" alt="iced coffe" />
          <p>Iced Coffe</p>
        </a>
      </div>
      <div>
        <a href="#" class="flex flex-col items-center gap-2">
          <img src="/img/cup_coffe.png" class="w-[50px] h-[45px]" alt="cup coffe" />
          <p>Cup Coffe</p>
        </a>
      </div>
      <div>
        <a href="#" class="flex flex-col items-center gap-2">
          <img src="/img/cake.png" class="w-[50px] h-[45px]" alt="bakery" />
          <p>Bakery</p>
        </a>
      </div>
    </div>

    <div
      id="coffe"
      class="bg-[#E1D8C7] flex justify-center flex-col py-[52px] px-[180px] gap-[150px]"
    >
      <div class="flex gap-16 w-full max-w-[1200px]">
        <img
          src="/public/img/dalgona.png"
          alt="dalgona coffee"
          class="h-[450px] object-cover rounded-md shadow-md"
        />
        <div class="flex flex-col w-full">
          <div>
            <img src="/public/img/icon.png" class="h-[20px] w-[20px]" alt="icon" />
            <h2 class="font-semibold text-[42px]">Signature Menu</h2>
            <div class="flex justify-between pt-[10px]">
              <h3 class="text-[20px] font-bold">Dalgona Coffe</h3>
              <h3 class="text-[16px] font-semibold">Rp.138</h3>
            </div>
            <p class="text-[16px] text-[#838383]">whipped coffee mode using instant coffee</p>
            <p class="text-[14px] text-[#838383] mt-[10px]">620 kcal</p>
            <hr class="border-t border-dotted border-gray-400 mt-[25px] mb-[18px]" />
          </div>
          <div>
            <div class="flex justify-between">
              <h3 class="text-[20px] font-bold">Piccolo Latte</h3>
              <h3 class="text-[16px] font-semibold">Rp.159</h3>
            </div>
            <p class="text-[16px] text-[#838383]">
              Piccolo coffee has a taste that is not too sour
            </p>
            <p class="text-[14px] text-[#838383] mt-[10px]">420 kcal</p>
            <hr class="border-t border-dotted border-gray-400 mt-[25px]" />
          </div>
        </div>
      </div>
      <div class="flex gap-16 w-full max-w-[1200px]">
        <div class="flex flex-col w-full">
          <div>
            <img src="/public/img/icon.png" class="h-[20px] w-[20px]" alt="icon" />
            <h2 class="font-semibold text-[42px]">Recomended</h2>
            <div class="flex justify-between pt-[10px]">
              <h3 class="text-[20px] font-bold">Lungo Coffe</h3>
              <h3 class="text-[16px] font-semibold">Rp.99</h3>
            </div>
            <p class="text-[16px] text-[#838383]">
              A lungo is a long espresso with a milder taste.
            </p>
            <p class="text-[14px] text-[#838383] mt-[10px]">420 kcal</p>
            <hr class="border-t border-dotted border-gray-400 mt-[25px] mb-[18px]" />
          </div>
          <div>
            <div class="flex justify-between">
              <h3 class="text-[20px] font-bold">Iced Coffe</h3>
              <h3 class="text-[16px] font-semibold">Rp.99</h3>
            </div>
            <p class="text-[16px] text-[#838383]">Iced coffee is cold coffee with ice</p>
            <p class="text-[14px] text-[#838383] mt-[10px]">370 kcal</p>
            <hr class="border-t border-dotted border-gray-400 mt-[25px]" />
          </div>
        </div>
        <img
          src="/public/img/iced.png"
          alt="dalgona coffee"
          class="h-[450px] object-cover rounded-md shadow-md"
        />
      </div>
    </div>

    <div id="bakery" class="text-center width-full py-[90px] bg-[url('/img/bg_bakery.png')]">
      <h1 class="text-white text-[58px]">Bakery</h1>
    </div>
    <div class="bg-[#E1D8C7] flex justify-center flex-col py-[52px] px-[180px] gap-[150px]">
      <div class="flex gap-16 w-full max-w-[1200px]">
        <img
          src="/public/img/flaky_pastry.png"
          alt="dalgona coffee"
          class="h-[450px] object-cover rounded-md shadow-md"
        />
        <div class="flex flex-col w-full">
          <div>
            <img src="/public/img/icon.png" class="h-[20px] w-[20px]" alt="icon" />
            <h2 class="font-semibold text-[42px]">Starter Menu</h2>
            <div class="flex justify-between pt-[10px]">
              <h3 class="text-[20px] font-bold">Flaky Pastry</h3>
              <h3 class="text-[16px] font-semibold">Rp.69</h3>
            </div>
            <p class="text-[16px] text-[#838383]">Flaky pastry is known for its thin and crispy</p>
            <p class="text-[14px] text-[#838383] mt-[10px]">620 kcal</p>
            <hr class="border-t border-dotted border-gray-400 mt-[25px] mb-[18px]" />
          </div>
          <div>
            <div class="flex justify-between">
              <h3 class="text-[20px] font-bold">Puff Pastry</h3>
              <h3 class="text-[16px] font-semibold">Rp.49</h3>
            </div>
            <p class="text-[16px] text-[#838383]">
              Puff pastry is a light, flaky dough that puffs up when baked.
            </p>
            <p class="text-[14px] text-[#838383] mt-[10px]">420 kcal</p>
            <hr class="border-t border-dotted border-gray-400 mt-[25px]" />
          </div>
        </div>
      </div>
      <div class="flex gap-16 w-full max-w-[1200px]">
        <div class="flex flex-col w-full">
          <div>
            <img src="/public/img/icon.png" class="h-[20px] w-[20px]" alt="icon" />
            <h2 class="font-semibold text-[42px]">Main Course</h2>
            <div class="flex justify-between pt-[10px]">
              <h3 class="text-[20px] font-bold">Shortcrust Pastry</h3>
              <h3 class="text-[16px] font-semibold">Rp.99</h3>
            </div>
            <p class="text-[16px] text-[#838383]">whipped coffee mode using instant coffee</p>
            <p class="text-[14px] text-[#838383] mt-[10px]">420 kcal</p>
            <hr class="border-t border-dotted border-gray-400 mt-[25px] mb-[18px]" />
          </div>
          <div>
            <div class="flex justify-between">
              <h3 class="text-[20px] font-bold">Choux Pastry</h3>
              <h3 class="text-[16px] font-semibold">Rp.79</h3>
            </div>
            <p class="text-[16px] text-[#838383]">A French pastry dough that is unique for its</p>
            <p class="text-[14px] text-[#838383] mt-[10px]">370 kcal</p>
            <hr class="border-t border-dotted border-gray-400 mt-[25px]" />
          </div>
        </div>
        <img
          src="/public/img/shortcrust_pastry.png"
          alt="dalgona coffee"
          class="h-[450px] object-cover rounded-md shadow-md"
        />
      </div>
    </div>

    <div id="sponsor" class="flex items-center px-[150px] flex-col">
      <h2 class="text-[42px] font-semibold">We work with the best people</h2>
      <div class="flex py-[40px] flex-row gap-[80px]">
        <img
          src="/public/img/restaurant_sponsor.png"
          alt="restaurant sponsor"
          class="w-auto h-[120px]"
        />
        <img src="/public/img/bakery_sponsor.png" alt="bakery sponsor" class="w-auto h-[120px]" />
        <img src="/public/img/plate_sponsor.png" alt="plate sponsor" class="w-auto h-[120px]" />
        <img src="/public/img/coffe_sponsor.png" alt="coffe sponsor" class="w-auto h-[120px]" />
        <img src="/public/img/cake_sponsor.png" alt="cake sponsor" class="w-auto h-[120px]" />
      </div>
    </div>
  </div>

  <!-- Footer (tidak diubah) -->
    <footer class="bg-[#000000] text-white px-6 pt-10">
      <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <h3 class="font-bold mb-2">About Us</h3>
          <div>
            <p class="text-xs text-gray-400">
              Operate clients and leisure travelers has been relying on Groundlink for dependable,
              safe, and professional chauffeured car service in major cities across World.
            </p>

            <div class="flex items-center mt-4">
              <div class="bg-[#FF9F0D] w-16 h-16 flex items-center justify-center rounded">
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <div class="font-bold text-base text-[#FF9F0D]">Opening Hours</div>
                <div class="text-white text-sm leading-tight">
                  Mon - Sat (8.00 - 6.00)<br />
                  Sunday - Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-bold mb-2">Useful Links</h3>
          <ul class="space-y-1">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">Menu</a></li>
            <li><a href="#" class="hover:underline">Order</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold mb-2">Help?</h3>
          <ul class="space-y-1">
            <li><a href="#" class="hover:underline">FAQ</a></li>
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
            <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold mb-2">Dessert Post</h3>
          <div class="flex flex-col gap-2">
            <div class="flex items-center">
              <img src="/img/gambar1.jpg" class="rounded w-[100px] h-[86px] object-cover" />
              <div class="ml-[20px]">
                <span>Is fastfood good for your body?</span>
                <div class="text-xs text-gray-400 mt-1">February 28.2022</div>
              </div>
            </div>
            <div class="flex items-center">
              <img src="/img/gambar2.jpg" class="rounded w-[100px] h-[86px] object-cover" />
              <div class="ml-[20px]">
                <span>Changes your food habit with organic food</span>
                <div class="text-xs text-gray-400 mt-1">February 28.2022</div>
              </div>
            </div>
            <div class="flex items-center">
              <img src="/img/gambar3.jpg" class="rounded w-[100px] h-[86px] object-cover" />
              <div class="ml-[20px]">
                <span>Do you like fastfood for your life?</span>
                <div class="text-xs text-gray-400 mt-1">February 28.2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-[#7F6445] w-full py-5 px-3 text-center text-xs text-white mt-6 flex justify-between"
      >
        <p class="ml-[200px]">© 2025 Café de Aroma. All Rights Reserved</p>
        <div class="flex items-center space-x-3 mr-[240px]">
          <a href="#" class="hover:text-red-500" aria-label="YouTube">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-blue-600" aria-label="Facebook">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-blue-400" aria-label="Twitter">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.543.938-.856 2.021-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-pink-500" aria-label="Instagram">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-black" aria-label="TikTok"> </a>
        </div>
      </div>
          
    </footer>
</template>

<style>
@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
}
.animate-fadeInOut {
  animation: fadeInOut 2s ease forwards;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
}
.animate-fadeInOut {
  animation: fadeInOut 2s ease forwards;
}

/* Tambahkan ini untuk smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
