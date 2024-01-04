const modalLoginState = {
  isOpen: false,
};

let modalLoginStore = (set, get) => {
  return {
    modalLoginState,
    toggleModal: (data) => {
      set(
        (state) => {
          state.modalLoginState.isOpen = data;
        },
        false,
        `modalLogin/toggleModal`
      );
    },
  };
};

export default modalLoginStore;
