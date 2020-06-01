import React from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Header, Welcome, SubHeader } from './styles'

export default function Shop() {
    
    return (
        <Container>
            <Header>
                <View>
                    <Welcome>Welcome, visitor</Welcome>
                    <SubHeader>All are home made items</SubHeader>
                </View>
                <MaterialIcons name="search" size={35} style={{marginTop: 5}}/>
            </Header>
            
        </Container>
    )
}