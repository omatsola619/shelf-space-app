import { Text, TextInput, View } from "react-native";
import { styles } from "../styling/Header.styled";
import { MaterialIcons } from '@expo/vector-icons';

function Header({options}) {

    return (
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
               <MaterialIcons name="cancel-presentation" size={25} color="black" />
               <TextInput style={styles.searchBox} selectionColor="grey" caretColor='black' placeholder="Search Book, Title, Author or Genre" /> 
            </View>
            
        </View>
    )
}

export default Header;