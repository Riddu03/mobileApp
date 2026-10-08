import React from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native";

import { Ionicons } from '@expo/vector-icons';


export default function Header({scrollY}) {


    const showTop = scrollY < 80;


    return (

        <View style={styles.header}>



{/* First Row - App Name Only */}
    {showTop && (
        <View style={styles.appRow}>
            <TouchableOpacity>
                <Text style={styles.appname}>
                    FootwearX
                </Text>
            </TouchableOpacity>
        </View>
    )}


            {
                showTop &&

                <View style={styles.topRow}>

                    <TouchableOpacity style={styles.location}>

                        <Ionicons 
                            name="location-outline"
                            size={20}
                            color="#333"
                        />

                        <Text style={styles.locationText}>
                            Delhi
                        </Text>

                    </TouchableOpacity>



                    <TouchableOpacity>

                        <Ionicons
                            name="person-outline"
                            size={24}
                            color="#333"
                        />

                    </TouchableOpacity>


                </View>

            }



            {/* Search Box */}

            <View style={styles.searchBox}>


                <Ionicons
                    name="search"
                    size={20}
                    color="#777"
                />


                <TextInput

                    placeholder="Search products..."

                    style={styles.input}

                />


            </View>




            {/* Category Menu */}

            <ScrollView

                horizontal

                showsHorizontalScrollIndicator={false}

                style={styles.category}

            >


                {
                    [
                        "Men",
                        "Women",
                        "Kids",
                        "Footwear",
                        "Electronics",
                        "Grocery"
                    ].map((item,index)=>(

                        <TouchableOpacity key={index}>

                            <Text style={styles.categoryItem}>
                                {item}
                            </Text>

                        </TouchableOpacity>

                    ))
                }


            </ScrollView>


        </View>

    )

}






const styles = StyleSheet.create({

appRow: {
    marginBottom: 8,
},

appname: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
},

secondRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
},


    header:{

        backgroundColor:"#fff",

        paddingHorizontal:15,

        paddingTop:10,

        elevation:5,

        shadowColor:"#000",

        shadowOpacity:0.1,

        shadowRadius:5

    },


    topRow:{

        flexDirection:"row",

        justifyContent:"space-between",

        alignItems:"center",

        marginBottom:10,
        

    },

    location:{

        flexDirection:"row",

        alignItems:"center",

        gap:5

    },


    locationText:{

        fontSize:16,

        marginLeft:5

    },


    searchBox:{

        flexDirection:"row",

        alignItems:"center",

        backgroundColor:"#f3f3f3",

        borderRadius:10,

        paddingHorizontal:12,

        height:45

    },


    input:{

        flex:1,

        marginLeft:10,

        fontSize:15

    },


    category:{

        marginTop:12,

        marginBottom:10

    },


    categoryItem:{

        backgroundColor:"#eee",

        paddingHorizontal:18,

        paddingVertical:8,

        borderRadius:20,

        marginRight:10,

        fontSize:14

    }


});