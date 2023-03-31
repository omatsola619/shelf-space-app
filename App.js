import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useCustomFonts } from './utility/font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './components/navigator/TabNavigator';
import BookDetails from './screens/BookDetails';
import { ToastProvider } from 'react-native-toast-notifications'
import ToastComp from './utility/ToastComp';

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ToastProvider
      renderToast={(toastOptions) => <ToastComp />}
    >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={TabNavigator} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Details" component={BookDetails} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    </ToastProvider>
  );
}

