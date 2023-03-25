import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddBook from '../../screens/AddBook';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const tabOptions = {
    tabBarActiveTintColor: '#0366d6',
    tabBarInactiveTintColor: 'grey',
    tabBarLabelStyle: { fontSize: 12 },
    tabBarHideOnKeyboard: true,
    headerTitleAlign: 'left',
    headerTitleStyle: {
      fontFamily: 'Montserrat_700',
      fontSize: 18,
    },
    tabBarLabelStyle: {
      fontFamily: 'Montserrat_600',
    },
    headerRight: () => {
      return (
        <View style={styles.headerRightItems}>
          <Ionicons name="notifications-outline" size={24} color="#0366d6" />
          <SimpleLineIcons name="options-vertical" size={18} color="#0366d6" style={styles.notifIcon} />
        </View>
      )
    }
  }

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={tabOptions}>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
            headerTitle: 'Shelf Space'
          }} />
          <Tab.Screen name="Add" component={AddBook} options={{
            tabBarIcon: ({ color }) => <Entypo name="squared-plus" size={24} color={color} />,
            title: "Add Book"
          }} />
          <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={22} color={color} />,
            title: "Profile",
          }} />
        </Tab.Navigator>
      )
}

export default TabNavigator

const styles = StyleSheet.create({
    headerRightItems: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    notifIcon: {
      paddingRight: 10,
      paddingLeft: 20,
    }
  })