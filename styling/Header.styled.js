import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 150,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingTop: 50,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    searchBox: {
        width: '100%',
        height: 50,
        paddingLeft: 20,
        fontSize: 15,
        fontFamily: 'Poppins_400',
    },
    searchWrapper: {
        width: '100%',
        paddingHorizontal: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});