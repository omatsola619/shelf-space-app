import { FlatList, Text, TextInput, View } from "react-native";
import {styles} from '../styling/Home.styled'
import { Feather } from '@expo/vector-icons';
import { DATA } from "../data/dummyData";
import BookList from "../components/BookList";
import { useState } from "react";

function Home({navigation}) {
    const [data, setData] = useState(DATA)
    const [query, setQuery] = useState('')

    const filteredItems = data.filter((item) => {
        return (
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.genre.toLowerCase().includes(query.toLowerCase()) ||
            item.author.toLowerCase().includes(query.toLowerCase())
        )
    })
    
    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Feather name="search" size={22} color="#cccccc" style={styles.searchIcon} />
                <TextInput 
                    style={styles.inputBox} 
                    placeholder="Search books by title" 
                    selectionColor="grey" 
                    keyboardType="default"
                    value={query}
                    onChangeText={(t) => setQuery(t)}
                />
            </View>
            <View style={{flex: 1}}>
                <FlatList 
                    data={filteredItems}
                    renderItem={({item}) => <BookList item={item} navigation={navigation} />}
                    keyExtractor={item => item.isbn}
                />
            </View>
        </View>
    )
};

export default Home;
