import React, {FC, useState} from "react";
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {NavigationType} from "../App";
import {stl} from "../lab3.1/Lab31";
import {neuron} from "./neuron"

export const Lab32: FC<{ setNavigation: React.Dispatch<React.SetStateAction<NavigationType>> }> = ({setNavigation}) => {
    const [sigma, changeSigma] = useState('0.001')
    const [time, changeTime] = useState('500')
    const [iterations, changeIterations] = useState('')
    const [result, changeResult] = useState('')
    return <ImageBackground style={stl.mainContainer}
                            source={{uri: 'https://tadviser.ru/images/1/14/IMG_20200428_072748_881.jpg'}}>
        <View style={stl.whiteContainer}>
            <TouchableOpacity style={stl.button} onPress={() => setNavigation('Home')}>
                <Text>To home</Text>
            </TouchableOpacity>
            <View style={stl.labContainer}>
                <Text>Choose Sigma :</Text>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeSigma('0.001')
                    }}>
                        <Text>0.001</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeSigma('0.01')
                    }}>
                        <Text>0.01</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeSigma('0.05')
                    }}>
                        <Text>0.05</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeSigma('0.1')
                    }}>
                        <Text>0.1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeSigma('0.2')
                    }}>
                        <Text>0.2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeSigma('0.3')
                    }}>
                        <Text>0.3</Text>
                    </TouchableOpacity>
                </View>

                <Text>Choose Time :</Text>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeTime('500')
                        changeIterations('')
                    }}>
                        <Text>0.5s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeTime('1000')
                        changeIterations('')
                    }}>
                        <Text>1s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeTime('2000')
                        changeIterations('')
                    }}>
                        <Text>2s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeTime('5000')
                        changeIterations('')
                    }}>
                        <Text>5s</Text>
                    </TouchableOpacity>
                </View>

                <Text>Choose Iterations :</Text>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeTime('')
                        changeIterations('100')
                    }}>
                        <Text>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeTime('')
                        changeIterations('200')
                    }}>
                        <Text>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeTime('')
                        changeIterations('500')
                    }}>
                        <Text>500</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stl.button, paddingHorizontal: 10, marginRight: 5}} onPress={() => {
                        changeTime('')
                        changeIterations('1000')
                    }}>
                        <Text>1000</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, textAlign: "center"}}>sigma : {sigma}</Text>
                    {!!time && <Text style={{flex: 1, textAlign: "center"}}>time : {time}ms</Text>}
                    {!!iterations && <Text style={{flex: 1, textAlign: "center"}}>iterations : {iterations}</Text>}
                </View>
                <TouchableOpacity style={stl.ok} onPress={() => {
                    changeResult(neuron(Number(sigma), Number(time), Number(iterations)))
                }}>
                    <Text>Ok</Text>
                </TouchableOpacity>
                <Text>{result}</Text>
            </View>
        </View>
    </ImageBackground>

}