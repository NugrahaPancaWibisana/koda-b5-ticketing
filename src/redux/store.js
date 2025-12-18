import { configureStore } from "@reduxjs/toolkit";
import {
  persistCombineReducers,
  persistStore,
  PERSIST,
  REHYDRATE,
  FLUSH,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./slices/user.slice";
import movieReducer from "./slices/movie.slice";

const persistConfig = {
  key: "data",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  user: userReducer,
  movie: movieReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE, FLUSH, REGISTER, PURGE],
      },
    }),
});

export const persistedStore = persistStore(store);
export default store;
