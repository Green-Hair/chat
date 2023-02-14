import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VeeValidatePlugin from "./includes/validation";
import progressBar from "./includes/progress-bar";

import "./assets/main.css";
import "nprogress/nprogress.css";

progressBar(router);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);

app.mount("#app");
