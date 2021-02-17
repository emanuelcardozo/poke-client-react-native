import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

function NavigationButtons({ nextPage, prevPage }){

    return(
        <View style={ style.container }>
            <TouchableOpacity style={ style.button } onPress={ prevPage }>
                <Text style={ style.text }>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ style.button } onPress={ nextPage }>
                <Text style={ style.text }>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavigationButtons;

const style = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 200, 0.4)',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    button: {
        width: '20%',
        height: '50%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        borderRadius: 50,
        shadowColor: "black",
        shadowRadius: 2,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.5,
        elevation: 5
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})