<template>
  <div>
    <input type="text" placeholder="masukan nama" v-model="formDataKelas.nama">
    <br>
    <input type="text" placeholder="masukan kelas" v-model="formDataKelas.kelas">
    <br>
    <button @click="tambahKelas">Tambah</button>

    <table>
      <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Kelas</th>
      </tr>
      <tr v-for="(murid, index) in dataKelas" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ murid.nama }}</td>
        <td>{{ murid.kelas }}</td>
        <td><button @click="hapusDataKelas(murid.id)">Hapus</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataKelas: [{
        nama: 'Ujang',
        kelas: 11
      }],
      formDataKelas: {
        nama: '',
        kelas: ''
      }
    }
  }, methods: {
    tambahKelas() {
      this.formDataKelas.id = Date.now();
      this.dataKelas.push(this.formDataKelas);
      this.formDataKelas = {
        nama: '',
        kelas: ''
      }
    },
    hapusDataKelas(id) {
      this.dataKelas = this.dataKelas.filter(item =>  item.id != id);
    }
  }
}
</script>