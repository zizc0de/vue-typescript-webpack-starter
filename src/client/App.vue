<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => console.log('App Successfully mounted'));
  },
});
</script>

<template>
  <router-view />
</template>
