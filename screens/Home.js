import { FlatList, Text, TextInput, View } from "react-native";
import {styles} from '../styling/Home.styled'
import { Feather } from '@expo/vector-icons';
import { DATA } from "../data/dummyData";
import BookList from "../components/BookList";

function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Feather name="search" size={22} color="#cccccc" style={styles.searchIcon} />
                <TextInput style={styles.inputBox} placeholder="Search books by title" />
            </View>
            <View style={{flex: 1}}>
                <FlatList 
                    data={DATA}
                    renderItem={BookList}
                    keyExtractor={item => item.isbn}
                />
            </View>
        </View>
    )
};

export default Home;
