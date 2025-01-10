import { ref } from "vue";
// 状态管理原理探究

/**
 * 创建一个全局的状态管理方法
 * 1，状态怎么保存
 * 2，状态怎么获取
 * 3，状态怎么操作
 *
 * 以 pinia 举例 , 假设pinia 只创建了一个store,
 * defineStore的两个参数
 * 第一个store名称，
 * 第二个传入了状态及操作状态的方法 state, actions
 * 返回一个对象，内容主要也是两个，用户定义的state及操作状态的方法。
 *
 * todo state, operation[]
 * CreateCustomStore(state={}, operation={}){
 * operation[callback1] = change(state);
 * ....
 * return {state:{}, operation:{}}
 * }
 */

// 这段简单代码似乎也能达到全局共享状态的目的
const CreateCustomStore = function (value) {
  this.value = ref(value);
  this.getValue = () => {
    return this.value.value;
  };
  this.setValue = (value) => {
    this.value = value.value;
  };
  this.increment = () => {
    console.log("increment", this.value);
    this.value.value++;
  };
  this.decrement = () => {
    this.value.value--;
  };
};

const customStore = new CreateCustomStore(0);

export default customStore;
