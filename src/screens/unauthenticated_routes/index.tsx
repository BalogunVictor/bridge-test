import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import Login from './Login';

const UnauthenticatedStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.navigate('Login');
  // }, [navigation]);
  useEffect(() => {
    const backAction = () => {
      // Prevent going back
      return true;
    };

    // Add back button event listener
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove(); // Clean up the listener when component unmounts
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
          presentation: 'fullScreenModal',
          statusBarStyle: 'dark',
        }}
      />
    </Stack.Navigator>
  );
};
export default UnauthenticatedStack;
