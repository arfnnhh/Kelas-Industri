<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 hover:p-7 transition-all delay-200">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ title }}</h5>
      <p class="font-normal text-gray-700">{{ msg }}</p>
      <br>
      <div class="inline-flex">
        <myBtn btnVal="Tekan"></myBtn>
        <slot></slot>
      </div>
    </div>
</template>