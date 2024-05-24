import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabRoutes } from './tab.routes';
import { Help } from '../screens/Help';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { X } from 'phosphor-react-native';

export type StackRoutesType = {
  main: undefined;
  help: undefined;
}

const Stack = createNativeStackNavigator<StackRoutesType>();

const headerLeft = () => {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={goBack}
    >
      <X color='#810ad0' />
    </TouchableOpacity>
  )
}

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 14,
          color: '#666'
        },
        headerLeft
      }}
    >
      <Stack.Screen
        name='main'
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='help'
        component={Help}
        options={{ title: 'ME AJUDA' }}
      />
    </Stack.Navigator>
  )
}