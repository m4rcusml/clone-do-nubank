import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../screens/Home";
import { ArrowsDownUp, CurrencyDollarSimple, EnvelopeSimple, Eye, HandbagSimple, Question, User } from 'phosphor-react-native';
import { Cash } from '../screens/Cash';
import { Shop } from '../screens/Shop';
import { TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackRoutesType } from './stack.routes';

const Tab = createBottomTabNavigator();

const headerLeft = () => (
  <TouchableOpacity activeOpacity={0.4} style={{
    backgroundColor: '#fff4',
    borderRadius: 64,
    marginLeft: 20,
    padding: 10
  }}>
    <User color='white' />
  </TouchableOpacity>
);

const headerRight = () => {
  const { navigate } = useNavigation<NavigationProp<StackRoutesType>>();

  return (
    <View style={{
      flexDirection: 'row',
      marginRight: 20,
      gap: 20
    }}>
      <TouchableOpacity activeOpacity={0.6} children={(
        <Eye color='white' />
      )} />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigate('help')}
        children={<Question color='white' />}
      />
      <TouchableOpacity activeOpacity={0.6} children={(
        <EnvelopeSimple color='white' />
      )} />
    </View>
  )
};

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTintColor: 'white',
        tabBarActiveTintColor: '#810ad0',
        headerStyle: { backgroundColor: '#810ad0', height: 100 },
        headerRight,
        headerLeft,
        title: '',
      }}
    >
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => <ArrowsDownUp size={size} color={color} />,
          headerShadowVisible: false
        }}
      />
      <Tab.Screen
        name='cash'
        component={Cash}
        options={{
          tabBarIcon: ({ size, color }) => <CurrencyDollarSimple size={size} color={color} />
        }}
      />
      <Tab.Screen
        name='shop'
        component={Shop}
        options={{
          tabBarIcon: ({ size, color }) => <HandbagSimple size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}