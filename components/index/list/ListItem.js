import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text, useWindowDimensions } from 'react-native';

function ListItem({ pokemon, index, slideDirection }){
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
        <Animated.View style={{ ...style.listItem, ...animation }}>
            <Text style={ style.text }>
                { `${ pokemon.name }` }
            </Text>
        </Animated.View>        
    )
}

export default ListItem;

const style = StyleSheet.create({
    listItem: {
        height: 50,
        width: "70%",
        marginVertical: 10,
        backgroundColor: "white", 
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 20,
        shadowColor: "black",
        shadowRadius: 2,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.5,
        position: "relative",
        elevation: 5
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "capitalize",        
    }
})