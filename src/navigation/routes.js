import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Catalog from '../pages/Catalog';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Catalog" component={Catalog} />
      </Stack.Navigator>
    </NavigationContainer>
)

export default Routes;