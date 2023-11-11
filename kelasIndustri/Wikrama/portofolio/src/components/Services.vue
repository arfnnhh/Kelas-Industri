<script setup>
import ServiceCard from "@/components/ServiceCard.vue";
</script>

<template>
  <div class="bg-gray-100">
    <h2 class="title flex justify-center pt-20 text-black text-3xl md:text-5xl font-extrabold mb-2">Services</h2>
    <div class="flex justify-around items-center h-screen">
      <ServiceCard v-for="serviceItem in dataService" :key="serviceItem.id" :title="serviceItem.title" :price="serviceItem.price" :team="serviceItem.team" :cloud="serviceItem.cloud">
        <li class="flex space-x-3" :class="serviceItem.class > 3 ? 'line-through decoration-gray-500':''">
          <svg class="flex-shrink-0 w-4 h-4" :class="serviceItem.class > 3 ? 'text-gray-400 dark:text-gray-500' : 'text-blue-600 dark:text-blue-500'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
        </li>
        <li class="flex space-x-3" :class="serviceItem.class > 2 ? 'line-through decoration-gray-500':''">
          <svg class="flex-shrink-0 w-4 h-4" :class="serviceItem.class > 2 ? 'text-gray-400 dark:text-gray-500' : 'text-blue-600 dark:text-blue-500'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
        </li>
        <li class="flex space-x-3" :class="serviceItem.class > 2 ? 'line-through decoration-gray-500':''">
          <svg class="flex-shrink-0 w-4 h-4" :class="serviceItem.class > 2 ? 'text-gray-400 dark:text-gray-500' : 'text-blue-600 dark:text-blue-500'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
        </li>
        <li class="flex space-x-3" :class="serviceItem.class > 2 ? 'line-through decoration-gray-500':''">
          <svg class="flex-shrink-0 w-4 h-4" :class="serviceItem.class > 1 ? 'text-gray-400 dark:text-gray-500' : 'text-blue-600 dark:text-blue-500'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
        </li>
        <li class="flex space-x-3" :class="serviceItem.class > 2 ? 'line-through decoration-gray-500':''">
          <svg class="flex-shrink-0 w-4 h-4" :class="serviceItem.class > 1 ? 'text-gray-400 dark:text-gray-500' : 'text-blue-600 dark:text-blue-500'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
        </li>
      </ServiceCard>
    </div>
  </div>
</template>


<script>
export default {
  props: ['dataService']
}
</script>

<style scoped>
  .title {
    margin-bottom: -50px;
  }
</style>