const userState = {
  userId: null,
  email: "",
  userName: "",
  avatar: null,
  roles: [],
  token: "",
};

let userStore = (set, get) => {
  return {
    userState,
    saveUser: (data) => {
      set(
        (state) => {
          state.userState.userId = data.userId;
          state.userState.email = data.email;
          state.userState.userName = data.userName;
          state.userState.avatar = data.avatar;
          state.userState.token = data.token;
          state.userState.role = data.role;
        },
        false,
        `user/saveUser`
      );
    },
  };
};

export default userStore;
