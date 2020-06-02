import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding-top: 33px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`


export const Welcome = styled.Text`
    font-size: 30px;
    font-weight: bold;
`

export const SubHeader = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #d3d3d3;
`

export const Search = styled.TouchableOpacity`
    margin-top: 5px;
`

export const RandomTouch = styled.TouchableOpacity`
   padding-top: 20px;
   padding-left: 20px;
`

export const RandomImage = styled.ImageBackground`
    height: 250px;
    width: 150px;
    justify-content: flex-end
`

export const RandomName = styled.Text`
    color: #fff;
    font-size: 16px;
    padding-left: 10px;
    text-shadow: 1px 1px 1px black
`

export const RandomPrice = styled.Text`
    color: #000;
    font-size: 15px;
    padding-left: 10px;
    padding-bottom: 10px;
`