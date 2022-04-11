<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderDetail',
  setup() {
    return {
      pageTitle: 'Order Detail Page',
    };
  },
});
</script>

<template>
  <h1>{{ pageTitle }}</h1>
</template>
