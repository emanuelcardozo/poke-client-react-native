import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import List from './List'
import NavigationButtons from './NavigationButtons'

const PER_PAGE = 5
let slideDirection = 'left'

function Main(){

    const [ pokemons, setPokemons ] = useState([])
    const [ page, setPage ] = useState(0)

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ PER_PAGE }&offset=${ page*10 }`).then((res)=> {
            return res.json()
        }).then((json)=> {
            setPokemons(json.results)
        }).catch( e => console.log("error", e) )
    }, [page])

    function changePage(offset){
        setPokemons([])
        setPage(page + offset)
        slideDirection = offset === 1 ? 'right' : 'left'
    }

    return(
        <View  style={{ flex: 1 }}>
            <List pokemons={ pokemons } slideDirection={ slideDirection } />
            <NavigationButtons prevPage={ changePage.bind(null, -1) } nextPage={ changePage.bind(null, 1) } />    
        </View>
    )
}

export default Main