import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const handlePress = () => {
    setCurrentSection(prevSection => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about';
        case 'about':
          return 'contact';
        case 'contact':
          return 'name';
        default:
          return 'name';
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {currentSection === 'name' && (
            <View style = {styles.container}>
              <Image source={require('./assets/pic.jpg')} style = {styles.img}/>
              <Text style = {styles.head}>Karl Landsper L Olet</Text>
              <Text style = {styles.par}>Bachelor of Science in Information Technology</Text>
            </View>
          )}

          {currentSection === 'education' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>College</Text>
              <Text style = {styles.par}>Global Reciprocal College (2021 - Present)</Text>
              <Text style = {styles.head3}>Highschool</Text>
              <Text style = {styles.par}>Sergio Osmena Sr. Highschool (2014 -2018)</Text>
              <Text style = {styles.head3}>Elementary</Text>
              <Text style = {styles.par}>Lucas R Pascual Elementary School (2010 - 2014)</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>About</Text>
              <Text style = {styles.par2}>
              Karl Landsper L Olet
              28 years old 
              Currently studying in Global Reciprocal College
              </Text>
            </View>
          )}

          {currentSection === 'contact' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>My Project</Text>
              <Image source = {require('./assets/project.png')} style = {styles.img}/>
              <Text style = {styles.head3}>Website Portfolio</Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },

  img: {
    height: 250,
    width: 250,
    borderRadius: 200
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  head2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  head3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30, 
    textAlign: 'center'
  },

  par: {
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },

  par2: {
    fontSize: 15,
    marginTop: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    textAlign: 'center'
  }
  
});

export default App;