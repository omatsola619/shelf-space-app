import { Image, Pressable, ScrollView, Touchable, TouchableOpacity, View } from "react-native";
import {styles} from '../styling/Home.styled'
import { DATA } from "../data/dummyData";
import BookList from "../components/BookList";
import { useState } from "react";

const romanceBooks = DATA.filter(item => item.genre === 'romance')
const historyBooks = DATA.filter(item => item.genre === 'history')
const latestBooks = DATA.slice(0, 5)

function Home({navigation}) {
    const [data, setData] = useState(DATA)
    const [query, setQuery] = useState('')

    const handleAddBtn = () => {
        navigation.navigate('Add')
    }

    const filteredItems = data.filter((item) => {
        return (
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.genre.toLowerCase().includes(query.toLowerCase()) ||
            item.author.toLowerCase().includes(query.toLowerCase())
        )
    })

    
    return(
        <View style={styles.container}>
            <ScrollView style={{flex: 1, marginTop: 30}}>
                <BookList data={latestBooks} title='Latest books' top />
                <BookList data={romanceBooks} title='Romance' />
                <BookList data={historyBooks} title='History' />
            </ScrollView>
            <TouchableOpacity onPress={handleAddBtn} style={styles.iconWrapper}>
                 <Image source={require('../assets/addIcon.png')} style={styles.addIcon} />
            </TouchableOpacity>
           
        </View>
    )
};

export default Home;
