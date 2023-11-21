import { createSlice } from "@reduxjs/toolkit";
import { item } from "../../assets/mock-data/mock";

export interface Item {
  id: number;
  name: string;
  type: string;
  price: number;
  picture: string;
}

interface ItemState {
  item: Item[];
  status: string;
  error: string;
}

const initialState: ItemState = {
  item: item,
  status: "",
  error: "",
};

export const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
});

export default ItemSlice.reducer;
