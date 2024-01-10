const userState = {
  userId: null,
  email: "",
  fullName: "",
  roles: [],
  token: "",
  phoneNumber: "",
};

let userStore = (set, get) => {
  return {
    userState,
    saveUser: (data) => {
      set(
        (state) => {
          state.userState.userId = data.userId;
          state.userState.email = data.email;
          state.userState.fullName = data.fullName;
          state.userState.phoneNumber = data.phoneNumber;
          state.userState.token = data.token;
          state.userState.roles = data.roles;
        },
        false,
        `user/saveUser`
      );
    },
    resetUserState: () => {
      set(
        (state) => {
          state.userState = userState;
        },
        false,
        "User/resetUserState"
      );
    },
  };
};

export default userStore;
