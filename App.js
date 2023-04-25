import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useCustomFonts } from './utility/font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from './screens/BookDetails';
import { ToastProvider } from 'react-native-toast-notifications'
import ToastComp from './utility/ToastComp';
import Home from './screens/Home';
import AddBook from './screens/AddBook';
import Search from './screens/Search';
import { Feather } from '@expo/vector-icons';

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
        <Stack.Screen name="Discover" component={Home} options={{
          headerRight: () => <Feather name="search" size={22} color="black" />,
          headerTitleStyle: {
            fontFamily: 'Poppins_600',
            fontSize: 20
          }
        }}/>
        <Stack.Screen name="Details" component={BookDetails} options={{ 
          headerShown: false,
        }} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Add" component={AddBook} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    </ToastProvider>
  );
}

