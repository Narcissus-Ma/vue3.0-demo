import { createPinia } from "pinia";
import { defineStore } from "pinia";
import state from "./state";
import getters from "./getter";
import actions from "./action";

// 可以创建多个store
export const useCounterStore = defineStore("counterStore", {
  state,
  getters,
  actions,
});

export default createPinia();
