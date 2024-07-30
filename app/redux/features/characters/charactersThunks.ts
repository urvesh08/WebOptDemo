import {createAsyncThunk} from '@reduxjs/toolkit';
import {get} from '../../../services/api/apiService';
import {ApiResponse, Character} from '../../../types/globalType';

interface FetchCharactersParams {
  page: number;
}

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async ({page}: FetchCharactersParams) => {
    const data = await get<ApiResponse<Character>>(`/character?page=${page}`);
    return {
      results: data.results,
      totalPages: data.info.pages,
      currentPage: page,
    };
  },
);
