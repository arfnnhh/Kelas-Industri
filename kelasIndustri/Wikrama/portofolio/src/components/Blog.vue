<script setup>

import BlogCard from "@/components/BlogCard.vue";
</script>

<template>
  <div class="bg-gray-100">
    <h2 class="title flex justify-center pt-20 text-black text-3xl md:text-5xl font-extrabold mb-2" >Blog</h2>
    <div class="flex justify-around items-center h-screen">
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: -100px;
}
</style>