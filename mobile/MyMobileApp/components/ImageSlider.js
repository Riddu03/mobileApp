import React from "react";

import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from "react-native";

import Swiper from "react-native-swiper";


const {width} = Dimensions.get("window");


export default function ImageSlider(){


const banners = [

    require("../assets/image1.jpg"),

    require("../assets/image1.jpg"),

    require("../assets/image1.jpg"),

];


return (

<View style={styles.container}>


<Swiper

    autoplay={true}

    autoplayTimeout={3}

    showsPagination={true}

    loop={true}

>

{
banners.map((item,index)=>(

    <View 
        key={index}
        style={styles.slide}
    >

        <Image

            source={item}

            style={styles.image}

        />

    </View>


))

}


</Swiper>


</View>

);


}



const styles = StyleSheet.create({


container:{

    height:200,

    width:"100%",

},



slide:{

    justifyContent:"center",

    alignItems:"center"

},



image:{

    width:width,

    height:200,

    resizeMode:"cover"

}


});