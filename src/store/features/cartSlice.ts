import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./itemSlice";

interface CartState {
  cart: Item[];
  status: string;
  error: string;
}

const initialState: CartState = {
  cart: [],
  status: "",
  error: "",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addItem } = CartSlice.actions;

export default CartSlice.reducer;
