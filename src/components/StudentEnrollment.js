import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const StudentEnrollment = () => {
  return (
    <View style={styles.container}>
<View style={styles.head}>

<Image source={require("../images/App_Icon-rbg.png")} style={{height:55,width:50,marginHorizontal:10,marginVertical:10}}/>
<Text style={{fontSize:28,fontStyle:'italic',alignSelf:'center',marginLeft:30,color:'white'}}>BrainStorm</Text>
<TouchableOpacity style={{marginLeft:25}} onPress={()=>
    {

    }
}>
<View style={{flexDirection:'column',flex:1,alignItems:'center'}}>
<Image source={require("../icons/user-icon.png")} style={{height:48,width:43,marginHorizontal:10,marginTop:10}}/>
<Text style={{fontSize:11,marginTop:5,fontWeight:'bold'}}>Hello, Gaurav</Text>

</View>
</TouchableOpacity>
</View>
<View style={styles.body}>

    <View>
      <Text>StudentEnrollment</Text>
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
    }
});

export default StudentEnrollment;