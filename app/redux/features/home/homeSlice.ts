import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Character} from '../../../types/globalType';

interface UiState {
  searchQuery: string;
  filteredCharacters: Character[];
  sortOrder: 'asc' | 'desc' | null;
  isModalVisible: boolean;
  selectedCharacter: Character | null;
}

const initialState: UiState = {
  searchQuery: '',
  filteredCharacters: [],
  sortOrder: null,
  isModalVisible: false,
  selectedCharacter: null,
};

const uiSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setFilteredCharacters(state, action: PayloadAction<Character[]>) {
      state.filteredCharacters = action.payload;
    },
    setSortOrder(state, action: PayloadAction<'asc' | 'desc' | null>) {
      state.sortOrder = action.payload;
    },
    setIsModalVisible(state, action: PayloadAction<boolean>) {
      state.isModalVisible = action.payload;
    },
    setSelectedCharacter(state, action: PayloadAction<Character | null>) {
      state.selectedCharacter = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setFilteredCharacters,
  setSortOrder,
  setIsModalVisible,
  setSelectedCharacter,
} = uiSlice.actions;

export default uiSlice.reducer;
