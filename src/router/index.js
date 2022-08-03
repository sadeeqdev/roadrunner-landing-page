import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import Company from "../views/company/Company.vue";
import Finance from "../views/finance/Finance.vue";
import FAQs from "../views/faqs/FAQs.vue";
import HowItWorks from "../views/howItWorks/HowItWorks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      layout: "content",
    },
  },
  {
    path: "/finance",
    name: "finance",
    component: Finance,
    meta: {
      layout: "content",
    },
  },
  {
    path: "/company",
    name: "company",
    component: Company,
    meta: {
      layout: "content",
    },
  },
  {
    path: "/faqs",
    name: "faqs",
    component: FAQs,
    meta: {
      layout: "content",
    },
  },
  {
    path: "/howitworks",
    name: "howitworks",
    component: HowItWorks,
    meta: {
      layout: "content",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
