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
          <!-- <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn> -->
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

function login() {
  api
    .post("linkanimusphp/index.php", {
      user: account.value,
      pass: password.value,
      state: 0,
    })
    .then((res) => {
      console.log(res.data);
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
      // location.reload();
      localStorage.setItem("username", account.value);
    })
    .catch((err) => {
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
    });
}

function toggleDialog() {
  dialog.value = !dialog.value;
}

onMounted(() => {
  let user = localStorage.getItem("username") || null;
  if (user) {
    dialog.value = false;
  } else {
    dialog.value = true;
  }
});

//dev-pq64v41kcccfxbtk
</script>
