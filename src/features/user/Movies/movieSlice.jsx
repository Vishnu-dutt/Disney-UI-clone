import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommends: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "move",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = ActionCodeOperation.payload.recommend;
      state.newDisney = ActionCodeOperation.payload.newDisney;
      state.original = ActionCodeOperation.payload.original;
      state.trending = ActionCodeOperation.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.Original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;