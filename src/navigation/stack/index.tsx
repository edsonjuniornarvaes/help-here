import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigation } from '../tab';

const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="StackHome" component={TabNavigation} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
