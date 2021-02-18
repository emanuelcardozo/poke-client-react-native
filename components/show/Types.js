import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Types({ types }){
    return(
        <View style={ style.typesContainer }>
        { 
            types.map((t, i)=> {
                return(
                    <View key={ i }  style={{ ...style.container, ...style[t.type.name] }}>
                        <Text style={ style.text }>
                            {t.type.name}
                        </Text>
                    </View>
                )
            }) 
        }
        </View>
    )
}

export default Types;

const style = StyleSheet.create({
    typesContainer: {
        flexDirection: 'row',
    },
    container: {
        width: 100,
        marginVertical: 10,
        marginHorizontal: 3,
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'lightgray',
        shadowColor: '#afafaf',
        shadowOffset: { height: 5, width: 5 },
        shadowRadius: 5,
        shadowOpacity: .5,
    },
    text: {
        color: 'white',
        textTransform: "capitalize",
        textAlign: "center",
        fontWeight: 'bold',
    },
    
    bug: {
        backgroundColor: 'darkseagreen',
    },
      
    dark: {
        backgroundColor: 'black',
    },      
    dragon: {
        backgroundColor: 'darkviolet',
    },      
    electric: {
        backgroundColor: 'yellow',
    },      
    fairy: {
        backgroundColor: 'darksalmon',
    },      
    fighting: {
        backgroundColor: 'red',
    },      
    fire: {
        backgroundColor: 'orange',
    },      
    flying: {
        backgroundColor: 'lightblue',
    },      
    ghost: {
        backgroundColor: 'violet',
    },      
    grass: {
        backgroundColor: 'green',
    },      
    ground: {
        backgroundColor: 'brown',
    },      
    ice: {
        backgroundColor: 'aquamarine',
    },      
    normal: {
        backgroundColor: 'burlywood',
    },      
    poison: {
        backgroundColor: 'purple',
    },      
    psychic: {
        backgroundColor: 'pink',
    },      
    rock: {
        backgroundColor: 'darkgoldenrod',
    },      
    steel: {
        backgroundColor: 'lightgray'
    },      
    water: {
        backgroundColor: 'blue',
    }
})