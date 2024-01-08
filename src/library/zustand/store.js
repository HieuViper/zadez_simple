import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import cartStore from "./cartStore";
import modalLoginStore from "./modalLoginStore";
import userStore from "./userStore";

let combineStores = (set, get) => ({
  ...userStore(set, get),
  ...modalLoginStore(set, get),
  ...cartStore(set, get),
});

combineStores = devtools(combineStores);

combineStores = persist(combineStores, {
  name: "zustand",
  getStorage: () => localStorage,
  partialize: (state) => ({
    userState: state.userState,
    // cartState: state.cartState,
  }),
});

export default create(combineStores);
