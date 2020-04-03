<template>
  <q-page class="q-pa-md">
    <q-list separator bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        label="M Sayib"
        caption="Hal yang harus dilakukan"
        class="bg-indigo-2"
        v-model="expanded"
      >
        <potTask v-for="(task, key) in dataToDo" :key="key" :task="task" :id="key"></potTask>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("storeTasks", ["dataToDo"])
    // yg di komen ini cara ke 2, tanpa perlu import, harus disesuaikan juga nama variabel dengan loopingnya
    // variabel dataToDo() untuk looping, sedangkan yg didalem array itu dataToDo nama variabel pada getters
    // dataToDo() {
    //   return this.$store.getters["dataToDo/tasks"];
    // }
  },
  components: {
    potTask: require("components/compTasks/Task").default
  },
  data() {
    return {
      expanded: true
      // tasks: [
      //   {
      //     id: 1,
      //     name: "Sarapan",
      //     completed: false,
      //     dueDate: "2020/04/03",
      //     dueTime: "08:30"
      //   },
      //   {
      //     id: 2,
      //     name: "Mandi",
      //     completed: false,
      //     dueDate: "2020/04/03",
      //     dueTime: "09:00"
      //   },
      //   {
      //     id: 3,
      //     name: "Belajar",
      //     completed: false,
      //     dueDate: "2020/04/03",
      //     dueTime: "10:00"
      //   }
      // ]
    };
  }
};
</script>
<style lang="scss">
</style>
