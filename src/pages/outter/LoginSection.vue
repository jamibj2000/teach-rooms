<template>
  <div class="q-pa-md row flex-center" style="min-height: 100vh">
    <q-list bordered class="rounded-borders col-12 col-md-4 row">
      <q-expansion-item
        expand-separator
        class="text-cyan bg-dark col-12 text-center"
        icon="perm_identity"
        label="INICIAR SESIÓN"
        dense-toggle
        style="border: .2px solid cyan; border-radius: 10px"
        expand-icon-class="text-cyan"
      >
        <q-card class="q-pa-md bg-dark" style="border: .2px solid cyan; border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;">
          <q-card-section class="row q-mb-auto flex-center q-pa-none">
            <!-- <q-input
              class="col-12 rounded-borders q-ma-sm q-px-lg"
              color="orange" filled label-color="cyan" outlined
              label="Correo"
              dense
            >
              <template v-slot:append>
                <q-icon name="mail" color="cyan" />
              </template>
            </q-input> -->
            <q-input
              class="col-12 rounded-borders q-ma-sm q-px-lg bg-white"
              v-model="login__email"
              type="text"
              placeholder="Correo"
              dense
            >
              <template v-slot:append>
                <q-icon name="mail" color="dark" />
              </template>
            </q-input>

            <q-input
              class="col-12 rounded-borders q-ma-sm q-px-lg bg-white"
              v-model="login__password"
              placeholder="Contraseña"
              type="password"
              dense
            >
              <template v-slot:append>
                <q-icon name="key" color="dark" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="row q-pa-md ">
            <!-- <audio v-if="load___Bg_Audio" src="src/assets/audios/Helix-1.mp3" autoplay="true">
            </audio> -->
            <q-btn class="col-12 text-dark bg-cyan" label="ACCEDER" @click="login()">
            </q-btn>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { api } from "src/boot/axios";
import Swal from "sweetalert2";

const login__email = ref()
const login__password = ref()

// const notifications = ref(new Notification("Notificación", { body: "Hola" }));
const load___Bg_Audio = ref(false)
const onDialogHide = ref(true)
function playAudio() {
  load___Bg_Audio.value = true
}

function login() {
  api.post("/api/login")
    .then((res) => {
      localStorage.setItem("profileData", JSON.stringify(res.data?.profile || []))
      window.open("/panel", "_self");
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Error en el servidor",
        text: `${err}`,
        showConfirmButton: false,
        timer: 5500,
        timerProgressBar: true
      });
    });
}
</script>

<style lang="scss" scoped>

</style>
