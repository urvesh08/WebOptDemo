import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// Dev dependencies
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

// Local path imports
import {GlobalMetrics} from './theme';
import {Colors} from './theme/Colors';
import {persistor, store} from './redux/store';
import RootNavigation from './navigation/RootNavigation';
import {navigationRef} from './utils/NavigationUtils';

const App: React.FC = () => {
  React.useEffect(() => {
    if (GlobalMetrics.isAndroid) {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(Colors.background);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer ref={navigationRef}>
            <RootNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
