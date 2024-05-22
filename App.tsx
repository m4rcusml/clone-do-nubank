import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/tab.routes';

export default function App() {
  return (
    <NavigationContainer>
      <TabRoutes />
      <StatusBar backgroundColor='transparent' translucent />
    </NavigationContainer>
  );
}
