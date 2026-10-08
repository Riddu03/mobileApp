import React, {
    useRef,
    useEffect,
    useState
} from "react";


import {
    View,
    FlatList,
    Image,
    Dimensions,
    StyleSheet
} from "react-native";


const {width} = Dimensions.get("window");


const ITEM_WIDTH = width / 3;



const images = [

    require("../assets/image1.jpg"),

    require("../assets/image1.jpg"),

    require("../assets/image1.jpg"),

    require("../assets/image1.jpg"),

    require("../assets/image1.jpg"),

    require("../assets/image1.jpg")

];



export default function ImageSlider(){


const flatListRef = useRef(null);

const [currentIndex,setCurrentIndex] = useState(0);



useEffect(()=>{


const timer = setInterval(()=>{


setCurrentIndex(prev=>{


let next = prev + 3;


if(next >= images.length){

next = 0;

}



flatListRef.current?.scrollToIndex({

index:next,

animated:true

});


return next;


});



},3000);



return ()=>clearInterval(timer);



},[]);




return (


<View style={styles.container}>


<FlatList


ref={flatListRef}


data={images}


horizontal


showsHorizontalScrollIndicator={false}



keyExtractor={(item,index)=>index.toString()}



renderItem={({item})=>(


<View style={styles.slide}>


<Image

source={item}

style={styles.image}

/>


</View>


)}




getItemLayout={(data,index)=>({

length:ITEM_WIDTH,

offset:ITEM_WIDTH * index,

index

})}




/>


</View>


);


}




const styles = StyleSheet.create({


container:{

width:"100%"

},



slide:{


width:ITEM_WIDTH,

height:120,

padding:5


},



image:{


width:"100%",

height:"100%",

resizeMode:"cover",

borderRadius:10


}


});