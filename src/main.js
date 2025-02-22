import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import ElementPlus from "element-plus";
import pinia from "./store/store.ts";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
