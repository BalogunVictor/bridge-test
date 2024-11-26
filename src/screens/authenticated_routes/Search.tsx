import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CrossIcon, SettingsIcon} from '../../../assets/icons';
import {
  colors,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../common/GlobalStyles';
import CustomText from '../../component/CustomText';
import {filterCategories} from '../../component/FilterCategories';
import {filterProducts} from '../../component/FilterProduct';
import WithAauthenticatedWrapper from "../../component/HOC's/withAuthenticatedWrapper";
import CustomTextInput from '../../component/Input/CustomTextInput';
import {wordLimit} from '../../component/WordLimit';
import {
  useFetchCategories,
  useFetchProducts,
} from '../../services/queries/products';
import CustomLoader from '../../component/CustomLoader';
import {getItem, removeItem, setItem} from '../../utils/storage';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const getStatusBarHeight = () => {
    return Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
  };
  const {data: Categories, isLoading} = useFetchCategories();
  const {data: Products} = useFetchProducts();
  const filteredProducts = filterProducts(search, Products);
  const filteredCategories = filterCategories(search, Categories);
  const SEARCH_HISTORY_KEY = 'searchHistory';

  // Save search item to AsyncStorage using storage utils
  const saveSearch = async (query: string) => {
    if (!query.trim()) {
      return;
    }

    try {
      const history = (await getItem(SEARCH_HISTORY_KEY)) || [];

      // Avoid duplicates
      if (!history.includes(query)) {
        const updatedHistory = [query, ...history];
        await setItem(SEARCH_HISTORY_KEY, updatedHistory);
        setSearchHistory(updatedHistory);
      }
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  };

  // Load search history using storage utils
  const loadSearchHistory = async () => {
    try {
      const history = (await getItem(SEARCH_HISTORY_KEY)) || [];
      setSearchHistory(history);
    } catch (error) {
      console.error('Error loading search history:', error);
    }
  };

  // Clear search history using storage utils
  const clearSearchHistory = async () => {
    try {
      await removeItem(SEARCH_HISTORY_KEY);
      setSearchHistory([]);
    } catch (error) {
      console.error('Error clearing search history:', error);
    }
  };

  useEffect(() => {
    loadSearchHistory();
  }, []);

  useEffect(() => {
    if (search.trim()) {
      saveSearch(search);
    }
  }, [search]);

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.container1, {paddingTop: getStatusBarHeight()}]}>
        {/* Search Bar Section */}
        <View style={styles.inputRow}>
          <View style={styles.input}>
            <CustomTextInput
              value={search}
              setValue={setSearch}
              placeholder="Search"
            />
          </View>
          <View style={styles.settingsIconWrapper}>
            <SettingsIcon />
          </View>
        </View>

        {/* Search History Section */}
        <View>
          <View style={styles.searchHistory}>
            <CustomText
              text="Search History"
              size={18}
              weight={800}
              color={colors.dark_grey}
            />
            <TouchableOpacity onPress={clearSearchHistory}>
              <CustomText
                text="Clear"
                size={14}
                weight={400}
                color={colors.light_yellow}
              />
            </TouchableOpacity>
          </View>
          {/* Map Dummy Search History */}
          <View style={styles.historyList}>
            {searchHistory.map((query, index) => (
              <TouchableOpacity key={index} onPress={() => setSearch(query)}>
                <CustomText
                  key={index}
                  text={query}
                  size={14}
                  weight={400}
                  color={colors.very_light_grey}
                  style={styles.historyItem}
                />
              </TouchableOpacity>
            ))}
          </View>
          {/*categories */}
          <CustomLoader visible={isLoading} text="Loading, please wait..." />
          {search.length > 1 ? (
            <View style={styles.cardsContainer}>
              {filteredCategories?.map((category: any, index: any) => (
                <View style={styles.card} key={index}>
                  <Image
                    source={require('../../../assets/images/pngfuel6.png')}
                    style={styles.cardImage}
                  />
                  <CustomText
                    text={category}
                    size={18}
                    weight={800}
                    color={colors.dark_grey}
                    style={styles.cardText}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.cardsContainer}>
              {Categories?.map((category: any, index: any) => (
                <View style={styles.card} key={index}>
                  <Image
                    source={require('../../../assets/images/pngfuel6.png')}
                    style={styles.cardImage}
                  />
                  <CustomText
                    text={category}
                    size={18}
                    weight={800}
                    color={colors.dark_grey}
                    style={styles.cardText}
                  />
                </View>
              ))}
            </View>
          )}

          {/*product */}
          <View style={styles.cardsContainer}>
            {filterProducts.length > 1 &&
              filteredProducts.map(product => (
                <View style={styles.productCard} key={product.id}>
                  <Image
                    source={{uri: product.image}}
                    style={styles.cardImage}
                  />
                  <CustomText
                    text={wordLimit(10, product.title)}
                    size={20}
                    weight={400}
                    color={colors.dark_grey}
                  />
                  <CustomText
                    text={wordLimit(10, product.description)}
                    size={16}
                    weight={400}
                    color={colors.text_grey}
                  />
                  <CustomText
                    text={product.price}
                    size={14}
                    weight={400}
                    color={colors.light_yellow}
                    style={styles.price}
                  />
                  <View style={styles.crossIconWrapper}>
                    <CrossIcon />
                  </View>
                </View>
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const SearchWithAuthenticatedWrapper = WithAauthenticatedWrapper(Search, true);

export default SearchWithAuthenticatedWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: pixelSizeHorizontal(20),
    marginTop: pixelSizeVertical(20),
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  settingsIconWrapper: {
    marginLeft: 10,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: pixelSizeVertical(20),
  },
  historyList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: pixelSizeVertical(20),
    paddingVertical: pixelSizeVertical(10),
  },
  historyItem: {
    marginBottom: pixelSizeVertical(10),
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: pixelSizeVertical(20),
  },
  card: {
    backgroundColor: colors.semi_very_light_green,
    borderColor: colors.semi_very_dark_green,
    borderWidth: 1,
    borderRadius: 20,
    width: '48%',
    marginBottom: pixelSizeVertical(20),
    alignItems: 'center',
    padding: pixelSizeVertical(10),
  },
  cardImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: pixelSizeVertical(10),
  },
  cardText: {
    textAlign: 'center',
    paddingVertical: pixelSizeVertical(20),
  },
  productCard: {
    borderColor: colors.semi_very_light_grey,
    borderWidth: 1,
    borderRadius: 20,
    width: '48%',
    marginBottom: pixelSizeVertical(20),
    paddingHorizontal: pixelSizeHorizontal(10),
    padding: pixelSizeVertical(10),
  },
  price: {
    alignSelf: 'flex-start',
  },
  crossIconWrapper: {
    backgroundColor: colors.semi_very_dark_green,
    alignSelf: 'flex-end',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
