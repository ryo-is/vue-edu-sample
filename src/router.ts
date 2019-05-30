import Vue from "vue"
import Router from "vue-router"
import OldContent from "@/views/oldContent/OldContent.vue"
import NewContent from "@/views/newContent/NewContent.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "NewContent",
      component: NewContent,
    },
    {
      path: "/old",
      name: "OldContent",
      component: OldContent,
    }
  ],
})
