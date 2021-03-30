import React, {FC, useState} from "react";
import {
    Text,
    View,
    ViewStyle,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    TextInput, TextStyle
} from "react-native";
import {NavigationType} from "../App";
import {parts} from "./parts";

interface Styles {
    mainContainer: ViewStyle,
    button: ViewStyle,
    whiteContainer: ViewStyle,
    ok: ViewStyle,
    labContainer: ViewStyle,
    input: TextStyle
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
        paddingHorizontal: 150,
        padding: 10,
        borderRadius: 10
    },
    whiteContainer: {
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    ok: {
        backgroundColor: '#42f563',
        marginBottom: 20,
        paddingHorizontal: 20,
        padding: 10,
        borderRadius: 10
    },
    labContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        fontSize: 17,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        padding: 4,
        width: 100
    }
})

export const Lab31: FC<{ setNavigation: React.Dispatch<React.SetStateAction<NavigationType>> }> = ({setNavigation}) => {
    const [n, changeN] = useState('')
    const [result, changeResult] = useState('')
    return <ImageBackground style={stl.mainContainer}
                            source={{uri: 'http://2.bp.blogspot.com/-zQYxVjs7LDI/U2uJONTdKgI/AAAAAAAAAYQ/PoLKoXux_08/s1600/df.jpg'}}>
        <View style={stl.whiteContainer}>
            <TouchableOpacity style={stl.button} onPress={() => setNavigation('Home')}>
                <Text>To home</Text>
            </TouchableOpacity>
            <View style={stl.labContainer}>
                <TextInput style={stl.input} keyboardType={'numeric'} placeholder={'n'} value={n}
                           onChangeText={changeN}/>

                <TouchableOpacity style={stl.ok} onPress={() => changeResult(parts(Number(n)))}>
                    <Text>Ok</Text>
                </TouchableOpacity>
                <Text>{result}</Text>
            </View>
        </View>
    </ImageBackground>

}