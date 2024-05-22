<template>
  <section>
    <LoginSection />
  </section>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { api } from "src/boot/axios";
import Swal from "sweetalert2";
import LoginSection from "src/pages/outter/LoginSection.vue";

onMounted(() => {
  // send notification
});
</script>

<style lang="scss" scoped>

</style>
