<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="absolute-center">Aplikasi To Do</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :icon="nav.icon"
          :to="nav.to"
          :label="nav.label"
          exact
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      :breakpoint="767"
      :width="250"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigasi</q-item-label>
        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable
          class="text-grey-4"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item to="/settings" exact clickable>
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Pengaturan</q-item-label>
        </q-item-section>
        </q-item>-->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: "Todo",
          icon: "list",
          to: "/"
        },
        {
          label: "Pengaturan",
          icon: "settings",
          to: "/settings"
        },
        {
          label: "About",
          icon: "info",
          to: "/about"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-drawer {
  .q-router-link-exact-active {
    color: white !important;
  }
}
</style>
