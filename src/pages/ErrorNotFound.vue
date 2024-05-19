<template>
  <div class="fullscreen bg-amber text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="text-blue" style="font-size: 30vh">
        404
      </div>

      <div class="text-blue text-h2" style="opacity:.8">
        Ups. Creo que nos hemos desviado
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="accent"
        unelevated
        to="/"
        label="Inicio"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
