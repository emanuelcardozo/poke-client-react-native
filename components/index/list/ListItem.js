import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

function ListItem({ navigation, pokemon, index, slideDirection }){
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(()=> {
        Animated.timing(
            fadeAnim,
            { 
                toValue: 1, 
                duration: 250, 
                delay: index * 100, 
                useNativeDriver: true
            }
        ).start()
    }, [ fadeAnim ])

    const from = slideDirection === 'left' ? -100 : 100

    const animation = {
        opacity: fadeAnim, 
        transform: [{ 
            translateX: fadeAnim.interpolate({ 
                inputRange: [0, 1], 
                outputRange: [ from, 0 ] 
            }) 
        }]
    }

    return(
        <Animated.View style={{ ...style.container, ...animation }}>
            <TouchableOpacity style={ style.button } onPress={ ()=> navigation.navigate('Show', { url: pokemon.url }) }>
                <Text style={ style.text }>
                    { `${ pokemon.name }` }
                </Text>
            </TouchableOpacity>
        </Animated.View>        
    )
}

export default ListItem;

const style = StyleSheet.create({
    container: {
        height: 50,
        width: "70%",
        marginVertical: 10,
        backgroundColor: "white", 
        borderRadius: 20,
        shadowColor: "black",
        shadowRadius: 2,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.5,
        position: "relative",
        elevation: 5
    },
    button: {
        alignItems: "center",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "capitalize",        
    }
})