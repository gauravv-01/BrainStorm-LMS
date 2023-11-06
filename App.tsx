/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Home from './src/screens/Home';
import CourseDetailsPage from './src/components/CourseDetailsPage';
import StudentEnrollment from './src/components/StudentEnrollment';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Testing from './src/components/Testing';
import CourseListingPage from './src/screens/CourseListingPage';
import MainPage from './src/components/MainPage';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
// type NavigationProps = PropsWithChildren<{
//   title: string;
// }>;

const Stack = createNativeStackNavigator();
function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}  />    
        <Stack.Screen name="CourseListingPage" component={CourseListingPage}  />    
        <Stack.Screen name="CourseDetailsPage" component={CourseDetailsPage}  />    
        <Stack.Screen name="StudentEnrollment" component={StudentEnrollment}  />    
        <Stack.Screen name="MainPage" component={MainPage}  />    


        {/* <Stack.Screen name='Service' component={Service} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
