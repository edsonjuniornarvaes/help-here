import { useCallback } from 'react';
import { Platform, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import { HomeView } from '@/screens/home';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  const SvgMemoized = useCallback((focused, routeParam) => {
    if (routeParam === 'Home') return <Text>Icon</Text>;

    return <Text>Icon</Text>;
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: '#828C99',
        tabBarActiveTintColor: '#2C91AD',
        tabBarStyle: {
          height: 70,
          paddingTop: 12,
          paddingBottom: isIphoneX() ? getBottomSpace() : 12,
          borderTopColor: Platform.OS === 'ios' ? '#ebebeb' : 'transparent',
        },
        tabBarLabelStyle: {
          marginTop: 8,
          fontSize: 10,
          fontStyle: 'normal',
          fontWeight: 'bold',
        },
        tabBarIcon: ({ focused }) => SvgMemoized(focused, route.name),
      })}
    >
      <Tab.Screen name="Home" component={HomeView} />
    </Tab.Navigator>
  );
}
