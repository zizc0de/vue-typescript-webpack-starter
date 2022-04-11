<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CurrentOrder',
  setup() {
    return {
      pageTitle: 'Current Order Page',
    };
  },
});
</script>

<template>
  <h1>{{ pageTitle }}</h1>
</template>
