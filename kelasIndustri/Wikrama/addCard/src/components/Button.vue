<script setup>
defineProps({
  btnVal: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button type="button" class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">{{ btnVal }}</button>
</template>
