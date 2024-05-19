<template>
  <div class="row">
    <span class="text-bold text-orange">{{ "<" + props.tag }}</span>

    <span v-for="prop in props.tagsProps" :key="prop">
      <span class="text-bold text-green">&nbsp;{{ prop.property }}</span>
      <span class="text-white">{{ "=" }}</span>
      <span class="text-blue">{{ `"${prop.value}"` }}</span>
    </span>

    <span v-if="props.openTag">
      <span class="text-bold text-orange">{{ cerrarNombreTag }} </span>
      <span class="text-white">&nbsp;&nbsp;{{ props.content }}&nbsp;&nbsp;</span>
      <span class="text-bold text-orange">{{ cerrarTag }} </span>
    </span>
    <span v-else>
      <span class="text-bold text-orange">{{ closedTag }} </span>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";

const cerrarNombreTag = ref(">");
const cerrarTag = ref("");
const closedTag = ref("/>");

const props = defineProps({
  tagsProps: Array,
  content: String,
  tag: String,
  openTag: {
    type: Boolean,
    default: true,
  },
});

function closeTagName() {
  return `</${props.tag}>`;
}

onMounted(() => {
  cerrarTag.value = closeTagName();
});
</script>
