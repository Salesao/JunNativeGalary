import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Navigation } from './router/Navigation';
import configStore from './store/index';

const store = configStore()

const App = () => {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation/>
      </Provider>
    </SafeAreaProvider>
  );
};


export default App;
