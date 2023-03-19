import { Text, TextInput, View } from "react-native";
import {styles} from '../styling/Home.styled'
import { Feather } from '@expo/vector-icons';

function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Feather name="search" size={22} color="#cccccc" style={styles.searchIcon} />
                <TextInput style={styles.inputBox} placeholder="Search books by title" />
            </View>
            <View>
                
            </View>
        </View>
    )
};

export default Home;
