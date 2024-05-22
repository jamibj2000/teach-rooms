<template>
  <q-layout view="hHh lpR fFf" class="backdrop-background bg-accent">
    <q-header elevated class="bg-cyan text-white">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>
            LinkAnimus - Participante: Jamiel J.
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="250"
        :breakpoint="500"
        class="row flex-center q-pa-sm"
        bordered>
        <q-scroll-area class="fit">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              v-for="(item, index) in menuList" :key="index"
              expand-separator
              :icon="item.icon"
              :label="item.name"
              :header-inset-level="0"
              :default-opened="index == 0 ? true : false"
              expand-icon-class="text-dark"
              class="text-white bg-accent"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        <q-btn label="Cerrar sesión" color="red" class=" full-width" style="bottom: 0; position: absolute">
        </q-btn>
        </q-scroll-area>
      </q-drawer>
      <q-page-container style="background-color:(250, 250, 250, 0.5); height: 100vh; overflow-y: auto">
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
</template>
<script setup>
import { ref, onMounted, defineProps } from "vue";
import { api } from "src/boot/axios";
import Swal from "sweetalert2";
const rightDrawerOpen = ref(false)
const menuList = ref([
  {
    name: "Clases",
    icon: "room",
    link: "/",
    subList : [
      {
        name: "Clase 1",
        link: "/",
      },
      {
        name: "Clase 2",
        link: "/",
      }
    ]
  },
  {
    name: "Material de estudio",
    icon: "book",
    link: "/",
    subList : []
  },
  {
    name: "Home",
    icon: "home",
    link: "/",
    subList : []
  },
])
const drawer = ref(false)

function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

onMounted(() => {
  window.open("/", "_self");
});
</script>

<style>
  .backdrop-background {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: saturate(800%) blur(4px) brightness(0%);
    animation: backdrop-iluminate 8.5s ease-in-out infinite;
  }
  @keyframes backdrop-iluminate {
    0% {
      backdrop-filter: saturate(0%) blur(0px) brightness(20%);
    }
    50% {
      backdrop-filter: saturate(800%) blur(4px) brightness(120%);
    }
    100% {
      backdrop-filter: saturate(0%) blur(0px) brightness(20%);
    }
  }
</style>
