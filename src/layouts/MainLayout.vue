<template>
  <q-layout view="lHh Lpr lFf" class="bg-blue">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref, onMounted } from "vue";
const drawer = ref(false)

onMounted(() => {

})

</script>
