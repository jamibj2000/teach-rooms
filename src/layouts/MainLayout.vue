<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn flat dense round aria-label="Menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title> Linkanimus </q-toolbar-title>

        <q-btn dense flat icon="logout" @click="logout()">
          <q-tooltip>Logout</q-tooltip>
        </q-btn>
        <!-- <div>linkanimus v{{ version }}</div> -->
      </q-toolbar>
    </q-header>
    <q-card-section>
      <DashboardPanel />
    </q-card-section>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <!-- <router-view /> -->
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Swal from "sweetalert2";
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import DashboardPanel from "../pages/DashboardPanel.vue";
const version = ref("1.0.0");

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

function logout() {
  localStorage.clear();
  Swal.fire({
    icon: "success",
    title: "Logout exitoso",
    text: "Sesión cerrada con exito",
    showConfirmButton: false,
    timer: 1500,
    willClose: () => {
      location.reload();
    },
  }).then((result) => {
    location.reload();
  });
}
</script>
