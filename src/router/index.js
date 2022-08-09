import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import Company from "../views/company/Company.vue";
import Finance from "../views/finance/Finance.vue";
import FAQs from "../views/faqs/FAQs.vue";
import HowItWorks from "../views/howItWorks/HowItWorks.vue";
import ContactUs from "../views/contactUs/ContactUs.vue";
import SignUp from "../views/signUp/SignUp.vue";
import TermsAndConditions from "../views/termsAndConditions/TermsAndConditions.vue";
import PrivacyPolicy from "../views/privacyPolicy/PrivacyPolicy.vue";
import PageNotFound from "../views/PageNotFound/PageNotFound.vue"

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
      title:'Home'
    },
  },
  {
    path: "/finance",
    name: "finance",
    component: Finance,
    meta: {
      layout: "content",
      title:'Finance'
    },
  },
  {
    path: "/about",
    name: "company",
    component: Company,
    meta: {
      layout: "content",
      title:'About'
    },
  },
  {
    path: "/faqs",
    name: "faqs",
    component: FAQs,
    meta: {
      layout: "content",
      title:'FAQs'
    },
  },
  {
    path: "/howitworks",
    name: "howitworks",
    component: HowItWorks,
    meta: {
      layout: "content",
      title: 'How It Works'
    },
  },
  {
    path: "/contactus",
    name: "contactus",
    component: ContactUs,
    meta: {
      layout: "content",
      title:'Contact Us'
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    meta: {
      layout: "content",
      title:'Sign Up'
    },
  },
  {
    path: "/termsandconditions",
    name: "termsandconditions",
    component: TermsAndConditions,
    meta: {
      layout: "content",
      title: 'Terms and Conditions'
    },
  },
  {
    path: "/privacypolicy",
    name: "privacypolicy",
    component: PrivacyPolicy,
    meta: {
      layout: "content",
      title:'Privacy Policy'
    },
  },
  { 
    path: "*", 
    component: PageNotFound,
    meta: {
      layout: "content",
      title:'Page Not Found'
    },
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

const DEFAULT_TITLE = 'RoadRunner';
router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = 'RoadRunner - ' + to.meta.title || DEFAULT_TITLE;
    });
});

export default router;
