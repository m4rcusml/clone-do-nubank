import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../screens/Home";
import { ArrowsDownUp } from 'phosphor-react-native';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#810ad0' },
        tabBarActiveTintColor: '#810ad0',
        headerTintColor: 'white',
        tabBarShowLabel: false
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