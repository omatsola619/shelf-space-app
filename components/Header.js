import { Text, View } from "react-native";
import { styles } from "../styling/Home.styled";

function Header({title, style, headerRight}) {

    return (
        <View style={[styles.container, options.headerStyle]}>
            <Text style={styles.title}>{title} </Text>
            <Text>Hello search box</Text>
        </View>
    )
}

export default Header;