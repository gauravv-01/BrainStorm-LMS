import { StyleSheet, Text, View,Button,Image,TouchableOpacity, ScrollView, FlatList,SectionList, Alert ,Modal,TextInput} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const CourseDetailsPage = ({route}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isVisible, setisVisible] = useState(false);
    const handleEnroll = () => {
        // You can perform enrollment logic here, such as sending data to a server.
        // For this example, we'll just display the student's name and email.
        console.log('Enrolled student:');
        console.log('Name:', name);
        console.log('Email:', email);
        Alert.alert('Congratulations', `You enrolled Successfully for ${item.name} course`, [
      
            {text: 'OK', onPress: () => navigation.navigate("CourseListingPage")},
          ]);
    
        // Close the modal and clear input fields.
        // onClose();
      };

    let [prereqState,setPrereqState]=useState(0);
    let [showSyllabus,setShowSyllabus]=useState(0);

    let item= route.params.courseDetail;
    // console.log(route.params.courseDetail);
    
    const navigation = useNavigation();
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
<Text style={{fontSize:11,marginTop:5,fontWeight:'bold'}}>Hello, Alice </Text>

</View>
</TouchableOpacity>
</View>
<View style={styles.body}>

<View style={{marginTop:15}}>
      <Text style={{fontSize:22,color:'#012030',alignSelf:'center',textDecorationLine:'underline',fontWeight:'600',marginBottom:10}}>Course Details</Text>
    </View>
<ScrollView>
    <View>
    {/* <View style={styles.coursecardContainer}> */}
    <View style={styles.coursecardBody}>
    <Image source={item.img} style={{height:200,width:320,borderRadius:12,marginBottom:12}}></Image>
      <Text style={{color:"black",textAlign:'center',fontSize:20,fontWeight:'600'}}>{item.name}</Text>
      <Text style={{color:"black",textAlign:'right',alignSelf:'flex-end',fontSize:17,fontWeight:'500'}}>By: {item.instructor}</Text>
      <Text style={{color:"black",fontSize:16,marginTop:10,alignSelf:'flex-start',textAlign:'justify'}}>{'--> '}{item.description}</Text>
      <View style={{flexDirection:'row',alignSelf:'flex-start'}}>

      <Text style={{color:"black",fontSize:15,marginTop:10,alignSelf:'flex-start'}}>Enrollment Status: </Text>
      <Text style={item.enrollmentStatus=="Closed"?{color:"red",fontSize:15,marginTop:10,alignSelf:'flex-start'}:{color:"black",fontSize:15,marginTop:10,alignSelf:'flex-start'}}>{item.enrollmentStatus}</Text>
      
      </View>
      <View style={{flexDirection:'row',alignSelf:'flex-start'}}>

      <Text style={{color:"black",fontSize:15,marginTop:10,alignSelf:'flex-start'}}>Course Duration: </Text>
      <Text style={{color:"black",fontSize:15,marginTop:10,alignSelf:'flex-start'}}>{item.duration}</Text>

      </View>
      <Text style={{color:"black",fontSize:15,marginTop:10,alignSelf:'flex-start',textAlign:'justify'}}>Schedule On: {item.schedule}</Text>
      <Text style={{color:"black",fontSize:15,marginTop:10,alignSelf:'flex-start'}}>Location: {item.location}</Text>
      <TouchableOpacity style={{alignSelf:'flex-start'}} onPress={()=>
      {
        if(prereqState==1)
        {
        setPrereqState(0);

        }
        else{
            setPrereqState(1);
        }
      }}>

      <Text style={{color:"black",fontSize:16,marginTop:10,alignSelf:'flex-start',fontWeight:'500'}}>PreRequisites{' 🔽'}</Text>
      </TouchableOpacity>
      {prereqState==1?<View style={{ color: 'black', fontSize: 15, marginTop: 10,alignSelf:'flex-start' }}>
  {item.prerequisites.map((prerequisite, index) => (
    <Text style={{color:'grey',textAlign:'left',fontSize:15}} key={index}>{index+1}. {prerequisite}</Text>
  ))}
</View>:""}


      <TouchableOpacity style={{alignSelf:'flex-start'}} onPress={()=>
      {
        if(showSyllabus==1)
        {
        setShowSyllabus(0);

        }
        else{
            setShowSyllabus(1);
        }
      }}>

      <Text style={{color:"black",fontSize:16,marginTop:10,alignSelf:'flex-start',fontWeight:'500'}}>Syllabus{' 🔽'}</Text>
      </TouchableOpacity>
      {showSyllabus==1?<View style={{ color: 'black', fontSize: 15, marginTop: 10, alignSelf: 'flex-start' }}>
  {item.syllabus.map((syllabusItem, index) => (
    <View key={index}>
      <Text style={{ color: 'grey', textAlign: 'left', fontSize: 15, textDecorationLine: 'underline' }}>
        Week: {syllabusItem.week}
      </Text>
      <Text style={{ color: 'grey', textAlign: 'left', fontSize: 15 }}>
        Topic: {syllabusItem.topic}
      </Text>
      <Text style={{ color: 'grey', textAlign: 'left', fontSize: 15 }}>
        Content: {syllabusItem.content}
      </Text>
      <Text></Text>
    </View>
  ))}
</View>
:""}
      
    <TouchableOpacity onPress={()=>
        {
          if (item.enrollmentStatus=="Closed")
          {
            Alert.alert('Not Allowed', "You can't enroll because Enrollment Status is Closed", [
      
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
           
            return;

          }
          setisVisible(true);
        //   navigation.navigate("StudentEnrollment");
        }
      }><Text style={{backgroundColor:'#45C4B0',padding:12,marginTop:25,borderRadius:8,fontSize:16,color:'white'}}>Enroll Now</Text></TouchableOpacity>
    </View>

    </View>
</ScrollView>
    </View>
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Student Enrollment</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="gray"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email ID"
          placeholderTextColor="gray"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Enroll" onPress={handleEnroll} />
          <Button title="Cancel" onPress={()=>{setisVisible(false)}} color="red" />
        </View>
      </View>
    </Modal>
</View>
    // </View>
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
        // margin:20,
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
        // borderRadius:20,
      // justifyContent:"center",
      alignItems:'center',
      // borderRadius:12,
    },
    modalContainer: {
        flex: 1,
        // height:200,
        // width:200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color:'black',
      },
      modalTitle: {
        fontSize: 20,
        marginBottom: 10,
        color:'black',
      },
      input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
        color:'black',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
});

export default CourseDetailsPage;
