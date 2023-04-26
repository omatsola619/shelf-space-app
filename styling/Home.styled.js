import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 40,
        marginVertical: 25,
        height: 50,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginHorizontal: 10,
    },
    inputBox: {
        flex: 1,
        fontSize: 16,
    },
    searchIcon: {
        marginHorizontal: 10,
    },
    iconWrapper: {
        position: "absolute",
        top: '85%',
        left: '78%',
    },
    addIcon: {
        width: 70,
        height: 70,
    }
});