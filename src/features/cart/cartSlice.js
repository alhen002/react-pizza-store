import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantitiy(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantitiy(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantitiy,
  decreaseItemQuantitiy,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// reselect as alternative library to optimize these


export function getCart(state) {
  return state.cart.cart;
}

export const getCurrentQuantityById = (id) => (state) =>  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
export function getTotalCartQuantity(state) {
  return state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
}

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}
