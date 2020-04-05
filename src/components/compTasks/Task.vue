<template>
  <!-- ini list hasil loopingannya -->
  <!-- <q-item-label
          header
          class="bg-indigo-5 text-grey-11"
          center
  >Hal yang harus dilakukan oleh Sayib</q-item-label>-->
  <!-- sebelumnya di q-item ada @click="task.completed = !task.completed" -->
  <q-item
    v-ripple
    @click="updateToDo({id: id, updates:{completed : !task.completed}})"
    :class="!task.completed ? 'bg-indigo-1' : 'bg-green-1'"
    clickable
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{'text-garis' : task.completed}">{{task.name}}</q-item-label>
    </q-item-section>
    <q-item-section side top v-if="task.dueDate">
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="20px" class="q-ar-xs" />
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">{{task.dueDate}}</q-item-label>
          <q-item-label caption class="row justify-end">
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side top>
      <q-btn @click.stop="moDiHapus(id)" flat round dense color="red" icon="delete" />
    </q-item-section>
  </q-item>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("storeTasks", ["updateToDo", "deleteToDo"]),
    moDiHapus(id) {
      this.$q
        .dialog({
          title: "Hapus",
          message: "Apakah Anda yakin?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteToDo(id);
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }
  }
};
</script>
<style lang="scss">
</style>