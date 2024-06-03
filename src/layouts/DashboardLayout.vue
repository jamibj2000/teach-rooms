<template>
  <q-layout view="hHh lpR fFf" class="backdrop-background bg-dark">
    <section class="row flex-center bg-blue" style="height: 100vh">
      <div class="base-hex-container">

        <div class="base-hex hex-1"></div>
        <div class="base-hex hex-2"></div>
        <div class="base-hex hex-3"></div>

        <div class="base-hex"></div>

        <div class="base-hex hex-4"></div>
        <div class="base-hex hex-5"></div>
        <div class="base-hex hex-6"></div>

      </div>
    </section>

    <!-- <q-header elevated class="bg-dark text-white q-pa-md">
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
        class="row flex-center q-pa-sm bg-black"
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
              class="text-white bg-dark"
            >
              <q-card>
                <q-card-section class="text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        <q-btn label="Cerrar sesión" color="blue" class="text-black full-width" style="bottom: 0; position: absolute">
        </q-btn>
        </q-scroll-area>
      </q-drawer>
      <q-page-container style="background-color:(250, 250, 250, 0.5); height: 100vh; overflow-y: auto">
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container> -->
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
  // window.open("/", "_self");
});
</script>

<style>
  .base-hex-container{
    -webkit-user-drag: auto;
    position: relative;
    background: #112e5a;
  }

  .base-hex{
    width: 70px;
    height: 120px;
    background: black;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .base-hex:after{
    content: "";
    position: absolute;
    width: 70px;
    height: 120px;
    background: rgba(0, 0, 0);
    rotate: 120deg;
  }

  .base-hex:before{
    content: "";
    position: absolute;
    width: 70px;
    height: 120px;
    background: rgb(0, 0, 0);
    rotate: 60deg;
  }


  .hex-1{
    position: absolute;
  }

  .hex-2{
    position: absolute;
  }

  .hex-3{
    position: absolute;
  }

  .hex-4{
    position: absolute;
  }

  .hex-5{
    position: absolute;
  }

  .hex-6{
    position: absolute;
  }


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
  .q-drawer--left.q-drawer--bordered{
   border: transparent;
  }
</style>
