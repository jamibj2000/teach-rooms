<template>
  <div class="q-pa-md row flex-center" style="min-height: 100vh">
    <q-list bordered class="rounded-borders col-7">
      <q-expansion-item
        expand-separator
        class="text-white bg-dark"
        icon="perm_identity"
        label="INICIAR SESIÓN"
        dense-toggle
        style="border: .2px solid white; border-radius: 10px"
        expand-icon-class="text-white"
      >
        <q-card class="q-pa-md" style="border: .2px solid white; border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;">
          <q-card-section class="q-pa-md text-accent">
          laksj
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
const notifications = ref(new Notification("Notificación", { body: "Hola" }));

onMounted(() => {
  // send notification
  notifications.value = new Notification("Clases activas", {
    body: "Hola a todos",
  });

  // logByToken();
});
</script>

<style lang="scss" scoped>

</style>
