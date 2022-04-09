import "@/assets/flexible";
import { createApp } from "vue";
import {
  Popup,
  Form,
  Field,
  CellGroup,
  Button,
  Overlay,
  Collapse,
  CollapseItem,
  Swipe,
  SwipeItem,
} from "vant";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(Popup);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Overlay);
app.use(Button);
app.use(Collapse);
app.use(CollapseItem);
app.use(SwipeItem);
app.use(Swipe);
app.mount("#app");
