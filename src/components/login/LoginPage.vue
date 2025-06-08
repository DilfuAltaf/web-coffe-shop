<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const showPassword = ref(false)

const handleLogin = () => {
  loading.value = true
  setTimeout(() => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find((u) => u.email === email.value && u.password === password.value)
    if (user) {
      error.value = ''
      router.push('/home')
    } else {
      error.value = 'Email atau password salah'
    }
    loading.value = false
  }, 1000)
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="bg-[#E3D7C7] text-[#4A2E0D] w-full h-screen flex">
    <div class="flex flex-col w-[50%]">
      <h1 class="font-bold pt-[36px] pl-[48px]">Café de Aroma</h1>
      <div class="ml-[162px] flex flex-col">
        <h2 class="font-semibold text-[50px] mt-10">Welcome Back</h2>
        <h3 class="text-[28px] mt-2">Join and get 10% off Your first order!</h3>
        <form @submit.prevent="handleLogin" class="flex flex-col gap-[30px] mt-[50px] w-full">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your Email"
            class="w-[485px] h-[70px] rounded-[12px] px-4 bg-[#e9dac6] border border-gray-300 text-black placeholder:text-gray-600 focus:outline-none"
            required
          />

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
              class="absolute top-1/2 right-4 -translate-y-1/2 text-[#4A2E0D] hover:text-[#7F6445]"
              @click="togglePassword"
              aria-label="Toggle password visibility"
            >
              <i v-if="showPassword" class="fa-regular fa-eye-slash text-xl"></i>
              <i v-else class="fa-regular fa-eye text-xl"></i>
            </button>
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
            type="submit"
            class="w-[485px] h-[70px] text-[24px] bg-[#7F6445] rounded-[12px] mt-[20px] text-white hover:bg-[#6e5438] transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <template v-if="!loading"> Login </template>
            <template v-else>
              <svg
                class="animate-spin h-6 w-6 text-white"
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
            </template>
          </button>

          <div v-if="error" class="text-red-600 mt-2">{{ error }}</div>
        </form>
      </div>
      <div class="text-center mt-4 text-sm">
        Don't have an account?
        <a href="/register" class="hover:underline font-semibold">Register</a>
      </div>
    </div>
    <div
      class="w-[50%] h-full flex justify-end bg-[url('/img/coffe.jpg')] bg-cover bg-center"
    ></div>
  </div>
</template>
