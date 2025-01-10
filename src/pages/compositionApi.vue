<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>reactive</h2>
    <button @click="increment">Count is: {{ cnt.count }}</button>
    <h2>ref</h2>
    <input ref="input" />
    <h2>computed</h2>
    <p>{{ plusOne }}</p>
    <h2>watchEffect</h2>
    <p>{{ count1 }}</p>
    <h2>watch</h2>
    <p>侦听一个getter函数</p>
    <p>侦听一个ref</p>
    <p>侦听多个来源</p>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watchEffect, watch } from "vue";
const title = ref("compositionApi 即组合式api");

// watchEffect的使用
const count1 = ref(0);
watchEffect(() => console.log(count1.value));
count1.value++;

// computed的使用
const num = ref(1);
const plusOne = computed(() => num.value + 1);

// reactive的使用
const cnt = reactive({ count: 0 });
function increment() {
  cnt.count++;
}

// onMounted 获取焦点
const input = ref(null);
onMounted(() => {
  input.value.focus();
});

// watch的使用
watch(
  () => cnt.count,
  (count, prevCount) => {
    console.log("====count====", count, prevCount);
  }
);
// build-in methods
defineProps({
  msg: String,
});
</script>

<style scoped></style>
