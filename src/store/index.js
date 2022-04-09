import { createStore } from "vuex";
import common from "./common";
import vip from "./vip";

export default createStore({
  ...common,
  modules: {
    vip,
  },
});
