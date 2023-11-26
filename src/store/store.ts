import { configureStore } from "@reduxjs/toolkit";
import { ItemSlice } from "./features/itemSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { CartSlice } from "./features/cartSlice";
import { UserSlice } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    item: ItemSlice.reducer,
    cart: CartSlice.reducer,
    user: UserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
