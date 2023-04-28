import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputForm: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    inputBox: {
        width: '100%',
        height: 46,
        borderColor: '#B6B6B6',
        borderWidth: 1,
        marginBottom: 30,
        borderRadius: 7,
        paddingLeft: 15
    },
    inputText: {
        fontSize: 14,
        fontFamily: 'Poppins_500',
        marginBottom: 5,
    },
    imagePicker: {
        marginBottom: 30,
    },
    imageBox: {
        height: 50,
        borderRadius: 7,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#0366d6',
        justifyContent: "center",
    },
    buttonText: {
        color: '#0366d6',
        fontSize: 15,
        paddingRight: 10,
        fontFamily: 'Poppins_500'
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitBtn: {
        width: '100%',
        height: 50,
        borderRadius: 7,
        backgroundColor: '#0366d6',
        justifyContent: 'center',
    },
    submitText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Poppins_500',
        textAlign: 'center'
    }
});