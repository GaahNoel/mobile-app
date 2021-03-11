import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Search from './pages/Search';
import { SearchProvider } from './hooks/SearchContext';
const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <SearchProvider>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown : false }}>
          <Screen name="Home" component={ Home } />
          <Screen name="Search" component={ Search } />
        </Navigator>
      </NavigationContainer>
    </SearchProvider>
  );
}

export default Routes;