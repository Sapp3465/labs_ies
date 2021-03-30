import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {Home} from "./Home";
import {Lab31} from "./lab3.1/Lab31";
import {Lab32} from "./lab3.2/Lab32";
import {Lab33} from "./lab3.3/Lab33";

export type NavigationType = 'Home' | 'lab3.1' | 'lab3.2' | 'lab3.3'

export default function App() {
  const [navigation, setNavigation] = useState<NavigationType>('Home')
  return (
    <View style={{flex : 1}}>
      {navigation === 'Home' && <Home setNavigation={setNavigation}/>}
      {navigation === 'lab3.1' && <Lab31 setNavigation={setNavigation}/>}
      {navigation === 'lab3.2' && <Lab32 setNavigation={setNavigation}/>}
      {navigation === 'lab3.3' && <Lab33 setNavigation={setNavigation} />}
    </View>
  );
}
