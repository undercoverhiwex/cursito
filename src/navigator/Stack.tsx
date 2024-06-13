import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FirstSteps} from '../views/FirstSteps';
import {Home} from '../views/Home';
import {GraphPage} from '../views/GraphPage';

const Stack = createNativeStackNavigator();

export const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="First Steps" component={FirstSteps} />
      <Stack.Screen name="GraphQL" component={GraphPage} />
    </Stack.Navigator>
  );
};
