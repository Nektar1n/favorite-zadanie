import { createStore } from 'vuex'
import users from "@/store/modules/users";
import axios from "axios";

export default createStore({
  modules: {
    users
  }
})
