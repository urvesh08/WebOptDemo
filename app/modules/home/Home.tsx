import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from 'react-native';

// dev dependencies
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';

// local dependencies
import styles from './homeStyle';
import useHome from './useHome';
import {Strings} from '../../constants';
import {icons} from '../../assets/icons';
import {Colors, GlobalMetrics} from '../../theme';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharacterDetailModal from '../../components/CharacterDetailModal/CharacterDetailModal';

const Home: React.FC = () => {
  // hooks from controller
  const {
    status,
    flatListRef,
    searchQuery,
    isModalVisible,
    selectedCharacter,
    filteredCharacters,
    resetFilter,
    setSortOrder,
    handleLoadMore,
    setSearchQuery,
    handleCardPress,

    setIsModalVisible,
  } = useHome();

  // if data not found
  const NoDataFound = () => (
    <View style={styles.noDatacontainer}>
      <Text style={styles.text}>{Strings.noDataFound}</Text>
    </View>
  );

  return (
    <MenuProvider>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={GlobalMetrics.isIos ? 'padding' : 'height'}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{Strings.welcomeMessage}</Text>
          </View>

          <View style={styles.searchAndFilterContainer}>
            <View style={styles.iconAndInputContaine}>
              <Image source={icons.search} style={styles.searchIcon} />
              <TextInput
                placeholder={Strings.searchPlaceholder}
                onChangeText={setSearchQuery}
                value={searchQuery}
                placeholderTextColor={Colors.placeholder}
                style={styles.searchInput}
              />
            </View>
            <Menu>
              <MenuTrigger>
                <Image source={icons.filter2} style={styles.filterIcon} />
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={styles.filterMenu}>
                <MenuOption onSelect={() => setSortOrder('asc')}>
                  <Text style={styles.menuText}>
                    {Strings.filterOptions.nameAsc}
                  </Text>
                </MenuOption>
                <View style={styles.separator} />
                <MenuOption onSelect={() => setSortOrder('desc')}>
                  <Text style={styles.menuText}>
                    {Strings.filterOptions.nameDesc}
                  </Text>
                </MenuOption>
                <View style={styles.separator} />
                <MenuOption onSelect={resetFilter}>
                  <Text style={styles.menuText}>
                    {Strings.filterOptions.reset}
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>

          <FlatList
            ref={flatListRef}
            showsVerticalScrollIndicator={false}
            data={filteredCharacters}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CharacterCard
                character={item}
                onPressCard={() => handleCardPress(item)}
              />
            )}
            numColumns={2}
            contentContainerStyle={styles.list}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
              status === 'loading' ? (
                <ActivityIndicator size="large" color={Colors.primary} />
              ) : null
            }
            ListEmptyComponent={status !== 'loading' ? <NoDataFound /> : null}
          />
        </View>
      </KeyboardAvoidingView>

      <CharacterDetailModal
        isVisible={isModalVisible}
        character={selectedCharacter}
        onClose={() => setIsModalVisible(false)}
      />
    </MenuProvider>
  );
};

export default Home;
