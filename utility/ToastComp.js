import { StyleSheet, Text, View } from "react-native";


function ToastComp () {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>There was an error in your form</Text>
        </View>
    )
}

export default ToastComp;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 50,
        borderLeftColor: 'red',
        borderLeftWidth: 4,
        borderRadius: 4,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 100,
        justifyContent: 'center',
    },
    info: {
        color: 'grey',
        paddingLeft: 20,
        fontFamily: 'Montserrat_600',
        fontSize: 15
    }
})