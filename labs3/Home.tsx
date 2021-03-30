import React, {FC} from "react";
import {Text, View, ViewStyle, StyleSheet, Dimensions, TouchableOpacity, ImageBackground} from "react-native";
import {NavigationType} from "./App";

interface Styles {
    mainContainer: ViewStyle,
    button: ViewStyle
}

const stl = StyleSheet.create<Styles>({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: '#42f563',
        marginBottom: 20,
        paddingHorizontal : 50,
        padding: 10,
        borderRadius: 10
    }
})

export const Home: FC<{ setNavigation: React.Dispatch<React.SetStateAction<NavigationType>> }> = ({setNavigation}) => {
    return <ImageBackground style={stl.mainContainer}
                            source={{uri: 'https://epi-rsc.rsc-cdn.org/globalassets/05-journals-books-databases/our-journals/chemical-science/chemical-science-header-image.jpg?version=8a759ae3'}}>
        <TouchableOpacity style={stl.button} onPress={() => setNavigation('lab3.1')}>
            <Text>Lab 3.1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stl.button} onPress={() => setNavigation('lab3.2')}>
            <Text>Lab 3.2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stl.button} onPress={() => setNavigation('lab3.3')}>
            <Text>Lab 3.3</Text>
        </TouchableOpacity>
    </ImageBackground>

}