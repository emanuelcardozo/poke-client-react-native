import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

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
        <View>
            <Text>{ pokemon.name }</Text>
            <Text>{ pokemon.weight }</Text>
            <Text>{ pokemon.height }</Text>
            { pokemon.types.map((t, i)=> {
                return(
                    <Text key={ i }>{t.type.name}</Text>
                )
            }) }
        </View>
    )
};

export default Show;