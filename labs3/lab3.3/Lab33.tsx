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
import {parts} from "../lab3.1/parts";
import {gen} from "./gen";

interface Styles {
    mainContainer: ViewStyle,
    button : ViewStyle,
    whiteContainer : ViewStyle
    labContainer: ViewStyle,
    input: TextStyle
    ok: ViewStyle,
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
    },ok: {
        backgroundColor: '#42f563',
        marginBottom: 20,
        paddingHorizontal: 20,
        padding: 10,
        borderRadius: 10
    },

})

export const Lab33: FC<{ setNavigation: React.Dispatch<React.SetStateAction<NavigationType>> }> = ({setNavigation}) => {
    const [a, changeA] = useState('')
    const [b, changeB] = useState('')
    const [c, changeC] = useState('')
    const [d, changeD] = useState('')
    const [y, changeY] = useState('')
    const [result, changeResult] = useState('')
    return <ImageBackground style={stl.mainContainer}
                            source={{uri: 'https://uchitel.pro/wp-content/uploads/2018/07/content_geny2_1__econet_ru-790x480.jpg'}}>
        <View style={stl.whiteContainer}>
        <TouchableOpacity style={stl.button} onPress={() => setNavigation('Home')}>
            <Text>To home</Text>
        </TouchableOpacity>
            <View style={stl.labContainer}>
                <View>
                <TextInput style={stl.input} keyboardType={'numeric'} placeholder={'a'} value={a}
                           onChangeText={changeA}/>
                <TextInput style={stl.input} keyboardType={'numeric'} placeholder={'b'} value={b}
                           onChangeText={changeB}/>
                <TextInput style={stl.input} keyboardType={'numeric'} placeholder={'c'} value={c}
                           onChangeText={changeC}/>
                <TextInput style={stl.input} keyboardType={'numeric'} placeholder={'d'} value={d}
                           onChangeText={changeD}/>
                <TextInput style={stl.input} keyboardType={'numeric'} placeholder={'y'} value={y}
                           onChangeText={changeY}/>
                </View>
                <TouchableOpacity style={stl.ok} onPress={() => changeResult(gen(Number(a),Number(b),Number(c),Number(d),Number(y)))}>
                    <Text>Ok</Text>
                </TouchableOpacity>
                <Text>{result}</Text>
            </View>
        </View>
    </ImageBackground>

}