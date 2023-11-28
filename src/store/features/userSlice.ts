import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
  _id: string;
  username: string;
  password: string;
  address: string;
}

interface UserState {
  user: User;
  status: string;
  error: string;
}

const initialState: UserState = {
  user: {
    _id: "",
    username: "",
    password: "",
    address: "",
  },
  status: "",
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async function () {
  const response = await fetch("http://54.179.0.101:8080/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  // console.log(data);
  return data;
});

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async function () {
    const response = await fetch("http://54.179.0.101:8080/api/users/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    // console.log(data);
    return data;
  },
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async function ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const response = await fetch("http://54.179.0.101:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    // console.log(data);
    return data;
  },
);

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload.data;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "error";
        state.error = "There was a problem getting your User";
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload.data;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "error";
        state.error = "There was a problem login";
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "idle";
        state.user.username = "";
      })
      .addCase(logoutUser.rejected, (state) => {
        state.status = "error";
        state.error = "There was a problem logout";
      });
  },
});

export default UserSlice.reducer;
