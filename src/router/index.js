import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/compositionApi",
    name: "compositionApi",
    component: () => import("../pages/compositionApi.vue"),
  },
  {
    path: "/lifeCycle",
    name: "lifeCycle",
    component: () => import("../pages/LifeCycle.vue"),
  },
  {
    path: "/asyncComponent",
    name: "asyncComponent",
    component: () => import("../pages/asyncComponent.vue"),
  },
  {
    path: "/customDirective",
    name: "customDirective",
    component: () => import("../pages/customDirective.vue"),
  },
  {
    path: "/teleportDemo",
    name: "teleportDemo",
    component: () => import("../pages/teleportDemo.vue"),
  },
  {
    path: "/customHooks",
    name: "customHooks",
    component: () => import("../pages/customHooks.vue"),
  },
  {
    path: "/piniaDemo",
    name: "piniaDemo",
    component: () => import("../pages/piniaDemo.vue"),
  },
  {
    path: "/todoList",
    name: "todoList",
    component: () => import("../pages/todoList.vue"),
  },
  {
    path: "/customStore",
    name: "customStore",
    component: () => import("../pages/customStore.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
