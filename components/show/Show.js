import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Carousel from './Carousel'

function Show({ navigation, route } ){
    const [ pokemon, setPokemon ] = useState(null)
    
    useEffect(()=> {
        fetch(route.params.url).then((res)=> {
            return res.json()
        }).then((json)=> {
            setPokemon(json)
        }).catch( e => console.log("error", e) )
    }, [])

    if(!pokemon) return <Text>Loading...</Text>

    return(
        <View style={ style.container }>
            <View style={ style.shadowBox }>
                <Text style={ style.name }>{ pokemon.name }</Text>
            </View>
            <Carousel sprites={ pokemon.sprites } />
            <View style={{ ...style.description, ...style.shadowBox }}>
                <Text>{ pokemon.weight }</Text>
                <Text>{ pokemon.height }</Text>
                <View style={{ flexDirection: "row" }}>
                { 
                    pokemon.types.map((t, i)=> {
                        return(
                            <Text key={ i } style={{ marginHorizontal: 5 }}>
                                {t.type.name}
                            </Text>
                        )
                    }) 
                }
                </View>
            </View>
        </View>
    )
};

export default Show;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: "5%"
    },
    name: {
        minHeight: 45,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 10,
    },
    description: {
        flex: 5,
    },
    shadowBox: {
        backgroundColor: 'lightgray',
        width: '70%',
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: .5,
        shadowRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    }
})