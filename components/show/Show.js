import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Carousel from './Carousel'
import Description from './Description'
import PokemonService from '../../services/PokemonService'

function Show({ navigation, route } ){
    const [ pokemon, setPokemon ] = useState(null)
    
    useEffect(()=> {
        const id = route.params.url.split('pokemon/')[1]
        PokemonService.getPokemon(id)
            .then( response => {
                setPokemon(response)
            })
    }, [])

    if(!pokemon) return <Text>Loading...</Text>

    return(
        <View style={ style.container }>
            <View style={ style.shadowBox }>
                <Text style={ style.name }>{ pokemon.name }</Text>
            </View>
            <Carousel sprites={ pokemon.sprites } />
            <Description pokemon={ pokemon } />
        </View>
    )
};

export default Show;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: "5%",
        backgroundColor: "#9BBFA1"
    },
    name: {
        minHeight: 45,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 10,
    },
    shadowBox: {
        backgroundColor: '#E7F2DC',
        width: '70%',
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: .5,
        shadowRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
})