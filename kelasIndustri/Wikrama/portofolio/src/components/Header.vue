<script setup>

</script>

<template>
  <section class="h-screen bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 class="mb-4 mt-40 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{{ dataHome.title }}</h1>
      <p class="mb-8 mt-10 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{{ dataHome.description }}</p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['dataHome']
  }
</script>