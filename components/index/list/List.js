import React from 'react';
import ListItem from './ListItem';
import { StyleSheet, Text, View } from 'react-native';

function List({ pokemons, slideDirection }){
    if( !pokemons.length )
        return(
            <View style={ style.list }>
                <Text>Loading...</Text>
            </View>
        )
    
    return(
        <View style={ style.list }>
        {   
            pokemons.map((pokemon, i) => {
                return <ListItem key={ i } index={ i } pokemon={ pokemon } slideDirection={ slideDirection } />
            })
        }
        </View>
    )
};

export default List

const style = StyleSheet.create({
    list: {
        flex: 9,
        backgroundColor: "skyblue", 
        justifyContent: "center", 
        alignItems: "center"
    }
})