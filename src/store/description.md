## pinia 与 vuex 的对比

pinia 去掉了 vuex 的 mutation，只保留 state，actions，getters，pinia 提供了插件机制，可以很方便的扩展 pinia 的功能.

个人理解：与其说是去掉了 mutation, 不如说是把原来的 action 跟 mutation 合并了，原来的 action 的固定执行 commit，传值,基本都是些固定的写法，很鸡肋没什么存在的必要。

## pinia 另一种数据流

defineStore的第二个参数可以是回调函数，该函数内
用 ref定义状态 ，直接定义修改状态的方法。取出状态用 storeToRefs
