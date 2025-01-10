<template>
  <div class="demo-collapse">
    <el-alert title="vue2与vue3生命周期对比" type="info" />
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="vue2生命周期" name="1">
        <ul>
          <li>beforeCreated</li>
          <li>created</li>
          <li>beforeMount</li>
          <li>mounted</li>
          <li>beforeUpdate</li>
          <li>updated</li>
          <li>beforeDestroy</li>
          <li>destroyed</li>
        </ul>
        <div style="color: red">还有两个: actived, deactived</div>
      </el-collapse-item>
      <el-collapse-item title="vue3 生命周期" name="2">
        <ul>
          <li>
            setup，在 beforeCreate 和 created 前，因此一般在组合式 api
            中使用它做一些前置处理。
          </li>
          <li>onBeforeMount</li>
          <li>onMounted</li>
          <li>onBeforeUpdate</li>
          <li>onUpdated</li>
          <li style="color: red">onBeforeUnmount</li>
          <li style="color: red">onUnmounted</li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";

onBeforeMount(() => {
  console.log("====beforeMount====");
});

onMounted(() => {
  console.log("====onMounted====");
});

onBeforeUpdate(() => {
  console.log("====onBeforeUpdate====");
});

onUpdated(() => {
  console.log("====onUpdated====");
});

onBeforeUnmount(() => {
  console.log("====onBeforeUnmount====");
});

onUnmounted(() => {
  console.log("====onUnmounted====");
});

const activeNames = ref(["1"]);
const handleChange = (val: string[]) => {
  console.log(val);
};
</script>

<style scoped>
.demo-collapse {
  width: 80%;
  margin: 0 auto;
  padding: 50px;
}
</style>
