import { StyleSheet, Text, View ,Button,Image,TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import courseModel from '../api/courseModel';

const CourseListingPage = () => {
  const navigation = useNavigation();

  const courseCard =({item})=>
  {
    return(
  
    <View style={styles.coursecardContainer}>
    <View style={styles.coursecardBody}>
    <Image source={item.img} style={{height:160,width:260,borderRadius:12,marginBottom:12}}></Image>
      <Text style={{color:"black",textAlign:'center',fontSize:18,fontWeight:'600'}}>{item.name}</Text>
      <Text style={{color:"black",textAlign:'right',alignSelf:'flex-end',fontSize:15,fontWeight:'500'}}>By: {item.instructor}</Text>
      <Text style={{color:"black",fontSize:14,marginTop:10,}}>{item.description}</Text>
      <TouchableOpacity onPress={()=>
        {
          // console.log(item);
          navigation.navigate('CourseDetailsPage',{
              courseDetail:item,
            });
        }
      }><Text style={{backgroundColor:'#45C4B0',padding:12,marginTop:25,borderRadius:8,fontSize:16}}>View Details</Text></TouchableOpacity>
    </View>

    </View>
    )
  }





  return (
    <View style={styles.container}>
<View style={styles.head}>

<Image source={require("../images/App_Icon-rbg.png")} style={{height:55,width:50,marginHorizontal:10,marginVertical:10}}/>
<Text style={{fontSize:28,fontStyle:'italic',alignSelf:'center',marginLeft:30,color:'white'}}>BrainStorm</Text>
<TouchableOpacity style={{marginLeft:25}} onPress={()=>
    {
      navigation.navigate("StudentDashBoard");
    }
}>
<View style={{flexDirection:'column',flex:1,alignItems:'center'}}>
<Image source={require("../icons/user-icon.png")} style={{height:48,width:43,marginHorizontal:10,marginTop:10}}/>
<Text style={{fontSize:11,marginTop:5,fontWeight:'bold',}}>Hello, Alice</Text>

</View>
</TouchableOpacity>
</View>
<View style={styles.body}>

    <View style={{marginTop:15}}>
      <Text style={{fontSize:22,color:'#012030',alignSelf:'center',textDecorationLine:'underline',fontWeight:'600',marginBottom:10}}>List of Courses</Text>
    </View>
    <View>
      <FlatList keyExtractor={(item)=>item.id}
      data={courseModel} renderItem={courseCard}/>
    </View>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:
    {
        flex:1,
        
    },
    head:
    {
        flex:1,
        backgroundColor:"#012030",
        flexDirection:'row',
        // alignItems:'center',

    },
    body:
    {
        flex:8,
        backgroundColor:'#F6FFEE',
        paddingBottom:50,
        // backgroundColor:'white',
    },
    coursecardContainer:
    {
      margin:20,
      backgroundColor:"#B5E7DF",
      // backgroundColor:"white",
      borderRadius:20,
      paddingBottom:10,
    },
    coursecardBody:
    {
      margin:20,
      // justifyContent:"center",
      alignItems:'center',
      // borderRadius:12,
    }

});

export default CourseListingPage;
