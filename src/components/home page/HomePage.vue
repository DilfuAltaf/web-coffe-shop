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
    }, 3000)

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

      <div id="menu" class="flex justify-between items-center py-[35px] px-[250px] gap-[150px] bg-[#dedede]">
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
              <p class="text-[16px] text-[#838383]">A lungo is a long espresso with a milder taste.</p>
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
