import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import Tabs from './pages/Tabs'

const AppStack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Tabs" component={Tabs}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}