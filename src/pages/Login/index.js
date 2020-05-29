import React from 'react'
import { View } from 'react-native'

import { Container, Title, IceCream, EmailInput, ConfirmButton, ButtonText, Forgot, GuestButton, GuestText } from './styles.js'
import iceCream from '../../assets/ice-cream.png'

export default function Login() {
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
            <GuestButton>
                <GuestText>Entrar como visitante</GuestText>
            </GuestButton>
        </Container>
    )
}