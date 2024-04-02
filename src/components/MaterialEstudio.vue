<template>
  <q-dialog
    v-model="bar"
    persistent
    maximized
    transition-hide="slide-down"
    transition-show="slide-up"
  >
    <q-card>
      <q-bar>
        <div>{{ new Date().toLocaleString() }}</div>
        <q-space />
        <q-btn dense flat icon="close" @click="closeDialog()">
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section
        class="q-pa-md q-pt-lg bg-accent row"
        style="height: 90vh; overflow-y: auto"
      >
        <section class="col-12 col-md-6 q-pa-md bg-dark text-accent" style="height: 100%">
          <q-card class="bg-dark" style="height: 100%; overflow-y: auto">
            <q-card-section class="row">
              <q-badge
                color="transparent"
                class="text-white text-bold q-pa-md col-12 flex-center"
                style="font-size: 1.8rem"
              >
                {{ schemeName }}
              </q-badge>
            </q-card-section>
            <q-card-section class="row bg-black flex-center">
              <!-- <pre><code class="text-black text-bold">{{ codeExample }}</code>
              </pre> -->
              <table-tags tag="p" class="col-12" />
              <table-tags
                tag="a"
                :tagsProps="gsProps"
                :content="contenido"
                class="col-12"
              />
              <table-tags tag="img" class="col-12" :openTag="false" />
            </q-card-section>
            <q-card-section class="row">
              <q-badge
                color="blue"
                class="text-dark text-bold q-pa-md col-12 flex-center"
              >
              </q-badge>
            </q-card-section>
            <q-card-section class="row">
              <q-badge color="blue" class="text-dark text-bold q-pa-md col-12">
                {{ textDescription }}</q-badge
              >
            </q-card-section>
          </q-card>
        </section>

        <!-- IMAGE EXAMPLE SECTION -->
        <section class="col-12 col-md-6 q-pa-md bg-dark-nodrize text-accent">
          <q-card class="bg-dark q-pa-lg" style="height: 100%; overflow-y: auto">
            <q-card-section class="row bg-white flex-center">
              <img src="../assets/Images/cursor.png" alt=""
            /></q-card-section>
          </q-card>
        </section>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineProps, onMounted, watchEffect } from "vue";
import TableTags from "./Specials/TableTags.vue";
const bar = ref(false);

const contenido = ref("Link animus");
const gsProps = ref([
  {
    property: "href",
    value: "https://linkanimus.com/",
  },
  {
    property: "target",
    value: "_blank",
  },
]);

const schemeName = ref("ETIQUETA ANCHOR");
const textDescription = ref("");
const codeExample = ref(`<a> ESTO LLEVA A GOOGLE </a>`);
const textSyntax = ref("<a> ESTO LLEVA A GOOGLE </a>");

const props = defineProps({
  mDialog: Boolean,
  closeDialogMaterial: Function,
});

function obtainMaterial(materialId) {
  api
    .get("linkanimusphp/ObtainMaterial.php", {
      materialId: materialId,
    })
    .then((res) => {
      console.log({ res });
      if (res?.data?.message?.ESTADO == "OK") {
        // Swal.fire({
        //   icon: "success",
        //   text: "Clase cargada exitosamente",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
      }
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Error en la petición:",
        text: `${err}`,
        showConfirmButton: false,
        timer: 5500,
        willClose: () => {
          dialog.value = true;
        },
      });
    });
}

watchEffect(() => {
  bar.value = props.mDialog;
});

function closeDialog() {
  bar.value = false;
  props.closeDialogMaterial(false);
}

onMounted(() => {
  bar.value = props.dialog;
  console.log({ "BAR ": bar.value });
});
</script>

<style>
.bg-dark-nodrize {
  background: #2b2b2b;
}
</style>
