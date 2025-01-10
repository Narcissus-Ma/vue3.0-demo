<template>
  <div>
    <AsyncComponent />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const AsyncComponent = defineAsyncComponent(
  () => import("./component/asyncComponentDemo.vue")
);
</script>
