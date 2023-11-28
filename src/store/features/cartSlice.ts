import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./itemSlice";

export interface Cart extends Item {
  quantity: number;
}

interface CartState {
  cart: Cart[];
  totalPrice: number;
  status: string;
  error: string;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  status: "",
  error: "",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const existingItem = state.cart.find(
        (item) => item._id === action.payload._id,
      );

      if (existingItem) {
        // If the item already exists, increment the quantity by 1
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);

      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
  },
});

export const { addItem, deleteItem } = CartSlice.actions;

export default CartSlice.reducer;
