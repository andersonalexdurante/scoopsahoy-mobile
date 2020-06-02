import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import Shop from '../Shop'
import Cart from '../Cart'
import Profile from '../Profile'

export default function Tabs() {

    const Tab = createMaterialBottomTabNavigator()

    return (
        <Tab.Navigator labeled={false} barStyle={{backgroundColor: '#fff'}} >
            <Tab.Screen name="Shop" component={Shop} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="widgets" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="local-mall" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="person" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}