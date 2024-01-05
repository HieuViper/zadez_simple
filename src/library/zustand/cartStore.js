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
          const newData = cartItems.push(data);
          state.cartState.cartItems = newData;
          state.cartState.total = caculateTotalPrice(state);
        },
        false,
        `cart/addToCart`
      );
    },
    removeFromCart: (id) => {
      set(
        (state) => {
          const newData = state.cartItems.filter((item) => item.id !== id);
          state.cartState.cartItems = newData;
          state.cartState.total = caculateTotalPrice(state);
        },
        false,
        `cart/addToCart`
      );
    },
  };
};

const caculateTotalPrice = (state) => {
  return state.cartState.cartItems.reduce((total, currentItem) => {
    const itemTotal = currentItem.amount * currentItem.price;
    return total + itemTotal;
  }, 0);
};

export default cartStore;
