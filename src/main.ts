import { createApp } from "vue";
import { setupRouter } from "@/router";
import { setupStore } from "@/store";
import { setupLocales } from "@/locales";

import App from "./App.vue";

const app = createApp(App);

setupLocales(app);
setupStore(app);
setupRouter(app);

app.mount("#app");
