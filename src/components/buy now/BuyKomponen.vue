<template>
  <div class="bg-[#F7EBD9] text-[#3E2E23] font-sans">
    <!-- Header -->
    <header class="bg-[#A98666] text-white py-4 px-6 flex justify-between items-center">
      <h1 class="text-lg font-bold">Café de Aroma</h1>
      <nav class="space-x-8 hidden md:flex">
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">Coffee</a>
        <a href="#" class="hover:underline">Bakery</a>
        <a href="#" class="hover:underline">About</a>
      </nav>
      <div class="flex items-center space-x-4">
        <button class="text-2xl">🛒</button>
        <button class="bg-[#5B3A1D] text-white px-4 py-1 rounded-full">Login</button>
      </div>
    </header>

    <!-- Product Detail -->
    <section class="px-6 py-8 max-w-6xl mx-auto">
      <button @click="goBack" class="text-sm mb-4 text-[#3A2E2A]">&larr; Back</button>

      <div class="flex flex-col md:flex-row gap-10">
        <img src="https://source.unsplash.com/400x500/?dalgona,coffee" class="w-full md:w-1/2 rounded-lg" alt="Dalgona Coffee" />

        <div class="md:w-1/2">
          <span class="bg-[#EEE1D0] text-xs px-2 py-1 rounded-full">Hot</span>
          <h2 class="text-3xl font-semibold mt-2">Dalgona Coffee</h2>
          <p class="text-sm text-[#7B6C60] mb-2">Iced coffee made using instant coffee</p>
          <p class="text-2xl font-bold text-[#3E2E23] mb-4">Rp.138</p>

          <div class="flex items-center gap-2 text-[#FFB800] mb-4">
            <span>★★★★★</span>
            <span class="text-sm text-[#7B6C60]">2 Review</span>
          </div>

          <div class="flex gap-4 mb-6">
            <button class="bg-[#A98666] text-white px-6 py-2 rounded">Buy Now</button>
            <button class="border border-[#A98666] px-6 py-2 rounded text-[#3E2E23]">Add to cart</button>
          </div>

          <div class="text-sm space-y-1 mb-6">
            <p>Add to Wishlist</p>
            <p>Category: Coffee</p>
            <p>Tags: Dalgona</p>
            <p>Share: 🌐 📘 🐦</p>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold mb-2">Description</h3>
        <p class="text-sm text-[#5A4E47] mb-4">
          Enjoy the creamy and sweet sensation of Dalgona Coffee, a contemporary coffee drink that will pamper your tongue. Made with a special blend, the soft dalgona foam blends perfectly with our specialty coffee.
        </p>

        <h4 class="font-semibold mb-2">Key Benefits</h4>
        <ul class="list-disc ml-5 text-sm text-[#5A4E47]">
          <li>Creamy and Soft Dalgona Foam</li>
          <li>Contemporary Coffee Separation</li>
          <li>Premium Ingredients, Special Taste</li>
          <li>Relax & Enjoy the Coffee Shop Atmosphere</li>
        </ul>
      </div>

      <!-- Similar Products -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold mb-4">Similar Products</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="item in similar" :key="item.name" class="bg-white p-2 rounded shadow">
            <img :src="item.image" :alt="item.name" class="rounded w-full h-32 object-cover" />
            <p class="text-sm font-semibold mt-2">{{ item.name }}</p>
            <p class="text-xs text-[#A98666]">Rp.{{ item.price }}</p>
          </div>
        </div>
      </div>
    </section>

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
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      similar: [
        {
          name: "Latte Macchiato",
          price: "120",
          image: "https://source.unsplash.com/200x200/?latte"
        },
        {
          name: "Cappuccino",
          price: "110",
          image: "https://source.unsplash.com/200x200/?cappuccino"
        },
        {
          name: "Espresso",
          price: "90",
          image: "https://source.unsplash.com/200x200/?espresso"
        },
        {
          name: "Mocha",
          price: "130",
          image: "https://source.unsplash.com/200x200/?mocha"
        }
      ]
    };
  },
  methods: {
    goBack() {
      window.history.back();
    }
  }
};
</script>
