import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const memberInfo = getCookie("member");

const initState = memberInfo || {
  email: "",
};

export const loginPostAsync = createAsyncThunk(
  "loginPostAsync",
  async (param, thunkAPI) => {
    try {
      const response = await loginPost(param);

      if (!response || !response.email) {
        return thunkAPI.rejectWithValue(response);
      }

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { error: "LOGIN_FAILED" },
      );
    }
  },
);

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: initState,
  reducers: {
    logout: () => {
      removeCookie("member");
      return { email: "" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending", action);
      })
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled", action.payload);

        setCookie("member", action.payload, 1);

        return {
          ...state,
          email: action.payload.email,
        };
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected", action.payload);
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
