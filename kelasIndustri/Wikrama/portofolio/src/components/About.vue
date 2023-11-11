<script setup>

</script>

<template>

  <section class="h-screen mt-20 bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
        <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">{{ dataAbout.header }}</h1>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">{{ dataAbout.desc }}</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">{{ dataAbout.subheader }}</h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">{{ dataAbout.desc1 }}</p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">{{ dataAbout.subheader1}}</h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">{{ dataAbout.desc2 }}</p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  props: ['dataAbout']
}
</script>