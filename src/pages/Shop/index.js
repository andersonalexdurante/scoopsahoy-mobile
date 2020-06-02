import React, {useState, useEffect} from 'react'
import { View, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import api from '../../services/api'

import { Container, Header, Welcome, SubHeader, Search, RandomTouch, RandomImage, RandomName, RandomPrice } from './styles'

export default function Shop() {

    const [random, setRandom] = useState([])

    useEffect(() => {
        loadRandom()
    }, [])

    async function loadRandom() {
        const res = await api.get('/sorvetes')
        setRandom(res.data)
    }
    
    return (
        <Container>

            <Header>
                <View>
                    <Welcome>Welcome, visitor</Welcome>
                    <SubHeader>All are home made items</SubHeader>
                </View>
                <Search>
                    <MaterialIcons name="search" size={35}/>
                </Search>
            </Header>

            <FlatList horizontal={true} data={random} keyExtractor={(item) => String(item.id)} showsHorizontalScrollIndicator={false}
            renderItem={( { item: sorvete } ) => {
                return(
                    <View>
                        <RandomTouch>
                            <RandomImage source={{uri: sorvete.imagem}} imageStyle={{borderRadius: 20}}>
                                <RandomName>{sorvete.nome}</RandomName>
                                <RandomPrice>${sorvete.preco}</RandomPrice>
                            </RandomImage>
                        </RandomTouch>
                    </View>
                )
            }}
            />
        </Container>
    )
}