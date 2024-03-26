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
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section
        class="q-pa-md q-pt-lg bg-accent"
        style="height: 90vh; overflow-y: auto"
      >
        <!-- <b>
          {{ textDescription }}
        </b> -->
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
const bar = ref(true);
const textDescription = ref("");
</script>
