<template>
  <div class="wrapper">
    <h1>{{ counter.count }}</h1>
    <h1>getters:{{ counter.double }}</h1>
    <el-select v-model="value" @change="onSelect" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button @click="increment">+</el-button>
    <el-button @click="decrement">-</el-button>
    <el-button @click="incrementifodd">increment if odd</el-button>
    <el-button @click="incrementasync">increment async</el-button>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import { useCounterStore } from "../store/store";
const value = ref<number>(0);
let timer = ref<any>(null);
const options = [
  {
    value: 1,
    label: "加1",
  },
  {
    value: 2,
    label: "加2",
  },
  {
    value: 3,
    label: "加3",
  },
];
const onSelect = (val: number) => {
  value.value = val;
};

const counter = useCounterStore();
const increment = () => {
  counter.increment(value.value);
};
const decrement = () => {
  counter.decrement(value.value);
};
const incrementifodd = () => {
  counter.incrementifodd(value.value);
};

const incrementasync = () => {
  timer.value = setTimeout(() => {
    counter.incrementasync(value.value);
  }, 1000);
};
onUnmounted(() => {
  clearTimeout(timer.value);
});
</script>
<style scoped>
.wrapper {
  margin: 20px;
}
</style>
