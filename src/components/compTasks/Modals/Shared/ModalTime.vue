<template>
  <div class="row q-mb-sm" v-if="dueDate">
    <q-input outlined :value="dueTime" label="Pilih waktu" class="col">
      <template v-slot:append>
        <q-icon
          v-if="dueTime"
          @input="$emit('update:dueTime', $event)"
          name="close"
          @click="$emit('update:dueTime', '')"
          class="cursor-pointer"
        />
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time :value="dueTime" @input="$emit('update:dueTime', $event)" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["dueTime", "dueDate"]
};
</script>

<style>
</style>