import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import VueGtag from "vue-gtag-next";

createApp(App)
  .use(store)
  .use(router)
  .use(VueScrollTo)
  .use(VueGtag, {
    property: {
      id: "G-6CGFWR0Y8M"
    }
  })
  .mount("#app");
