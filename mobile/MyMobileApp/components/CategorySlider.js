import React, {
    useRef,
    useEffect,
    useState
} from "react";


import {
    View,
    FlatList,
    Text,
    StyleSheet
} from "react-native";



const ITEM_WIDTH = 120;



export default function CategorySlider({categories = []}){


const flatListRef = useRef(null);

const [currentIndex,setCurrentIndex] = useState(0);



useEffect(()=>{


if(categories.length === 0){
    return;
}



const timer = setInterval(()=>{


setCurrentIndex(prev=>{


let nextIndex = prev + 1;


if(nextIndex >= categories.length){

nextIndex = 0;

}



flatListRef.current?.scrollToIndex({

index:nextIndex,

animated:true,

});


return nextIndex;


});



},3000);



return ()=>clearInterval(timer);



},[categories.length]);





return (


<FlatList


ref={flatListRef}


data={categories}


horizontal


showsHorizontalScrollIndicator={false}



keyExtractor={(item,index)=>

item.id ? item.id.toString() : index.toString()

}




renderItem={({item})=>(


<View style={styles.item}>


<Text style={styles.text}>

{item.category_name}


</Text>


</View>


)}



getItemLayout={(data,index)=>(

{

length:ITEM_WIDTH,

offset:ITEM_WIDTH * index,

index

}

)}




onScrollToIndexFailed={(info)=>{


setTimeout(()=>{


flatListRef.current?.scrollToIndex({

index:info.index,

animated:true

});


},500);


}}




/>



);


}




const styles = StyleSheet.create({


item:{


width:ITEM_WIDTH,

alignItems:"center",

justifyContent:"center"


},


text:{


fontSize:14,

fontWeight:"600"


}



});