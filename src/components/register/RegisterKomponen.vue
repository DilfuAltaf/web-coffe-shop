<template>
  <div class="relative h-screen w-screen flex" style="background-color: #E3D7C7">
    <div class="flex flex-col gap-6 p-8 mr-95" style="width: 487px">
      <div class="text-black font-bold text-xl mb-4">Café de Aroma</div>

      <form @submit.prevent="handleSubmit" class="space-y-4 ">
        <h1 class="text-3xl font-bold text-[#7F6445]">Register</h1>

        <input
          v-model="fullName"
          type="text"
          placeholder="Full Name"
          class="rounded-lg bg-[#e9dac6] border border-gray-300 text-black placeholder:text-gray-600 focus:outline-none px-4 "
          style="width: 487px; height: 93px"
          required
        />
        <input
          v-model="email"
          type="email"
          placeholder="Enter your Email"
          class="rounded-lg bg-[#e9dac6] border border-gray-300 text-black placeholder:text-gray-600 focus:outline-none px-4"
          style="width: 487px; height: 93px"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Enter your Password"
          class="rounded-lg bg-[#e9dac6] border border-gray-300 text-black placeholder:text-gray-600 focus:outline-none px-4"
          style="width: 487px; height: 93px"
          required
        />
        <button
          type="submit"
          class="bg-[#7F6445] text-white rounded-lg font-semibold hover:bg-[#6a5438] transition"
          style="width: 487px; height: 50px"
        >
          Register
        </button>

        <div class="flex justify-center gap-4 mt-6">
          <button @click="loginWith('Google')" type="button" aria-label="Login with Google">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              class="w-10 h-10 bg-[#f4e9da] rounded-lg p-2"
              alt="Google logo"
            />
          </button>
          <button @click="loginWith('Apple')" type="button" aria-label="Login with Apple">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733614.png"
              class="w-10 h-10 bg-[#f4e9da] rounded-lg p-2"
              alt="Apple logo"
            />
          </button>
          <button @click="loginWith('Facebook')" type="button" aria-label="Login with Facebook">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              class="w-10 h-10 bg-[#f4e9da] rounded-lg p-2"
              alt="Facebook logo"
            />
          </button>
          <button @click="loginWith('X')" type="button" aria-label="Login with X">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
              class="w-10 h-10 bg-[#f4e9da] rounded-lg p-2"
              alt="X logo"
            />
          </button>
        </div>
      </form>
    </div>

    <div class="w-full items-end justify-end h-full">
      <img
        src="/img/coffe.jpg"
        alt="Decorative"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log('Form Submitted:', fullName.value, email.value, password.value)
}

const loginWith = (provider) => {
  console.log(`Login with ${provider}`)
}
</script>

<style scoped>
.social-icon {
  width: 48px;
  height: 48px;
  padding: 8px;
  background-color: #f4e9da;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.social-icon:hover {
  transform: scale(1.05);
}
</style>
