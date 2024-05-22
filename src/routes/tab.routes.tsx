import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../screens/Home";
import { ArrowsDownUp } from 'phosphor-react-native';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#7b12da'
      }}
    >
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => <ArrowsDownUp size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}