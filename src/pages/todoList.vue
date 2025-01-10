<template>
  <div class="wrapper">
    <div class="addTodo">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button @click="addTodo" type="primary">添加</el-button>
    </div>
    <TransitionGroup name="list">
      <div class="todoList" v-for="(item, index) in todoList" :key="item">
        <el-card class="box-card">
          <div class="clearfix">
            <span>{{ item }}</span>
            <el-button
              @click="deleteTodo(index)"
              style="float: right; padding: 3px 0"
              type="text"
              >删除</el-button
            >
          </div>
        </el-card>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<string>("");
const todoList = ref<Array<string>>([]);
const addTodo = () => {
  todoList.value.push(input.value);
  input.value = "";
};
const deleteTodo = (index: number) => {
  todoList.value.splice(index, 1);
};
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 300px;
}
.addTodo {
  width: 300px;
  height: 50px;
  margin: 10px auto;
  display: flex;
  align-items: center;
}

.todoList {
  width: 300px;
  margin: 10px auto;
}

/* 过渡动画的定义 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
