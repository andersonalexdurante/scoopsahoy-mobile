import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
`

export const IceCream = styled.Image`
    height: 50px;
    width: 50px;
    position: relative;
    bottom: 12px;
`

export const EmailInput = styled.TextInput`
    width: 250px;
    height: 45px;
    border: 0.3px solid black;
    padding: 10px;
    border-radius: 8px;
    margin-top: 20px;
`

export const ConfirmButton = styled.TouchableOpacity`
    width: 100px;
    height: 45px;
    background-color: #5dbcd2;
    border-radius: 8px;
    padding: 10px;
    margin-top: 20px;
    justify-content: center;
    align-items: center
`

export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    align-self: center
`

export const Forgot = styled.Text`
    font-size: 15px;
    color: #d3d3d3;
    font-weight: 100;
    font-style: italic;
    margin-top: 15px;
    text-decoration: underline
`

export const GuestButton = styled.TouchableOpacity`
    width: 250px;
    height: 45px;
    background-color: pink;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    top: 180px;
`

export const GuestText = styled.Text`
    font-size: 20px;
    color: #fff
` 
