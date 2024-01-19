import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import { setMessage } from "./messageSlice";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  "auth/register",
  async (
    { email, username, firstname, lastname, password, confirmPwd },
    thunkAPI
  ) => {
    try {
      const response = authService.register({
        email,
        username,
        firstname,
        lastname,
        password,
        confirmPwd,
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await authService.login({ email, password });
      return { user: data };
    } catch (error) {
      thunkAPI.dispatch(setMessage(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;
