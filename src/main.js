import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/index";

// Componentes
import Ejemplo from "./components/ejemplo/index.vue";

createApp(App).component("Ejemplo", Ejemplo).use(store).mount("#app");
