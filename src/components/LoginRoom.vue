<template>
  <div>
    <q-dialog
      v-model="dialog"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
      maximized
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
        </q-bar>
        <q-card-section class="q-pt-lg">
          <div class="text-h6">Rolers School</div>
          <q-input
            bg-color="white"
            filled
            class="q-mt-md"
            v-model="account"
            :dense="dense"
          />
          <q-input
            bg-color="white"
            filled
            type="password"
            class="q-mt-md"
            v-model="password"
            :dense="dense"
          />
          <q-card-section class="row flex-center">
            <q-btn
              class="glossy text-black bg-amber col-12 col-md-6 q-mt-md q-pa-md"
              label="INGRESAR"
              @click="login()"
            />
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { api } from "src/boot/axios";
import Swal from "sweetalert2";

const userData = ref([]);
const dialog = ref(false);
const studentsCredentials = ref([
  {
    account: "jamielnegro",
    password: "123456",
    username: "Jamiel Negro",
  },
  {
    account: "jhonathanelgoldo",
    password: "654321",
    username: "Jhonathan Elgoldo",
  },
  {
    account: "kleiverwalcott14@gmail.com",
    password: "123456*",
    username: "Kleiver Walcott",
  },
  {
    account: "heislerwalcott12@gmail.com",
    password: "123456*",
    username: "Heisler Walcott",
  },
  {
    account: "isvannispetit25@gmail.com",
    password: "123456*",
    username: "Isvannis Petit",
  },
]);
const loginto = ref(false);
const account = ref("");
const password = ref("");

function unPhrase64(incomingData) {
  return atob(incomingData);
}

function login() {
  api
    .post("linkanimusphp/login.php", {
      user: account.value,
      pass: password.value,
    })
    .then((res) => {
      console.log(res.data);
      if (res?.data == "" || res?.data == null || res?.data == undefined) {
        Swal.fire({
          icon: "error",
          title: "Sin datos",
          text: "No se cargaron datos",
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            dialog.value = false;
          },
        });
        return;
      }

      // const desPhrasedData = unPhrase64(res?.data?.DATA);
      // userData.value = desPhrasedData;

      if (res?.data?.message?.ESTADO == "OK") {
        onLoggedIn(res.data.DATA);
        Swal.fire({
          icon: "success",
          title: "Login exitoso",
          text: "Bienvenido al sistema",
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            dialog.value = false;
          },
        });
        loginto.value = true;
        localStorage.setItem("userdata", account.value);
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("username", res?.data?.DATA?.userName);
        localStorage.setItem("userRole", res?.data?.DATA?.role);
        localStorage.setItem("userId", res?.data?.DATA.Id);
        localStorage.setItem("linkoins", res?.data?.DATA?.linkoins);
      } else {
        Swal.fire({
          icon: "error",
          title: "Login fallido",
          text: "Credenciales incorrectas",
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            dialog.value = true;
          },
        });
      }
      // location.reload();
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

const props = defineProps({
  onLogin: Function,
});

function onLoggedIn(data) {
  props.onLogin(true, data);
}

function toggleDialog() {
  dialog.value = !dialog.value;
}

function logByToken() {
  if (
    localStorage.getItem("token") != "" &&
    localStorage.getItem("token") != null &&
    localStorage.getItem("token") != undefined
  ) {
    api
      .post("linkanimusphp/LogByToken.php", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        console.log(res.data);
        if (res?.data?.message.ESTADO == "OK") {
          localStorage.setItem("userdata", account.value);
          localStorage.setItem("username", res?.data?.DATA?.userName);
          localStorage.setItem("userRole", res?.data?.DATA?.role);
          localStorage.setItem("userId", res?.data?.DATA.Id);
          localStorage.setItem("linkoins", res?.data?.DATA?.linkoins);
        }
      });

    props.onLogin(true);
    dialog.value = false;
  } else {
    dialog.value = true;
  }
}
onMounted(() => {
  logByToken();
});

//dev-pq64v41kcccfxbtk
</script>
