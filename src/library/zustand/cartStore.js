const cartState = {
  cartItems: [],
  total: 0,
};

let cartStore = (set, get) => {
  return {
    cartState,
    addToCart: (data) => {
      set(
        (state) => {
          if (
            !state.cartState.cartItems.find(
              (item) => item.products.id == data.id
            ) ||
            state.cartState.length == 0
          ) {
            state.cartState.cartItems.push({
              products: data,
              amount: 1,
            });
          } else {
            const index = state.cartState.cartItems.findIndex(
              (item) => item.products.id == data.id
            );
            state.cartState.cartItems[index].amount =
              state.cartState.cartItems[index].amount + 1;
          }
          console.log(state.cartState.cartItems);

          state.cartState.total = caculateTotalPrice(state);
        },
        false,
        `cart/addToCart`
      );
    },
    removeFromCart: (id) => {
      set(
        (state) => {
          state.cartState.cartItems = state.cartState.cartItems.filter(
            (item) => item.products.id !== id
          );
          console.log(state.cartState.cartItems);
          state.cartState.cartItems.length == 0
            ? (state.cartState.total = 0)
            : (state.cartState.total = caculateTotalPrice(state));
        },
        false,
        `cart/removeFromCart`
      );
    },
    increseAmount: (id) => {
      set(
        (state) => {
          const index = state.cartState.cartItems.findIndex(
            (item) => item.products.id == id
          );
          state.cartState.cartItems[index].amount =
            state.cartState.cartItems[index].amount + 1;
          state.cartState.total = caculateTotalPrice(state);
        },
        false,
        `cart/increseAmount`
      );
    },
    decreaseAmount: (id) => {
      set(
        (state) => {
          const index = state.cartState.cartItems.findIndex(
            (item) => item.products.id == id
          );
          state.cartState.cartItems[index].amount =
            state.cartState.cartItems[index].amount - 1;
          state.cartState.total = caculateTotalPrice(state);
        },
        false,
        `cart/decreaseAmount`
      );
    },
    resetCartState: () => {
      set(
        (state) => {
          state.cartState = cartState;
        },
        false,
        "cart/resetCartState"
      );
    },
  };
};

const caculateTotalPrice = (state) => {
  return state.cartState.cartItems.reduce((total, currentItem) => {
    const itemTotal = currentItem.amount * currentItem.products.price;
    return total + itemTotal;
  }, 0);
};

export default cartStore;
