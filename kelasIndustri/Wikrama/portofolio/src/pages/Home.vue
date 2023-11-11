<script setup>
  import Header from '@/components/Header.vue'
  import Services from '@/components/Services.vue'
  import About from '@/components/About.vue'
  import Portofolio from "@/components/Portofolio.vue";
  import Blog from "@/components/Blog.vue";
</script>

<template>
  <Header :dataHome="DataHome"></Header>
  <About :dataAbout="DataAbout"></About>
  <Services :dataService="DataService"></Services>
  <Portofolio :dataPort="DataPort"></Portofolio>
  <Blog></Blog>
</template>

<script>
import {Get} from "@/Api/index";

export default {
  data() {
    return {
      DataHome: [],
      DataService: [],
      DataAbout: [],
      DataPort: [],
    }
  },
  async created() {
    const homeResponse = await Get('http://127.0.0.1:8000/api/home');
    this.DataHome = homeResponse.data;

    const serviceResponse = await Get('http://127.0.0.1:8000/api/services');
    this.DataService = serviceResponse.data;

    const aboutResponse = await Get('http://127.0.0.1:8000/api/about');
    this.DataAbout = aboutResponse.data;

    const portResponse = await Get('http://127.0.0.1:8000/api/portofolio');
    this.DataPort = portResponse.data;
  }
}

</script>