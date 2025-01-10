<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#fff"
    router
  >
    <el-menu-item index="Home">
      <el-icon><icon-menu /></el-icon>
      <span>项目概述</span>
    </el-menu-item>
    <el-menu-item index="compositionApi">
      <el-icon><icon-menu /></el-icon>
      <span>Composition API</span>
    </el-menu-item>
    <el-menu-item index="lifeCycle">
      <el-icon><document /></el-icon>
      <span>生命周期更新</span>
    </el-menu-item>
    <el-menu-item index="asyncComponent">
      <el-icon><setting /></el-icon>
      <span>异步组件</span>
    </el-menu-item>
    <el-menu-item index="customDirective">
      <el-icon><setting /></el-icon>
      <span>自定义指令</span>
    </el-menu-item>
    <el-menu-item index="teleportDemo">
      <el-icon><setting /></el-icon>
      <span>Teleport</span>
    </el-menu-item>
    <el-menu-item index="customHooks">
      <el-icon><setting /></el-icon>
      <span>自定义hooks</span>
    </el-menu-item>
    <el-menu-item index="piniaDemo">
      <el-icon><setting /></el-icon>
      <span>pinia使用</span>
    </el-menu-item>
    <el-menu-item index="todoList">
      <el-icon><setting /></el-icon>
      <span>TodoList</span>
    </el-menu-item>
    <el-menu-item index="customStore">
      <el-icon><setting /></el-icon>
      <span>状态管理原理探究</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
.el-menu {
  height: 90vh;
  width: 200px;
}
.el-menu-item {
  text-align: left;
}
</style>
