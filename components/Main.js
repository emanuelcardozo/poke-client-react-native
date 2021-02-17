import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const PER_PAGE = 5

function Main(){

    const [ pokemons, setPokemons ] = useState([])
    const [ page, setPage ] = useState(1)

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ PER_PAGE }&offset=${ page*10 }`).then((res)=> {
            return res.json()
        }).then((json)=> {
            setPokemons(json.results)
        }).catch( e => console.log("error", e) )
    }, [page])

    return(
        <View  style={{ flex: 6, background: "skyblue", justifyContent: "center", alignItems: "center" }}>
            {
                pokemons.map((pokemon, i) => {
                    return <Text key={ i }>
                        { `${ pokemon.name }: ${ pokemon.url }` }
                    </Text>
                })
            }
            <TouchableOpacity onPress={ ()=> setPage(page+1) }>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Main