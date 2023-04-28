import { TextInput, View } from "react-native";
import { styles } from "../styling/Header.styled";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Header() {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
               <MaterialIcons name="cancel-presentation" size={25} color="black" onPress={handleBack} />
               <TextInput style={styles.searchBox} selectionColor="grey" caretColor='black' placeholder="Search Book, Title, Author or Genre" /> 
            </View>
            
        </View>
    )
}

export default Header;