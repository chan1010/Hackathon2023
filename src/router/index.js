import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/CheckMedicine.vue"),
    meta: {
      title: "Hackathon - Check Medicine",
    },
  },
  {
    path: "/check-med",
    name: "CheckMedicine",
    component: () => import("../views/CheckMedicine.vue"),
    meta: {
      title: "Hackathon - Check Medicine",
    },
  },
  {
    path: "/med-detail/:id",
    name: "MedicineDetail",
    component: () => import("../views/DetailMedicine.vue"),
    meta: {
      title: "Hackathon - Medicine Detail",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
