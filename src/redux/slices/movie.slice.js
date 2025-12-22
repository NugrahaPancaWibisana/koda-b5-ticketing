import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../api/getMovieData";

const getNowPlaying = createAsyncThunk(
  "movie/getNowPlaying",
  async (_, { rejectWithValue }) => {
    try {
      const allNowPlaying = [];

      for (let i = 1; i <= 15; i++) {
        const res = await movieApi(
          `https://api.themoviedb.org/3/movie/now_playing?language=en-US&region=US&page=${i}`,
        );
        const data = await res.results;

        allNowPlaying.push(data);
      }

      const nowPlaying = Promise.all(allNowPlaying)
        .then((results) => {
          return results.flat(Infinity);
        })
        .catch((e) => {
          throw new Error(e);
        });

      return nowPlaying;
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
      const allUpcoming = [];

      for (let i = 1; i <= 5; i++) {
        const res = await movieApi(
          `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${i}`,
        );
        const data = await res.results;

        allUpcoming.push(data);
      }

      const upcoming = Promise.all(allUpcoming)
        .then((results) => {
          return results.flat(Infinity);
        })
        .catch((e) => {
          throw new Error(e);
        });

      return upcoming;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getDetailMovie = createAsyncThunk(
  "movie/getDetailMovie",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await movieApi(
        `https://api.themoviedb.org/3/movie/${payload}`,
      );
      const data = await res;

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
    detail_movie: {},
  },
  fetchStatus: {
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
    detail_movie: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
  },
  errors: {
    now_playing: null,
    genres: null,
    upcoming: null,
    detail_movie: null,
  },
};

const movieSlice = createSlice({
  initialState,
  name: "movie",
  extraReducers: (builder) =>
    builder
      .addAsyncThunk(getNowPlaying, {
        pending: (prevState) => {
          prevState.fetchStatus.now_playing.isLoading = true;
          prevState.fetchStatus.now_playing.isSuccess = false;
          prevState.fetchStatus.now_playing.isFailed = false;

          prevState.errors.now_playing = null;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.now_playing.isLoading = false;
          prevState.fetchStatus.now_playing.isSuccess = true;

          prevState.movies.now_playing = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.now_playing.isLoading = false;
          prevState.fetchStatus.now_playing.isFailed = true;

          prevState.errors.now_playing = payload;
        },
      })
      .addAsyncThunk(getMovieGenres, {
        pending: (prevState) => {
          prevState.fetchStatus.genres.isLoading = true;
          prevState.fetchStatus.genres.isSuccess = false;
          prevState.fetchStatus.genres.isFailed = false;

          prevState.errors.genres = null;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.genres.isLoading = false;
          prevState.fetchStatus.genres.isSuccess = true;

          prevState.movies.genres = payload.genres;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.genres.isLoading = false;
          prevState.fetchStatus.genres.isFailed = true;

          prevState.errors.genres = payload;
        },
      })
      .addAsyncThunk(getUpcoming, {
        pending: (prevState) => {
          prevState.fetchStatus.upcoming.isLoading = true;
          prevState.fetchStatus.upcoming.isSuccess = false;
          prevState.fetchStatus.upcoming.isFailed = false;

          prevState.errors.upcoming = null;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.upcoming.isLoading = false;
          prevState.fetchStatus.upcoming.isSuccess = true;

          prevState.movies.upcoming = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.upcoming.isLoading = false;
          prevState.fetchStatus.upcoming.isFailed = true;

          prevState.errors.upcoming = payload;
        },
      })
      .addAsyncThunk(getDetailMovie, {
        pending: (prevState) => {
          prevState.fetchStatus.detail_movie.isLoading = true;
          prevState.fetchStatus.detail_movie.isSuccess = false;
          prevState.fetchStatus.detail_movie.isFailed = false;

          prevState.errors.detail_movie = null;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.detail_movie.isLoading = false;
          prevState.fetchStatus.detail_movie.isSuccess = true;

          prevState.movies.detail_movie = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.detail_movie.isLoading = false;
          prevState.fetchStatus.detail_movie.isFailed = true;

          prevState.errors.detail_movie = payload;
        },
      }),
});

export const movieActions = {
  getNowPlaying,
  getMovieGenres,
  getUpcoming,
  getDetailMovie,
  ...movieSlice.actions,
};

export default movieSlice.reducer;
