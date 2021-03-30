import React, {FC} from "react";
import {Text, View, ViewStyle, StyleSheet, Dimensions, TouchableOpacity, ImageBackground} from "react-native";
import {NavigationType} from "../App";

interface Styles {
    mainContainer: ViewStyle,
    button : ViewStyle,
    whiteContainer : ViewStyle
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
        paddingHorizontal : 150,
        padding: 10,
        borderRadius: 10
    },
    whiteContainer : {
        backgroundColor: 'rgba(255,255,255,0.7)',
    }
})

export const Lab33: FC<{ setNavigation: React.Dispatch<React.SetStateAction<NavigationType>> }> = ({setNavigation}) => {
    return <ImageBackground style={stl.mainContainer}
                            source={{uri: 'https://uchitel.pro/wp-content/uploads/2018/07/content_geny2_1__econet_ru-790x480.jpg'}}>
        <View style={stl.whiteContainer}>
        <TouchableOpacity style={stl.button} onPress={() => setNavigation('Home')}>
            <Text>To home</Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>

}