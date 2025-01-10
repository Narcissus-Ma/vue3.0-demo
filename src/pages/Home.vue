<template>
  <div>
    <h1>vue3学习笔记</h1>
    <p>搭建这个项目的目的是学习相关vue3.0相关技术实现，以及面向面试编程</p>
    <!-- 常见问题 -->
    <h2>常考面试题</h2>
    <p>1. 说说你对 setup 的理解</p>
    <p>2. ref 和 reactive 有什么区别？</p>
    <p>
      3. ref 和 shallowRef 的区别，以及 reactive 和 shallowReactive 的区别？
    </p>
    <p>4. watchEffect 与 watch 的区别</p>
    <p>5. option api 与 composition api 区别?</p>
    <div style="border: 1px gray solid; padding: 20px">
      <h2>自行体会</h2>
      <h3>vue2</h3>
      <el-select v-model="value" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <h3>vue3</h3>
      <el-select v-model="value1" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
const value1 = ref("");

const options = [
  {
    value: "Option1",
    label: "data",
  },
  {
    value: "Option2",
    label: "methods",
  },
  {
    value: "Option3",
    label: "computed",
  },
  {
    value: "Option4",
    label: "watch",
  },
  {
    value: "Option5",
    label: "生命周期函数",
  },
];
const options1 = [
  {
    value: "Option1",
    label: "ref1 data",
  },
  {
    value: "Option2",
    label: "ref2 data",
  },
  {
    value: "Option3",
    label: "function1",
  },
  {
    value: "Option4",
    label: "function2",
  },
  {
    value: "Option5",
    label: "customMethods",
  },
  {
    value: "Option5",
    label: "等等等等",
  },
];
</script>
