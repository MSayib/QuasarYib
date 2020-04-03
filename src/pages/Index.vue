<template>
  <q-page class="q-pa-md">
    <q-list bordered>
      <q-item-label header>Hal yang harus dilakukan oleh Sayib</q-item-label>

      <q-item
        v-ripple
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{task.name}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <div class="row">
            <q-icon name="event" size="20px" />
            <div class="column">
              <q-item-label caption>{{task.dueDate}}</q-item-label>
              <small>{{task.dueTime}}</small>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
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
