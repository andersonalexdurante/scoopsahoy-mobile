import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, Title, IceCream, EmailInput, ConfirmButton, ButtonText, Forgot, GuestButton, GuestText } from './styles.js'
import iceCream from '../../assets/ice-cream.png'

export default function Login() {

    const navigation = useNavigation()

    function guestLogin() {
        navigation.navigate('Shop')
    }

    return (
        <Container>
            <View style={{flexDirection: 'row'}}>
                <Title>Login</Title>
                <IceCream source={iceCream} />
            </View>
            <EmailInput keyboardType="email-address" placeholder="E-mail"/>
            <EmailInput secureTextEntry={true} placeholder="Senha"/>
            <ConfirmButton>
                <ButtonText>Entrar</ButtonText>
            </ConfirmButton>
            <Forgot>Esqueceu sua senha?</Forgot>
            <GuestButton onPress={guestLogin}>
                <GuestText>Entrar como visitante</GuestText>
            </GuestButton>
        </Container>
    )
}