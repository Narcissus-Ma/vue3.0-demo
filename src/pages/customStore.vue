<template>
  <div class="wrapper">
    <h1>{{ customStore.value }}</h1>
    <el-button @click="increment">+</el-button>
    <el-button @click="decrement">-</el-button>
  </div>
</template>

<script setup>
import customStore from "../customStore/customStore.js";
const increment = () => {
  customStore.increment();
};
const decrement = () => {
  customStore.decrement();
};
</script>
<style scoped>
.wrapper {
  margin: 20px;
}
</style>
../customStore/customStore
