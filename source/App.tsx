import React from 'react';
import ContainerNavigation from './navigations/ContainerNavigation';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {NativeBaseProvider, extendTheme} from 'native-base';

const newColorTheme = {
  brand: {
    900: '#fff',
    800: '#fff',
    700: '#fff',
  },
};
const theme = extendTheme({colors: newColorTheme});
const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <ContainerNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
