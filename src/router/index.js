<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
=======
import HomeView from "@/views/HomeView.vue";
import UsersView from "@/views/UsersView.vue";
import { createRouter, createWebHistory } from "vue-router";

>>>>>>> a8e1ff9 (WIP: save local changes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
<<<<<<< HEAD
      name: "Home",
=======
      name: "home",
>>>>>>> a8e1ff9 (WIP: save local changes)
      component: HomeView,
    },
    {
      path: "/users",
<<<<<<< HEAD
      name: "Users",
      component: () => import("../views/UsersView.vue"),
    },
    {
      path: "/adduser",
      name: "AddUsers",
      component: () => import("../views/AddusersView.vue"),
=======
      name: "users",
      component: UsersView,
>>>>>>> a8e1ff9 (WIP: save local changes)
    },
  ],
});

export default router;
