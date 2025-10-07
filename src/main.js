import { createApp } from "vue";
<<<<<<< HEAD
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/assests/style.css";

const app = createApp(App);

app.use(createPinia());
=======
import App from "./App.vue";
import router from "./router";
import "./index.css";

const app = createApp(App);

>>>>>>> a8e1ff9 (WIP: save local changes)
app.use(router);

app.mount("#app");
