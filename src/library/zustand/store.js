import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import modalLoginStore from "./modalLoginStore";
import userStore from "./userStore";

let combineStores = (set, get) => ({
  ...userStore(set, get),
  ...modalLoginStore(set, get),
});

combineStores = devtools(combineStores);

combineStores = persist(combineStores, {
  name: "zustand",
  getStorage: () => localStorage,
  partialize: (state) => ({
    userState: state.userState,
  }),
});

export default create(combineStores);
