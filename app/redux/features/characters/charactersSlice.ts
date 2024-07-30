import {createSlice} from '@reduxjs/toolkit';
import {fetchCharacters} from './charactersThunks';
import {Character} from '../../../types/globalType';

interface CharactersState {
  characters: Character[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  totalPages: number;
}

const initialState: CharactersState = {
  characters: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  totalPages: 1,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload.currentPage === 1) {
          state.characters = action.payload.results;
        } else {
          state.characters = [...state.characters, ...action.payload.results];
        }
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default charactersSlice.reducer;
