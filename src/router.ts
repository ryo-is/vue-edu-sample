import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import OldContent from "@/views/oldContent/OldContent.vue"
import NewContent from "@/views/newContent/NewContent.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/old",
      name: "OldContent",
      component: OldContent,
    },
    {
      path: "/new",
      name: "NewContent",
      component: NewContent,
    }
  ],
})
