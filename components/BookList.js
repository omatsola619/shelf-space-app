import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../styling/BookList.styled";
import { DATA } from "../data/dummyData";

function BookList({item, navigation}) {

    const handlePress = () => {
        navigation.navigate("Details", {bookDetails: item})
    }
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.generalWrapper}>
                {
                DATA.map((item, i) => (
                    <View key={i} style={[styles.wrapper, i === 0 && styles.firstChild]}>
                        <Image style={styles.productImage} source={item.image} />
                        <Text>{item.title}</Text>
                    </View>
                ))
            }
            </ScrollView>
        </View>
    )
}

export default BookList;