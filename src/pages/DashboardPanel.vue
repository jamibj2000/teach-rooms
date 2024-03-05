<template>
  <div class="">
    <q-dialog v-model="bar">
      <q-card>
        <q-bar>
          <div>{{ new Date().toLocaleString() }}</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="q-pa-md q-pt-lg">
          <b>
            {{ textDescription }}
          </b>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-card-section class=""> </q-card-section>
    <q-card-section class="row">
      <!-- <q-badge> Posición: 1 </q-badge>
      <q-badge> Puntuación: 100 </q-badge> -->
      <q-btn
        color="white"
        class="bg-primary q-px-lg q-py-sm col-12 col-md-3"
        label="UNIDADES"
        @click="roadMapActive = true"
        dense
        flat
      >
        <q-tooltip class="bg-white text-primary">Road map</q-tooltip>
      </q-btn>
      <q-badge class="q-pa-md q-mx-lg bg-accent col-12 col-md-3">
        <b>Bienvenido, {{ currentUser }} </b>
      </q-badge>
    </q-card-section>
    <q-table
      :dense="$q.screen.lt.md"
      flat
      bordered
      hide-header
      color="primary"
      title="Clases virtuales"
      :rows-per-page-options="[0]"
      :rows="rows"
      :columns="columns"
      row-key="videolink"
    >
      <template v-slot:body="props">
        <q-tr :props="props" class="q-tr q-my-lg">
          <q-td key="videolink" class="row q-my-sm" :props="props">
            <q-btn
              :disabled="props.row.videolink.active"
              :icon="props.row.videolink.active ? 'lock' : 'lock_open'"
              class="special-anchor col-12 col-md-6"
              :label="props.row.videolink.title"
              color="primary"
              @click="
                () => {
                  setVideoMaximized(props.row);
                  dialog = true;
                }
              "
            >
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <div class="q-gutter-sm">
      <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-primary text-white">
          <q-bar class="q-pa-lg">
            <q-space />
            <q-btn
              dense
              flat
              icon="close"
              color="white"
              class="bg-red q-pa-sm"
              v-close-popup
            >
              CERRAR
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section class="q-pt-none">
            <div class="q-pa-md">
              <div class="row">
                <iframe
                  :src="currentVideo"
                  frameborder="0"
                  allowfullscreen
                  class="embeded-video"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog
        v-model="roadMapActive"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-primary text-white">
          <q-bar class="q-pa-lg">
            <q-space />
            <q-btn
              dense
              flat
              icon="close"
              color="white"
              class="bg-red q-pa-sm"
              v-close-popup
            >
              CERRAR
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section class="q-pt-none row">
            <div class="q-pa-md col-md-4 col-12">
              <div class="q-pa-sm bg-white" style="max-width: 50vh">
                <q-list bordered class="rounded-borders">
                  <q-expansion-item
                    expand-separator
                    v-for="(item, index) in unidades"
                    :key="index"
                    dense-toggle
                    expand-icon-class="text-white"
                    class="text-white bg-accent"
                    :label="item.nombreUnidad"
                    :default-opened="index == 0 ? true : false"
                  >
                    <q-expansion-item
                      icon="receipt"
                      class="text-black bg-white row"
                      :label="item.subUnidad.nombreSubUnidad"
                      default-opened
                      dense-toggle
                    >
                      <q-card
                        class="q-pa-md text-red col-12 bg-amber"
                        v-for="(subitem, index) in item.subUnidad.actividades"
                        :key="index"
                      >
                        <q-icon name="mail" />
                        {{ subitem.title }}
                      </q-card>
                    </q-expansion-item>
                  </q-expansion-item>
                </q-list>
              </div>
            </div>
            <div
              class="q-pa-md col-md-7 col-12 q-mt-md text-black bg-white rounded-borders"
            >
              <div class="text-h6">
                <img src="" alt="" />
                {{ textDescription }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <LoginRoom />
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { onMounted, ref } from "vue";
import LoginRoom from "../components/LoginRoom.vue";
const dialog = ref(false);
const maximizedToggle = ref(true);
const roadMapActive = ref(false);
const bar = ref(false);
const currentUser = ref("Roler");
const textDescription = ref(`Las etiquetas HTML semánticas son etiquetas que definen el significado del contenido que engloban.
      Por ejemplo, etiquetas como <header>, <article> y <footer> son etiquetas HTML semánticas. Indican claramente la funcionalidad de su contenido.
      En cambio, etiquetas como <div> y <span> son ejemplos típicos de elementos HTML no semánticos. Aunque albergan contenido, no indican qué tipo de contenido contienen ni qué función desempeña esa pieza en la página.`);

const columns = [
  {
    name: "videolink",
    required: true,
    label: "Link del video",
    align: "left",
    field: (row) => row.videolink,
    format: (val) => `${val}`,
    sortable: true,
  },
];

const unidades = [
  {
    nombreUnidad: "Unidad I - Introducción a la programación",
    subUnidad: {
      nombreSubUnidad: "Semanticas de HTML5",
      actividades: [
        {
          link: "https://www.youtube.com/embed/V8oOQaVHDcw",
          title: "Semánticas de HTML5",
          active: false,
        },
        {
          link: "https://www.youtube.com/embed/V8oOQaVHDcw",
          title: "Semánticas de HTML5",
          active: false,
        },
      ],
    },
  },
  {
    nombreUnidad: "Unidad I - Introducción a la programación",
    subUnidad: {
      nombreSubUnidad: "Semanticas de HTML5",
      actividades: [
        {
          link: "https://www.youtube.com/embed/V8oOQaVHDcw",
          title: "Semánticas de HTML5",
          active: false,
        },
        {
          link: "https://www.youtube.com/embed/V8oOQaVHDcw",
          title: "Semánticas de HTML5",
          active: false,
        },
      ],
    },
  },
  {
    nombreUnidad: "Unidad I - Introducción a la programación",
    subUnidad: {
      nombreSubUnidad: "Semanticas de HTML5",
      actividades: [
        {
          link: "https://www.youtube.com/embed/V8oOQaVHDcw",
          title: "Semánticas de HTML5",
          active: false,
        },
        {
          link: "https://www.youtube.com/embed/V8oOQaVHDcw",
          title: "Semánticas de HTML5",
          active: false,
        },
      ],
    },
  },
];

const rows = ref([
  {
    videolink: {
      link: "https://www.youtube.com/embed/V8oOQaVHDcw",
      title: "Semánticas de HTML5",
      active: false,
    },
  },
  {
    videolink: {
      link: "https://www.youtube.com/embed/V8oOQaVHDcw",
      title: "Estilos CSS",
      active: true,
    },
  },
  {
    videolink: {
      link: "https://www.youtube.com/embed/V8oOQaVHDcw",
      title: "Validaciones de formualrios",
      active: true,
    },
  },
  // {
  //   videolink: {
  //     link: "https://www.youtube.com/embed/V8oOQaVHDcw",
  //     title: "Semánticas de HTML5",
  //     active: true,
  //   },
  // },
  // {
  //   videolink: {
  //     link: "https://www.youtube.com/embed/V8oOQaVHDcw",
  //     title: "Semánticas de HTML5",
  //     active: true,
  //   },
  // },
]);

const columnsF = [
  {
    name: "videolink",
    required: true,
    label: "Link del video",
    align: "left",
    field: (row) => row.videolink,
    format: (val) => `${val}`,
    sortable: true,
  },
];

const rowsF = ref([
  {
    videolink: {
      link: "https://www.youtube.com/embed/V8oOQaVHDcw",
      title: "UNIDAD 1: Semánticas de HTML5",
      segmentDescription: `Las etiquetas HTML semánticas son etiquetas que definen el significado del contenido que engloban.
      Por ejemplo, etiquetas como <header>, <article> y <footer> son etiquetas HTML semánticas. Indican claramente la funcionalidad de su contenido.
      En cambio, etiquetas como <div> y <span> son ejemplos típicos de elementos HTML no semánticos. Aunque albergan contenido, no indican qué tipo de contenido contienen ni qué función desempeña esa pieza en la página.`,
    },
  },
  // {
  //   videolink: "Ice cream sandwich",
  // },
  // {
  //   videolink: "Eclair",
  // },
  // {
  //   videolink: "Cupcake",
  // },
  // {
  //   videolink: "Gingerbread",
  // },
]);

const currentVideo = ref("https://www.youtube.com/embed/WIsjE1RzKNo");
const currentVideoTitle = ref("Animacion 2D");

function setVideoMaximized(rowData) {
  currentVideo.value = rowData.videolink.link;
  currentVideoTitle.value = rowData.videolink.title;
}

onMounted(() => {
  if (!localStorage.cleaned) {
    Swal.fire({
      icon: "info",
      title: "Actualización pendiente",
      text: "¡El aplicativo está actualizando sus servicios!",
      showConfirmButton: false,
      timer: 4500,
    }).then((result) => {
      localStorage.setItem("username", "");
      localStorage.setItem("cleaned", "false");
      location.reload();
    });
  }
  rows.value = [];
  currentUser.value = localStorage.getItem("username") || null;
  if (currentUser.value) {
    Swal.fire({
      icon: "info",
      title: "No hay permisos",
      text: "¡No tienes permisos para acceder a los recursos de esta sección!",
      showConfirmButton: false,
      timer: 4500,
      willClose: () => {
        dialog.value = false;
      },
    });
  }
});
</script>
