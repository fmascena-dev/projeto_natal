import { createRouter, createWebHistory } from "vue-router"
import NotFound from "@/pages/NotFound.vue"
import Index from "@/pages/Index.vue"


export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
})
