import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Item {
  _id: string;
  name: string;
  type: string;
  price: number;
  image: string;
}

interface ItemState {
  item: Item[];
  status: string;
  error: string;
}

const initialState: ItemState = {
  item: [],
  status: "",
  error: "",
};

export const fetchItem = createAsyncThunk("item/fetchItem", async function () {
  const response = await fetch("http://localhost:8080/api/items", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  return data;
});

export const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.status = "idle";
        state.item = action.payload.data;
      })
      .addCase(fetchItem.rejected, (state) => {
        state.status = "error";
        state.error = "There was a problem getting your Items";
      }),
});

export default ItemSlice.reducer;
