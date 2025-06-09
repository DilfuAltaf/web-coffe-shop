<script setup>
  defineProps({
    placeholder: {
      type: String,
      default: 'Enter your Email'
    },
    input: {
      type: String,
      default: 'email'
    }
  })
</script>

<template>
    <input
      :type="input"
      :placeholder="placeholder"
      class="border border-opacity-50 w-[485px] h-[70px] rounded-[12px] pl-[22px] font-regular placeholder:text-[#4A2E0D] bg-[#ab8b7e5a] text-[24px] placeholder:opacity-50"
    />
</template>
