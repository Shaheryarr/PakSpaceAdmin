/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import Routes from './src/routes';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NativeBaseProvider>
					<Routes />
				</NativeBaseProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
