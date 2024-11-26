import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import ErrorBoundary from './src/component/ErrorBoundary';
import AuthenticatedStack from './src/screens/authenticated_routes/index';
import UnauthenticatedStack from './src/screens/unauthenticated_routes/index';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthenticatedStack"
          component={AuthenticatedStack}
          options={{
            headerShown: false,
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
            statusBarStyle: 'dark',
          }}
        />
        <Stack.Screen
          name="UnauthenticatedStack"
          component={UnauthenticatedStack}
          options={{
            headerShown: false,
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </ErrorBoundary>
  );
}
