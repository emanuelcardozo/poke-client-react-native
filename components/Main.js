import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Index from './index/Index'
import Show from './show/Show'

const Stack = createStackNavigator();

function Main(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ Index } />
                <Stack.Screen name="Show" component={ Show } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main