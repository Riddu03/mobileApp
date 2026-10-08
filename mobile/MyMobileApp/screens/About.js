import React from 'react';

import {
View,
Text,
StyleSheet
} from 'react-native';


export default function About(){

return(

<View style={styles.container}>

<Text style={styles.title}>
About Page
</Text>

<Text>
This is second page
</Text>

</View>

);

}



const styles=StyleSheet.create({

container:{
 flex:1,
 justifyContent:'center',
 alignItems:'center'
},

title:{
 fontSize:30,
 fontWeight:'bold'
}

});