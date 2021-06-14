import { createStore } from "vuex";
import { UserModule } from "@/store/User.js";

export default createStore({
  state: {},
  mutations: { }, // mutations are functions that affect the state
  actions: { }, // actions are functions that you call throughout your application that call mutations
  modules: { 
    User: UserModule
  }
});