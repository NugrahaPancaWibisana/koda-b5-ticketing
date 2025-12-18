import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../api/getMovieData";

const getNowPlaying = createAsyncThunk(
  "movie/getNowPlaying",
  async (_, { rejectWithValue }) => {
    try {
      const res = await movieApi(
        "https://api.themoviedb.org/3/movie/now_playing",
      );
      const data = await res.results;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getMovieGenres = createAsyncThunk(
  "movie/getMovieGenres",
  async (_, { rejectWithValue }) => {
    try {
      const res = await movieApi(
        "https://api.themoviedb.org/3/genre/movie/list",
      );
      const data = await res;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getUpcoming = createAsyncThunk(
  "movie/getUpcoming",
  async (_, { rejectWithValue }) => {
    try {
      const res = await movieApi("https://api.themoviedb.org/3/movie/upcoming");
      const data = await res.results;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  movies: {
    now_playing: [],
    genres: [],
    upcoming: [],
  },
  fetchStatus: {
    movies: {
      now_playing: {
        isLoading: false,
        isSuccess: false,
        isFailed: false,
      },
      genres: {
        isLoading: false,
        isSuccess: false,
        isFailed: false,
      },
      upcoming: {
        isLoading: false,
        isSuccess: false,
        isFailed: false,
      },
    },
  },
  errors: {
    now_playing: null,
    genres: null,
    upcoming: null,
  },
};

const movieSlice = createSlice({
  initialState,
  name: "movie",
  extraReducers: (builder) =>
    builder
      .addAsyncThunk(getNowPlaying, {
        pending: (prevState) => {
          prevState.fetchStatus.movies.now_playing = {
            isLoading: true,
            isSuccess: false,
            isFailed: false,
          };

          prevState.errors.now_playing = null;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.movies.now_playing = {
            isLoading: false,
            isSuccess: true,
            // isFailed: false,
          };

          prevState.movies.now_playing = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.movies.now_playing = {
            isLoading: false,
            // isSuccess: false,
            isFailed: true,
          };

          prevState.errors.now_playing = payload;
        },
      })
      .addAsyncThunk(getMovieGenres, {
        pending: (prevState) => {
          prevState.fetchStatus.movies.genres = {
            isLoading: true,
            isSuccess: false,
            isFailed: false,
          };

          prevState.errors.genres = null;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.movies.genres = {
            isLoading: false,
            isSuccess: true,
            isFailed: false,
          };

          prevState.movies.genres = payload.genres;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.movies.genres = {
            isLoading: false,
            isSuccess: false,
            isFailed: true,
          };

          prevState.errors.genres = payload;
        },
      })
      .addAsyncThunk(getUpcoming, {
        pending: (prevState) => {
          prevState.fetchStatus.movies.upcoming = {
            isLoading: true,
            isSuccess: false,
            isFailed: false,
          };

          prevState.errors.upcoming = null;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.movies.upcoming = {
            isLoading: false,
            isSuccess: true,
            isFailed: false,
          };

          prevState.movies.upcoming = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.movies.upcoming = {
            isLoading: false,
            isSuccess: false,
            isFailed: true,
          };

          prevState.errors.upcoming = payload;
        },
      }),
});

export const movieActions = {
  getNowPlaying,
  getMovieGenres,
  getUpcoming,
  ...movieSlice.actions,
};

export default movieSlice.reducer;
