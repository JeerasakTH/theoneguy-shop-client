import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  _id: string;
  username: string;
  password: string;
  address: string;
}

interface UserInput {
  username: string;
  password: string;
}

interface UserState {
  user: User;
  userInput: UserInput;
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
  userInput: {
    username: "",
    password: "",
  },
  status: "",
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async function () {
  const response = await fetch("http://localhost:8080/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  console.log(data);
  return data;
});

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async function ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const response = await fetch("http://localhost:8080/api/users/login", {
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
  reducers: {
    addUserInput: (state, action: PayloadAction<UserInput>) => {
      state.userInput = action.payload;
    },
  },
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
        state.error = "There was a problem getting your User";
      });
  },
});

export const { addUserInput } = UserSlice.actions;

export default UserSlice.reducer;
