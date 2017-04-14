import React from 'react';
import { AppRegistry } from 'react-native';
import Root from './components/Root';
import configureStore from './configureStore';

const store = configureStore();
const GasNow = () => <Root store={store} />
export default GasNow;

AppRegistry.registerComponent('GasNow', () => GasNow);
