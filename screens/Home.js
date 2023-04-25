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
            
            <View style={{flex: 1}}>
                <BookList />
            </View>
        </View>
    )
};

export default Home;
