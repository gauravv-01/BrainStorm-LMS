import { StyleSheet,Button, Text, View, ImageBackground, Image,StatusBar,TouchableOpacity} from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import CourseListingPage from './CourseListingPage';
import MainPage from '../components/MainPage';

const Home =()=>{

    const navigation =useNavigation();



  return (
      <>
    <View  style={[styles.body,{backgroundColor:'#F6FFEE',height:'100%',width:'100%'}]}>
    {/* <LinearGradient
          colors={['Blue', 'white', 'black' ]}
          style={styles.linearGradient}
        >
          <Text>Vertical Gradient</Text>
      </LinearGradient> */}
      {/* <LinearGradient colors={['black','#4c669f']} style={styles.linearGradient}> */}

    <View style={styles.container}>
    <View style={{flex:.7,flexDirection:'row',margin:0,padding:0,alignItems:'flex-end'}}>
        <Image source={require("../images/App_Icon-rbg.png")} style={[{width: 45,height: 45,marginLeft:20}]} />
        <Text style={{color:'#012030',marginLeft:10,fontSize:20,fontWeight:'bold',fontStyle:'italic'}}>BrainStorm</Text>

    </View>
    <View style={{flex:7}}>

        <Image source={require("../images/edu-rbg.png")} style={[styles.stretch,{marginTop:50,alignSelf:"center"}]} />
    <View style={{  marginTop:40}}>
      <Text style={[styles.head]} >LEARN TOGETHER TO BE BETTER</Text>
     
    </View>
      
      <Text style={[styles.titleText,{marginVertical:20,marginTop:9,alignSelf:"center"}]}>We will teach you to really understand and get work-ready skills for your future career.</Text>

      <StatusBar style="auto" />
    <TouchableOpacity 
        onPress={() => 
        {
        navigation.navigate('CourseListingPage');


        }
        }
        >
            <Text style={styles.but}>Get Started</Text>
        </TouchableOpacity>
    </View>
    </View>
{/* // </LinearGradient> */}
    </View>
    </>
 
  );
}

const styles = StyleSheet.create({
    body:
    {
        // backgroundColor:'red'
    },
    linearGradient: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        // height: 200,
        // width: 350,
      },
  container: {
    flex: 1,
    // backgroundColor: 'black',

    // alignItems: 'center',
    // alignSelf:'flex-start',
    justifyContent: 'center',
    // height:'85%',
    // width:'85%',
    borderRadius:45,

  },
  stretch: {
    width: 363,
    height: 238,
    // resizeMode: 'stretch',
  },
  baseText: {
    // fontFamily: 'Cochin',
  },
  titleText: {
    // fontFamily: 'Cochin',
    fontSize: 14.5,
    // fontWeight: 'bold',
    paddingHorizontal:16,
    color: '#012030',
    // color: '#012030',
  },

  head: {
    fontSize: 39,
    fontWeight:'bold',
    color: '#012030',
    paddingLeft:16,
    
    // margin:3,
    // color: 'white',
    // fontFamily: "AbrilFatface-Regular",
    // flex: 1,
    // backgroundColor: '#4CC8D9',
    // alignItems: 'center',
    // justifyContent: 'center',
  
  },
  but:
  {
      color:"white",
      textAlign:"center",
      marginVertical:10,
      backgroundColor:"#45C4B0",
      padding:9,
      paddingLeft:44,
      paddingRight:44,
      alignSelf:"center",
      elevation: 8,
      borderRadius: 32,
      fontSize:28

  },
});


export default Home;