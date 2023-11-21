import { configureStore } from "@reduxjs/toolkit";
import { ItemSlice } from "./features/itemSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { CartSlice } from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    item: ItemSlice.reducer,
    cart: CartSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
