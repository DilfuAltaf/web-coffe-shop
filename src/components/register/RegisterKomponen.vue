<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const fullName = ref('')
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const showPassword = ref(false)

const handleSubmit = async () => {
  isLoading.value = true

  // Simulasi proses loading, misal 2 detik
  await new Promise(resolve => setTimeout(resolve, 2000))

  const userData = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  }

  const users = JSON.parse(localStorage.getItem('users')) || []
  users.push(userData)
  localStorage.setItem('users', JSON.stringify(users))

  alert('Register Berhasil! Silakan masuk untuk melanjutkan.')

  isLoading.value = false
  router.push('/')
}

const loginWith = (provider) => {
  console.log(`Login with ${provider}`)
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="bg-[#E3D7C7] text-[#4A2E0D] w-full h-screen flex">
    <!-- Kiri: Form Register -->
    <div class="flex flex-col w-[50%]">
      <h1 class="font-bold pt-[36px] pl-[48px]">Café de Aroma</h1>
      <div class="ml-[162px] flex flex-col">
        <h2 class="font-semibold text-[50px] mt-10 text-[#7F6445]">Register</h2>

        <form @submit.prevent="handleSubmit" class="flex flex-col gap-[30px] mt-[30px] w-full">
          <input
            v-model="fullName"
            type="text"
            placeholder="Full Name"
            class="w-[485px] h-[70px] rounded-[12px] px-4 bg-[#e9dac6] border border-gray-300 text-black placeholder:text-gray-600 focus:outline-none"
            required
          />
          <input
            v-model="email"
            type="email"
            placeholder="Enter your Email"
            class="w-[485px] h-[70px] rounded-[12px] px-4 bg-[#e9dac6] border border-gray-300 text-black placeholder:text-gray-600 focus:outline-none"
            required
          />
          <!-- Password input dengan toggle -->
          <div class="relative w-[485px]">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your Password"
              class="w-full h-[70px] rounded-[12px] px-4 bg-[#e9dac6] border border-gray-300 text-black placeholder:text-gray-600 focus:outline-none pr-12"
              required
            />
            <button
              type="button"
              @click="togglePassword"
              class="absolute top-1/2 right-4 -translate-y-1/2 text-[#4A2E0D] hover:text-[#7F6445]"
              aria-label="Toggle password visibility"
            >
              <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <!-- Icon mata tertutup -->
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.966 9.966 0 013.055-7.01m1.645 1.648A7.955 7.955 0 0112 5c2.21 0 4.207.896 5.655 2.352M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <!-- Icon mata terbuka -->
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-[485px] h-[70px] text-[24px] bg-[#7F6445] rounded-[12px] text-white hover:bg-[#6e5438] transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <template v-if="!isLoading">
              Submit
            </template>
            <template v-else>
              <svg
                class="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Loading...
            </template>
          </button>
        </form>
      </div>
      <div class="flex justify-center gap-4 mt-6">
        <button
          @click="loginWith('Google')"
          type="button"
          aria-label="Login with Google"
          class="w-10 h-10 bg-[#f4e9da] rounded-lg p-2"
        >
          <i class="fa-brands fa-google"></i>
        </button>
        <button
          @click="loginWith('Apple')"
          type="button"
          aria-label="Login with Apple"
          class="w-10 h-10 bg-[#f4e9da] rounded-lg p-2"
        >
          <i class="fa-brands fa-instagram"></i>
        </button>
        <button
          @click="loginWith('Facebook')"
          type="button"
          aria-label="Login with Facebook"
          class="w-10 h-10 bg-[#f4e9da] rounded-lg p-2"
        >
          <i class="fa-brands fa-facebook"></i>
        </button>
        <button
          @click="loginWith('X')"
          type="button"
          aria-label="Login with X"
          class="w-10 h-10 bg-[#f4e9da] rounded-lg p-2"
        >
          <i class="fa-brands fa-twitter"></i>
        </button>
      </div>
      <div class="text-center mt-4 text-sm">
        Already have an account?
        <a href="/" class="hover:underline font-semibold">Login</a>
      </div>
    </div>

    <div
      class="w-[50%] h-full flex justify-end bg-cover bg-center bg-[url('/img/coffe.jpg')] bg-cover bg-center"
    ></div>
  </div>
</template>
