<!-- Vue3 -->
<template>
  <div>
    <p>{{ current }} [max: 10; min: 1;]</p>
    <div class="contain">
      <button @click="inc()">Inc()</button>
      <button @click="dec()" style="margin-left: 8px">Dec()</button>
      <button @click="set(3)" style="margin-left: 8px">Set(3)</button>
      <button @click="reset()" style="margin-left: 8px">Reset()</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue/dist/vue.js'
import { useCounter } from "../hooks/useCounter";
// 这个 current 就是一个状态（响应式数据）
const {
  value: current,
  actions: { inc, dec, set, reset },
} = useCounter(20, { min: 1, max: 10 });
</script>

<style scoped></style>

<style></style>
