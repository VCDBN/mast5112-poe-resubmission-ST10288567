//Navigation code

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Elevate</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Sign In Pressed')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => alert('Login Pressed')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View>
        <Text>Last Book Details</Text>
        <Text>Total Pages Read</Text>
        <Text>Average Pages Read</Text>
        <Button title="Add a Book" onPress={() => navigation.navigate('Book')} />
        <Button title="View History" onPress={() => navigation.navigate('History')} />
        <Button title="View Genres" onPress={() => navigation.navigate('Genre')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    width: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: '#009688',
    padding: 10,
    width: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;

//REFERENCE LINKS USED TO CREATE PAGES.

//https://youtube.com/shorts/FvgqACEbTr0?si=P_TM_fYjjoKgxCnF

//https://youtube.com/shorts/36_SdDVHPHM?si=GXeErAZ48sfWeVP6

//https://www.youtube.com/live/yyGS0adZdsU?si=XLzxs42TbOfds_6Y