import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Types from './Types'

const LANGUAGE_INDEX = 2

function Description({ pokemon }){

    const { characteristic } = pokemon
    let highestStat = 'Unknown'
    let description = 'Unknown'

    if(characteristic){
        highestStat = characteristic.highest_stat.name
        description = characteristic.descriptions[LANGUAGE_INDEX].description
    }

    return(
        <View style={{ ...style.description, ...style.shadowBox }}>
            <Text style={ style.title }>Description</Text>
            <View style={ style.row }>
                <View style={{ width: "40%" }}>
                    <Text style={ style.label }>Weight</Text>
                    <Text style={ style.data }>{ pokemon.weight }</Text>
                </View>
                <View style={{ width: "40%" }}>
                    <Text style={ style.label }>Height</Text>
                    <Text style={ style.data }>{ pokemon.height }</Text>
                </View>
            </View>
            <View style={ style.row }>
                <View style={{ width: "40%" }}>
                    <Text style={ style.label }>Base XP</Text>
                    <Text style={ style.data }>{ pokemon.base_experience }</Text>
                </View>
                <View style={{ width: "40%" }}>
                    <Text style={ style.label }>Highest Stat</Text>
                    <Text style={ style.data }>{ highestStat }</Text>
                </View>
            </View>
            <Text style={ style.label }>Types</Text>
            <Types types={ pokemon.types } />
        </View>
    )
}

export default Description;

const style = StyleSheet.create({
    description: {
        flex: 5,
    },
    row: { 
        flexDirection: "row", 
        justifyContent: "space-around", 
        marginBottom: "10%"
    },
    shadowBox: {
        backgroundColor: '#E7F2DC',
        width: '70%',
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: .5,
        shadowRadius: 5,
        borderRadius: 25,
        padding: "5%",
    },
    title: {
        fontSize: 19,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "15%"
    },
    label: {
        fontWeight: "bold",
        fontSize: 15,
        width: "100%",
        textAlign: "center"
    },
    data: {
        width: "100%",
        textAlign: "center"
    }
})