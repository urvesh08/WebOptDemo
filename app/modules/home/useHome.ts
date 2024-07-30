import {useEffect, useCallback, useRef} from 'react';
import {FlatList} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../../redux/store';
import {fetchCharacters} from '../../redux/features/characters/charactersThunks';
import {
  setSearchQuery,
  setFilteredCharacters,
  setSortOrder,
  setIsModalVisible,
  setSelectedCharacter,
} from '../../redux/features/home/homeSlice';
import {Character} from '../../types/globalType';

const useHome = () => {
  // Redux dispatch and state
  const dispatch = useDispatch<AppDispatch>();
  const {characters, status, currentPage, totalPages} = useSelector(
    (state: RootState) => state.characters,
  );
  const {
    searchQuery,
    filteredCharacters,
    sortOrder,
    isModalVisible,
    selectedCharacter,
  } = useSelector((state: RootState) => state.home);

  // Refs
  const flatListRef = useRef<FlatList<Character>>(null);

  // Fetch initial data
  useEffect(() => {
    dispatch(fetchCharacters({page: 1}));
  }, [dispatch]);

  // Filter and sort characters
  useEffect(() => {
    let filtered = characters.filter((character: Character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    if (sortOrder) {
      filtered = filtered.sort((a, b) =>
        sortOrder === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name),
      );
    }

    dispatch(setFilteredCharacters(filtered));
  }, [searchQuery, characters, sortOrder, dispatch]);

  // Load more characters when scrolling (PAGINATION WITH INFINTE SCOLL)
  const handleLoadMore = useCallback(() => {
    if (currentPage < totalPages && status !== 'loading') {
      dispatch(fetchCharacters({page: currentPage + 1}));
    }
  }, [currentPage, totalPages, status, dispatch]);

  const handleCardPress = useCallback(
    (character: Character) => {
      dispatch(setSelectedCharacter(character));
      dispatch(setIsModalVisible(true));
    },
    [dispatch],
  );

  const resetFilter = useCallback(() => {
    dispatch(setSearchQuery(''));
    dispatch(setSortOrder(null));
    dispatch(fetchCharacters({page: 1}));
    // Scroll to top when filter is reset
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }, [dispatch]);

  const updateSortOrder = useCallback(
    (order: 'asc' | 'desc' | null) => {
      dispatch(setSortOrder(order));
      // Scroll to top when sort order is changed
      flatListRef.current?.scrollToOffset({offset: 0, animated: true});
    },
    [dispatch],
  );

  return {
    searchQuery,
    setSearchQuery: (query: string) => dispatch(setSearchQuery(query)),
    filteredCharacters,
    status,
    currentPage,
    totalPages,
    flatListRef,
    handleLoadMore,
    setSortOrder: updateSortOrder,
    resetFilter,
    handleCardPress,
    setIsModalVisible: (visible: boolean) =>
      dispatch(setIsModalVisible(visible)),
    setSelectedCharacter: (character: Character | null) =>
      dispatch(setSelectedCharacter(character)),
    isModalVisible,
    selectedCharacter,
  };
};

export default useHome;
