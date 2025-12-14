import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/user.api";

const addUserThunk = createAsyncThunk(
  "user/addUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userApi(payload, 2000, (data) => {
        return { ok: true, data, error: null };
      });
      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const userSignInThunk = createAsyncThunk(
  "user/userSignIn",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const res = await userApi(payload, 2000, (data) => {
        const { users } = getState().user;

        const isExist = users.some(
          (u) => u.email === data.email && u.password === data.password
        );

        if (!isExist) {
          return {
            ok: false,
            data: {},
            error: "Username or password is invalid",
          };
        }

        const user = users.find(
          (u) => u.email === data.email && u.password === data.password
        );

        return { ok: true, data: user, error: null };
      });

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [
    {
      id: 1,
      image: "/",
      first_name: "Nugraha Panca",
      last_name: "Wibisana",
      email: "nugrahapancawibisana@gmail.com",
      password: "wibisana",
      phone_number: "",
    },
  ],
  user_active: {},
  fetchStatus: {
    users: {
      signup: {
        isLoading: false,
        isSuccess: false,
        isFailed: false,
      },
      signin: {
        isLoading: false,
        isSuccess: false,
        isFailed: false,
      },
    },
  },
  errors: {
    user: null,
  },
  nextId: 2,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(addUserThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.users.signup.isLoading = true;
          prevState.fetchStatus.users.signup.isSuccess = false;
          prevState.fetchStatus.users.signup.isFailed = false;
          prevState.errors.user = null;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.users.signup.isLoading = false;
          prevState.fetchStatus.users.signup.isSuccess = true;
          prevState.users.push(payload);
          prevState.nextId++;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.users.signup.isLoading = false;
          prevState.fetchStatus.users.signup.isFailed = true;
          prevState.errors.user = payload;
        },
      })
      .addAsyncThunk(userSignInThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.users.signin.isLoading = true;
          prevState.fetchStatus.users.signin.isSuccess = false;
          prevState.fetchStatus.users.signin.isFailed = false;
          prevState.errors.user = null;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.users.signin.isLoading = false;
          prevState.fetchStatus.users.signin.isSuccess = true;
          Object.assign(prevState.user_active, payload);
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.users.signin.isLoading = false;
          prevState.fetchStatus.users.signin.isFailed = true;
          prevState.errors.user = payload;
        },
      });
  },
});

export const userActions = {
  addUserThunk,
  userSignInThunk,
  ...userSlice.actions,
};

export default userSlice.reducer;
