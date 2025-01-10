<template>
  <div class="wrapper">
    <input type="text" v-focus />
  </div>
</template>

<script lang="ts" setup>
const vFocus = {
  mounted: (el: any) => el.focus(),
};
</script>
<style scoped>
.wrapper {
  padding: 20px;
}
</style>
