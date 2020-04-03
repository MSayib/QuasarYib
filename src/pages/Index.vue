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
        <!-- <q-item-label
          header
          class="bg-indigo-5 text-grey-11"
          center
        >Hal yang harus dilakukan oleh Sayib</q-item-label>-->

        <q-item
          v-ripple
          v-for="task in tasks"
          :key="task.id"
          @click="task.completed = !task.completed"
          :class="!task.completed ? 'bg-indigo-1' : 'bg-green-1'"
          clickable
        >
          <q-item-section side top>
            <q-checkbox v-model="task.completed" />
          </q-item-section>

          <q-item-section>
            <q-item-label :class="{'text-garis' : task.completed}">{{task.name}}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <div class="row">
              <div class="column justify-top">
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
        </q-item>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      expanded: true,
      tasks: [
        {
          id: 1,
          name: "Sarapan",
          completed: false,
          dueDate: "2020/04/03",
          dueTime: "08:30"
        },
        {
          id: 2,
          name: "Mandi",
          completed: false,
          dueDate: "2020/04/03",
          dueTime: "09:00"
        },
        {
          id: 3,
          name: "Belajar",
          completed: false,
          dueDate: "2020/04/03",
          dueTime: "10:00"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
</style>
