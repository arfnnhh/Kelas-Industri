<script setup>
import PortofolioCard from "@/components/PortofolioCard.vue";
</script>

<template>
  <div>
    <h2 class="title flex justify-center pt-20 text-black text-3xl md:text-5xl font-extrabold mb-2" >Our Work</h2>
    <div class="flex justify-around items-center h-screen">
      <PortofolioCard v-for="port in dataPort" :key="dataPort.id" :header="port.header" :desc="port.desc" :img="port.img"></PortofolioCard>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataPort']
}
</script>

<style scoped>
.title {
  margin-bottom: -100px;
}
</style>