<script setup>
import Card from '@/components/myComponents/Card.vue'
</script>

<template>
  <div class="flex justify-around items-center h-screen">
    <Card v-for="item in data" :title="item.title" :msg="item.msg">
      <p><strong>{{ item.date}}</strong></p>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        title: 'Anak Lorem',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias corporis deserunt earum exercitationem illum molestiae mollitia nemo, rem sint tenetur totam ut. Assumenda explicabo id sunt totam. Facere, nostrum!',
        date: '31/10/23'
      }, {
        title: 'Sepuh Lorem',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias corporis deserunt earum exercitationem illum molestiae mollitia nemo, rem sint tenetur totam ut. Assumenda explicabo id sunt totam. Facere, nostrum!',
        date: '31/10/23'
      }, {
        title: 'Fossil Lorem',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias corporis deserunt earum exercitationem illum molestiae mollitia nemo, rem sint tenetur totam ut. Assumenda explicabo id sunt totam. Facere, nostrum!',
        date: '31/10/23'
      }, {
        title: 'Dewa Lorem',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias corporis deserunt earum exercitationem illum molestiae mollitia nemo, rem sint tenetur totam ut. Assumenda explicabo id sunt totam. Facere, nostrum!',
        date: '31/10/23'
      }]
    }
  }
}
</script>