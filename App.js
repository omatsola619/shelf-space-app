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
import Header from './components/Header';

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ToastProvider renderToast={(toastOptions) => <ToastComp />}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <Feather
                  name="search"
                  size={24}
                  color="black"
                  onPress={() => navigation.navigate("Search")}
                />
              ),
              headerTitleStyle: {
                fontFamily: "Poppins_600",
                fontSize: 22,
              },
              title: 'Discover'
            })}
          />
          <Stack.Screen
            name="Details"
            component={BookDetails}
            options={{
              headerShown: false,
              
            }}
          />
          <Stack.Screen name="Search" component={Search} options={{
            header: () => <Header />
          }} />
          <Stack.Screen name="Add" component={AddBook} options={{
            headerTitleAlign: 'center',
            title: 'Add Book',
            headerTitleStyle: {
              fontFamily: 'Poppins_600',
              fontSize: 20
            }
          }} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ToastProvider>
  );
}

