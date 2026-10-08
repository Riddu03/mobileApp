import React, {useState} from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";


if (typeof setImmediate === "undefined") {
  global.setImmediate = (callback, ...args) => {
    return setTimeout(callback, 0, ...args);
  };
}

import {
  View,
  StyleSheet
} from 'react-native';


import {
  NavigationContainer
} from '@react-navigation/native';


import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';



import Header from './components/Header';
import Footer from './components/Footer';

import Home from './screens/Home';
import About from './screens/About';



const Stack = createNativeStackNavigator();



export default function App(){


const [scrollY,setScrollY] = useState(0);



return (
 <SafeAreaProvider>
<NavigationContainer>


<View style={styles.container}>


<Header scrollY={scrollY}/>



<View style={styles.content}>


<Stack.Navigator

screenOptions={{
headerShown:false
}}

>


<Stack.Screen

name="Home"

component={Home}

initialParams={{
setScrollY:setScrollY
}}

/>



<Stack.Screen

name="About"

component={About}

/>


</Stack.Navigator>


</View>


<Footer/>


</View>



</NavigationContainer>

</SafeAreaProvider>
);

}



const styles = StyleSheet.create({

container:{
flex:1
},


content:{
flex:1
}


});