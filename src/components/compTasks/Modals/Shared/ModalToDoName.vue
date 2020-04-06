<template>
  <!-- ketika digunakan sebagai komponen yang dapat dipakai kembali, ubah v-model menjadi value, yang dijadikan props untuk dihubungkan dengan halaman yg akan memakainya -->
  <!-- ubah semua yang menggunakan simpanData.name menjadi name (nama dari props) -->
  <div class="row q-mb-sm">
    <q-input
      outlined
      autofocus
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      label="Nama Kegiatan"
      class="col"
      ref="name"
    >
      <template v-slot:append>
        <q-icon v-if="name" name="close" @click="$emit('update:name', '')" class="cursor-pointer" />
        <!-- $emit('update:name', '') digunakan untuk memberikan fungsi clear dari komponen untuk digunakan pada yang menggunakan -->
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style>
</style>