import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 150,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingTop: 50,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    searchBox: {
        borderWidth: 1,
        borderColor: 'red',
        width: '100%',
    },
    searchWrapper: {
        width: '90%',
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    
});