import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  HomeIcon,
  SearchIcon,
  TrendIcon,
  OrderIcon,
  ProfileIcon,
} from '../../../assets/icons';
import {colors, fontPixel, pixelSizeVertical} from '../../common/GlobalStyles';
import Home from './Home';
import Order from './Order';
import Profile from './Profile';
import Search from './Search';
import Trend from './Trend';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: 'Home',
    component: Home,
    icon: HomeIcon,
  },
  {
    name: 'Search',
    component: Search,
    icon: SearchIcon,
  },
  {
    name: 'Trend',
    component: Trend,
    icon: TrendIcon,
  },
  {
    name: 'Order',
    component: Order,
    icon: OrderIcon,
  },
  {
    name: 'Profile',
    component: Profile,
    icon: ProfileIcon,
  },
];

const AuthenticatedStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: pixelSizeVertical(8),
          paddingBottom: pixelSizeVertical(4),
          height: pixelSizeVertical(65),
          backgroundColor: colors.white,
        },
        tabBarActiveTintColor: colors.semi_very_dark_green,
        tabBarInactiveTintColor: colors.text_grey,
        tabBarItemStyle: {
          paddingBottom: pixelSizeVertical(4),
        },
        tabBarIconStyle: {
          paddingHorizontal: '50%',
          marginBottom: pixelSizeVertical(6),
        },
        tabBarLabelStyle: {
          fontSize: fontPixel(11),
          fontFamily: 'Jost',
        },
      }}>
      {tabScreens.map(({name, component, icon: IconComponent}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <IconComponent
                color={focused ? colors.semi_very_dark_green : colors.text_grey}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AuthenticatedStack;
