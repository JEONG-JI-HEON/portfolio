import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import "@/assets/css/main.css";

createApp(App).use(store).use(Vue3Lottie).mount("#app");
