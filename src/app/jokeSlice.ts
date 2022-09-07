import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
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
    setJoke: (state, action: PayloadAction<Object>) => {
      state.joke = action.payload;
    },
    setLoadState: (state, action: PayloadAction<JOKE_STATE>) => {
      state.jokeState = action.payload;
    },
    setLoadingError: (state, action: PayloadAction<boolean>) => {
      state.jokeLoadingError = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchJoke.pending, (state, action) => {
      state.jokeState = JOKE_STATE.STATE_LOADING;
      state.jokeLoadingError = false;
    })
    .addCase(fetchJoke.fulfilled, (state, action) => {
      state.jokeState = JOKE_STATE.STATE_DONE
      state.joke = action.payload;
    })
    .addCase(fetchJoke.rejected, (state, action) => {
      state.jokeState = JOKE_STATE.STATE_DONE;
      state.jokeLoadingError = true;
    })
  }
})

export const selectJoke = (state: RootState) => state.joke;

export default jokeSlice.reducer;