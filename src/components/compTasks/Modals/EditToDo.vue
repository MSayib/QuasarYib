<template>
  <!-- ini modal -->
  <!-- name.sync digunakan untuk membuat si komponen dapat terhubung dengan simpanData yang ada disini -->
  <q-card>
    <ModalHeader>Edit Task</ModalHeader>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <ModalToDoName :name.sync="simpanData.name" ref="ModalToDoName"></ModalToDoName>
        <ModalDate :dueDate.sync="simpanData.dueDate" @clear="clearDueDate"></ModalDate>
        <ModalTime :dueTime.sync="simpanData.dueTime" :dueDate.sync="simpanData.dueDate"></ModalTime>
      </q-card-section>
      <ModalButtons></ModalButtons>
      <!-- <pre>{{simpanData}}</pre> INI SYNTAX UNTUK MENGUJI ISI FORM APAKAH SUDAH TERHUBUNG DENGAN KOMPONEN DENGAN BAIK DAN BENAR -->
    </form>
  </q-card>
</template>
<script>
import { mapActions } from "vuex";
import ModalHeader from "components/compTasks/Modals/Shared/ModalHeader";
import ModalToDoName from "components/compTasks/Modals/Shared/ModalToDoName";
import ModalDate from "components/compTasks/Modals/Shared/ModalDate";
import ModalTime from "components/compTasks/Modals/Shared/ModalTime";
import ModalButtons from "components/compTasks/Modals/Shared/ModalButtons";

export default {
  props: ["task", "id"],
  components: {
    ModalHeader,
    ModalToDoName,
    ModalDate,
    ModalTime,
    ModalButtons
  },
  data() {
    return {
      simpanData: {}
    };
  },
  methods: {
    ...mapActions("storeTasks", ["updateToDo"]),
    submitForm() {
      // this.$refs.name.validate(); sebelumnya jadi refs.ModalToDoName.refs.name karna sudah dipindahkan menjadi komponen
      this.$refs.ModalToDoName.$refs.name.validate();
      if (!this.$refs.ModalToDoName.$refs.name.hasError) {
        this.submitData();
      }
    },
    submitData() {
      this.updateToDo({
        id: this.id,
        updates: this.simpanData
      });
      this.$emit("tutupModal");
    },
    clearDueDate() {
      this.simpanData.dueDate = "";
      this.simpanData.dueTime = "";
    }
  },
  mounted() {
    this.simpanData = Object.assign({}, this.task);
  }
};
</script>