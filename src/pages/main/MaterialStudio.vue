<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Material de estudio</div>
    </q-card-section>
    <q-card-section>
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          v-for="(item, index) in menuList" :key="index"
          expand-separator
          :icon="item.icon"
          :label="item.name"
          :header-inset-level="0"
          :default-opened="index == 0 ? true : false"
          expand-icon-class="text-dark"
          class="text-white bg-accent"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { api } from "src/boot/axios";
import Swal from "sweetalert2";

</script>
