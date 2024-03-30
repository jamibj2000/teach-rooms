<template>
  <div class="">
    <MaterialEstudio :mDialog="materialDialog" :closeDialogMaterial="closeDialog" />

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
      <!-- <img :src="ruta + '/material_1.png'" alt="" /> -->
      <!-- <q-badge> Posición: 1 </q-badge>
      <q-badge> Puntuación: 100 </q-badge> -->
      <!-- <q-btn
        color="white"
        class="bg-primary q-px-lg q-py-sm col-12 col-md-3"
        label="UNIDADES"
        @click="roadMapActive = true"
        dense
        flat
      >
        <q-tooltip class="bg-white text-primary">Road map</q-tooltip>
      </q-btn> -->
      <q-card class="q-pa-md bg-light col-12 col-md-10 row g-2">
        <q-badge class="q-pa-md bg-dark col-12 col-md-5 row flex-center">
          <b>{{ currentUser ? `Bienvenido, ${currentUser}` : "" }} </b>
        </q-badge>
        <!-- <q-badge class="q-pa-md bg-dark col-12 col-md-5 row flex-center">
          <q-icon
            name="circle"
            size="x"
            :color="!activeClass ? 'green' : 'red'"
            class="q-mr-sm"
            style="
              border: 2px solid white;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          />
          <b class="text-center">
            <q-badge v-if="!activeClass" class="q-pa-sm bg-white text-accent">
              {{ `Link de la clase:` }}
              <span class="text-bold">{{ classLink }}</span>
            </q-badge>
            <q-badge v-else class="q-pa-sm bg-accent"> SALA DE CLASES INACTIVA </q-badge>
          </b>
        </q-badge> -->
      </q-card>
    </q-card-section>
    <!-- <q-card>
      <q-card-section>
        <input
          :disabled="classActiveInputs"
          type="text"
          v-model="classLinkUpload"
          placeholder="Link de la clase"
        />
        <input
          :disabled="classActiveInputs"
          type="text"
          v-model="classNameUpload"
          placeholder="Nombre de la clase"
        />
        <q-btn
          :disabled="classActiveInputs"
          color="white"
          class="bg-primary q-ml-lg q-px-lg q-py-sm col-12 col-md-3"
          label="Linkear clase"
          @click="uploadClasslink()"
          dense
          flat
        >
          <q-tooltip>Linkear clase</q-tooltip>
        </q-btn>
        <q-btn
          color="white"
          class="bg-red q-mx-lg q-px-lg q-py-sm col-12 col-md-3"
          label="Terminar clase"
          @click="terminateClasslink()"
          dense
          flat
        >
          <q-tooltip>Linkear clase</q-tooltip>
        </q-btn>
      </q-card-section>
    </q-card> -->
    <!-- <q-expansion-item
      expand-separator
      dense-toggle
      expand-icon-class="text-dark"
      class="text-dark text-bold bg-amber"
      :label="'HISTORICOS'"
      :default-opened="false"
    >
      <q-table
        dense
        bordered
        color="primary"
        :rows-per-page-options="[0]"
        :rows="rowsHistoric"
        :columns="columnsHistoric"
        row-key="id"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <q-card v-if="col.name != 'bestScore'">
                <q-card-section>{{ col.value }}</q-card-section>
              </q-card>

              <q-card v-else>
                <q-card-section class="row">
                  <q-badge
                    class="q-pa-sm q-mx-sm"
                    v-for="(col, index) in col.value"
                    :key="col.value"
                  >
                    {{ col.user_name }}
                    <span
                      :class="
                        index == 0 ? 'bg-warning text-accent' : 'bg-white text-accent'
                      "
                      class="q-mx-sm q-pa-sm rounded-borders"
                      >{{ col.score }}</span
                    >
                  </q-badge>
                </q-card-section>
              </q-card>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-expansion-item> -->
    <q-expansion-item
      expand-separator
      dense-toggle
      expand-icon-class="text-dark"
      class="text-dark text-bold bg-amber"
      :label="'UNIDADES'"
      :default-opened="true"
    >
      <q-expansion-item
        expand-separator
        dense-toggle
        :header-inset-level="1"
        :content-inset-level="2"
        expand-icon-class="text-dark"
        class="text-dark bg-white"
        :label="'Unidad I'"
        :default-opened="true"
      >
        <q-expansion-item
          expand-separator
          dense-toggle
          :header-inset-level="1"
          :content-inset-level="2"
          expand-icon-class="text-dark"
          class="text-dark bg-white"
          :label="'Unidad I'"
          :default-opened="true"
        >
        </q-expansion-item>
      </q-expansion-item>
    </q-expansion-item>

    <!-- <q-expansion-item
      expand-separator
      dense-toggle
      expand-icon-class="text-dark"
      class="text-dark text-bold bg-amber"
      :label="'PUNTAJE'"
      :default-opened="false"
    >
      <q-table
        dense
        bordered
        color="primary"
        :title="`Linkoins ${linkoins}`"
        :rows-per-page-options="[0]"
        :rows="rows"
        :columns="columns"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <q-card v-if="col.name != 'bestScore'">
                <q-card-section>{{ col.value }}</q-card-section>
              </q-card>

              <q-card v-else>
                <q-card-section class="row">
                  <q-badge
                    class="q-pa-sm q-mx-sm"
                    v-for="(col, index) in col.value"
                    :key="col.value"
                  >
                    {{ col.user_name }}
                    <span
                      :class="
                        index == 0 ? 'bg-warning text-accent' : 'bg-white text-accent'
                      "
                      class="q-mx-sm q-pa-sm rounded-borders"
                      >{{ col.score }}</span
                    >
                  </q-badge>
                </q-card-section>
              </q-card>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-expansion-item> -->

    <q-expansion-item
      expand-separator
      dense-toggle
      expand-icon-class="text-dark"
      class="text-dark text-bold bg-amber"
      :label="'MATERIAL DE ESTUDIO'"
      :default-opened="false"
    >
      <q-expansion-item
        expand-separator
        dense-toggle
        :header-inset-level="0"
        :content-inset-level="1"
        expand-icon-class="text-dark"
        class="text-dark bg-white"
        :label="'Unidad I'"
        :default-opened="true"
      >
        <q-card class="bg-dark text-white row">
          <q-card-section class="q-pa-md q-ma-sm bg-accent row rounded-borders">
            <q-btn class="text-white" dense flat @click="materialDialog = true">
              {{ schemeName }}
            </q-btn>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-expansion-item>

    <div class="q-gutter-sm">
      <!-- <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      > -->
      <!-- <q-card class="bg-primary text-white">
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
        </q-card> -->
      <!-- </q-dialog> -->

      <!-- <q-dialog
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
                    expand-icon-class="text-dark"
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
      </q-dialog> -->
      <LoginRoom :onLogin="onLogin" />
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { onMounted, ref, defineProps, watchEffect } from "vue";
import { api } from "src/boot/axios";
import LoginRoom from "../components/LoginRoom.vue";
import MaterialEstudio from "../components/MaterialEstudio.vue";
const dialog = ref(false);
const materialDialog = ref(false);
const maximizedToggle = ref(true);
const roadMapActive = ref(false);
const bar = ref(false);
const userData = ref("");
const currentUser = ref("Roler");
const activeClass = ref(false);
const classLink = ref("https://linkanimus.com/");
const classLinkUpload = ref("");
const classNameUpload = ref("");
const schemeName = ref("asdasd");
const textDescription = ref(`Las etiquetas HTML semánticas son etiquetas que definen el significado del contenido que engloban.
      Por ejemplo, etiquetas como <header>, <article> y <footer> son etiquetas HTML semánticas. Indican claramente la funcionalidad de su contenido.
      En cambio, etiquetas como <div> y <span> son ejemplos típicos de elementos HTML no semánticos. Aunque albergan contenido, no indican qué tipo de contenido contienen ni qué función desempeña esa pieza en la página.`);

const classActiveInputs = ref(true);
const linkoins = ref(0);
const columns = [
  {
    name: "earnedPoints",
    required: true,
    label: "Puntaje ganado",
    field: "earnedPoints",
    align: "left",
    sortable: true,
  },
  {
    name: "bestScore",
    required: true,
    label: "Top 3 puntajes",
    field: "bestScore",
    align: "left",
    sortable: true,
  },
  {
    name: "unityAsignaturesName",
    required: true,
    label: "Unidades",
    field: "unityAsignaturesName",
    align: "left",
    sortable: true,
  },
];

const rowsHistoric = ref([]);
const columnsHistoric = ref([
  {
    name: "username",
    required: true,
    label: "Estudiante",
    align: "left",
    field: "username",
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "date",
    required: true,
    label: "Registros",
    align: "left",
    field: "date",
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "accType",
    required: true,
    label: "Accion",
    align: "left",
    field: "accType",
    format: (val) => `${val}`,
    sortable: true,
  },
]);

function closeDialog(active) {
  materialDialog.value = active;
  console.log("asddd: ", materialDialog.value);
}

const rows = ref([
  {
    unityAsignaturesName: "TAREAS [UNIDAD I - HTML5 semantics]",
    earnedPoints: 12,
    bestScore: [
      {
        user_name: "Jamiel Jackson",
        score: 85,
      },
      {
        user_name: "Jhonatan Hernandez",
        score: 72,
      },
      {
        user_name: "María Silva",
        score: 64,
      },
    ],
  },
  {
    unityAsignaturesName: "UNIDAD I - Styling",
    earnedPoints: 34,
    bestScore: [
      {
        user_name: "Jamiel Jackson",
        score: 85,
      },
      {
        user_name: "Jhonatan Hernandez",
        score: 72,
      },
      {
        user_name: "María Silva",
        score: 64,
      },
    ],
  },
  {
    unityAsignaturesName: "ASISTENCIA [UNIDAD I - HTML 5 semantics]",
    earnedPoints: 10,
    bestScore: [
      {
        user_name: "Jamiel Jackson",
        score: 85,
      },
      {
        user_name: "Jhonatan Hernandez",
        score: 72,
      },
      {
        user_name: "María Silva",
        score: 64,
      },
    ],
  },
]);

const unidades = [
  {
    nombreUnidad: "Semanticas de HTML5",
    subUnidades: [
      {
        actividades: [
          {
            link: "https://www.youtube.com/embed/V8oOQaVHDcw",
            title: "Etiquetas HTML5",
            puntaje: 3,
            active: true,
          },
          {
            link: "https://www.youtube.com/embed/V8oOQaVHDcw",
            title: "Estilos CSS",
            puntaje: 3,
            active: true,
          },
          {
            link: "https://www.youtube.com/embed/V8oOQaVHDcw",
            title: "Manejo del DOM",
            puntaje: 4,
            active: true,
          },
        ],
      },
    ],
  },
  {
    nombreUnidad: "Puntaje",
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
]);
// const ruta = ref("https://jamjack.online/linkanimusphp/assets");
const currentVideo = ref("https://www.youtube.com/embed/WIsjE1RzKNo");
const currentVideoTitle = ref("Animacion 2D");

const props = defineProps({
  loginAccess: Boolean,
});

function setVideoMaximized(rowData) {
  currentVideo.value = rowData.videolink.link;
  currentVideoTitle.value = rowData.videolink.title;
}

function decodeUserData(userData) {
  return JSON.parse(atob(atob(userData)));
}

function onLogin(active) {
  if (active) {
    console.log({ localStorage });
    setTimeout(() => {
      setUserData();
      getHistoricUsers();
    }, 500);
  }
}

function setUserData() {
  currentUser.value = localStorage.getItem("username");
  linkoins.value = localStorage.getItem("linkoins");
  accesUser(localStorage.getItem("userId"));
}
//SELECT * FROM access WHERE DATE_FORMAT(created_at, '%d/%m/%Y') = DATE_FORMAT(CURDATE(), '%d/%m/%Y');
function terminateClasslink() {}

function uploadClasslink() {
  if (classLinkUpload.value == "" || classNameUpload.value == "") {
    Swal.fire({
      icon: "error",
      text: "Debes rellenar todos los campos",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }
  api
    .post("linkanimusphp/UploadClasslink.php", {
      classlink: classLinkUpload.value,
      className: classNameUpload.value,
    })
    .then((res) => {
      console.log(res.data);
      if (res?.data?.message?.ESTADO == "OK") {
        Swal.fire({
          icon: "success",
          text: "Clase cargada exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
        classLinkUpload.value = "";
        classNameUpload.value = "";
        classActiveInputs.value = false;
      }
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Error en el servidor",
        text: `${err}`,
        showConfirmButton: false,
        timer: 5500,
        willClose: () => {
          dialog.value = true;
        },
      });
    });
}

function respData(data) {
  console.log({ data });
  if (data.ESTADO == "OK") {
    Swal.fire({
      icon: "success",
      title: "Acceso exitoso",
      text: `Bienvenido ${data.DATA.userName}`,
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Error en el servidor",
      text: `${data}`,
      showConfirmButton: false,
      timer: 5500,
      willClose: () => {
        dialog.value = true;
      },
    });
  }
}
function getHistoricUsers() {
  if (
    localStorage.getItem("token") != "" &&
    localStorage.getItem("token") != null &&
    localStorage.getItem("token") != undefined
  ) {
    api
      .post("linkanimusphp/HistoricController.php", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        rowsHistoric.value = res.data.DATA;
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error en el servidor",
          text: `${err}`,
          showConfirmButton: false,
          timer: 5500,
          willClose: () => {
            dialog.value = true;
          },
        });
      });
  }
}

function historicControl() {}

function accesUser(userId) {
  api
    .post("linkanimusphp/UserAccess.php", {
      userId,
    })
    .then((res) => {})
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Error en el servidor",
        text: `${err}`,
        showConfirmButton: false,
        timer: 5500,
        willClose: () => {
          dialog.value = true;
        },
      });
    });
}

function showMaterialDialog() {
  materialDialog.value = true;
}

onMounted(() => {
  rowsF.value = [];
  rows.value = [];
  unidades.value = [];
  currentUser.value = localStorage.getItem("username");
  linkoins.value = localStorage.getItem("linkoins");
  getHistoricUsers();
  api
    .get("linkanimusphp/descargar.php")
    .then((res) => {
      console.log({ res });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Error en el servidor",
        text: `${err}`,
        showConfirmButton: false,
        timer: 5500,
        willClose: () => {
          dialog.value = true;
        },
      });
    });
});
</script>
