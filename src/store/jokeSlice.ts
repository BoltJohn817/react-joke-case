import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from './store';
import { Joke, JOKE_STATE } from '../types';

interface JokeState {
  joke: Joke,
  jokeState: JOKE_STATE,
  jokeLoadingError: boolean,
}

const initialState: JokeState = {
  joke: {},
  jokeState: JOKE_STATE.STATE_LOADING,
  jokeLoadingError: false
}

const JOKE_REQUEST = "https://karljoke.herokuapp.com/jokes/random";

export const fetchJoke = createAsyncThunk('joke/fetchJoke', async() => {
  const response = await fetch(JOKE_REQUEST);
  return await response.json();
});

export const jokeSlice = createSlice( {
  name: 'joke',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchJoke.pending, (state) => {
      state.jokeState = JOKE_STATE.STATE_LOADING;
      state.jokeLoadingError = false;
    })
    .addCase(fetchJoke.fulfilled, (state, action) => {
      state.jokeState = JOKE_STATE.STATE_DONE
      state.joke = action.payload;
    })
    .addCase(fetchJoke.rejected, (state) => {
      state.jokeState = JOKE_STATE.STATE_DONE;
      state.jokeLoadingError = true;
    })
  }
})

export const selectJoke = (state: RootState) => state.joke;

export default jokeSlice.reducer;