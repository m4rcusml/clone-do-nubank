import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabRoutes } from './tab.routes';
import { Help } from '../screens/Help';

export type StackRoutesType = {
  main: undefined;
  help: undefined;
}

const Stack = createNativeStackNavigator<StackRoutesType>();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='main'
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='help'
        component={Help}
      />
    </Stack.Navigator>
  )
}