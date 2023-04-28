import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../styling/BookList.styled";
import { useNavigation } from '@react-navigation/native';

function BookList({data, title, top}) {
    const navigation = useNavigation()

    const handlePress = ({item}) => {
        navigation.navigate("Details", {bookDetails: item})
    }

    return (
      <View style={styles.container}>
        <View style={styles.sectionWrapper}>
          <Text style={styles.sectionTitle}>{title}</Text>
          {!top && (
            <Pressable>
              <Text style={styles.seeMore}>See More</Text>
            </Pressable>
          )}
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.generalWrapper}
        >
          {data.map((item, i) => (
            <View
              key={i}
              style={[styles.wrapper, i === 0 && styles.firstChild]}
              onPress={handlePress(item)}
            >
              <Image style={styles.productImage} source={item.image} />
              <Text style={styles.productText}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
}

export default BookList;