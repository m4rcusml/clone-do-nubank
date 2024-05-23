import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/tab.routes';
import { StackRoutes } from './src/routes/stack.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
      <StatusBar backgroundColor='transparent' translucent />
    </NavigationContainer>
  );
}
