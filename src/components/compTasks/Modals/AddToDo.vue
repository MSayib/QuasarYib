<template>
  <!-- ini modal -->
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Tambah Kegiatan</div>
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            outlined
            autofocus
            v-model="simpanData.name"
            :rules="[val => !!val || 'Field is required']"
            label="Nama Kegiatan"
            class="col"
            ref="name"
          >
            <template v-slot:append>
              <q-icon
                v-if="simpanData.name"
                name="close"
                @click="simpanData.name = ''"
                class="cursor-pointer"
              />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input outlined v-model="simpanData.dueDate" label="Pilih tanggal">
            <template v-slot:append>
              <q-icon
                v-if="simpanData.dueDate"
                name="close"
                @click="clearDueDate"
                class="cursor-pointer"
              />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="simpanData.dueDate" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm" v-if="simpanData.dueDate">
          <q-input outlined v-model="simpanData.dueTime" label="Pilih waktu" class="col">
            <template v-slot:append>
              <q-icon
                v-if="simpanData.dueTime"
                name="close"
                @click="simpanData.dueTime = ''"
                class="cursor-pointer"
              />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="simpanData.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Simpan" color="primary" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      simpanData: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("storeTasks", ["addToDo"]),
    submitForm() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitData();
      }
    },
    submitData() {
      this.addToDo(this.simpanData);
      this.$emit("tutupModal");
    },
    clearDueDate() {
      this.simpanData.dueDate = "";
      this.simpanData.dueTime = "";
    }
  }
};
</script>