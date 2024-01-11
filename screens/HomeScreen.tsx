//hompage

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [page, setPage] = useState('home');

  const handleHome = () => {
    console.log('Home Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {page === 'home' ? 'Bookify' : ''}
      </Text>

      {page === 'home' && (
        <View style={styles.homeContainer}>
          <Text style={styles.homeText}>Welcome to the Home Bookify</Text>
          <View style={styles.homeButtons}>
            <Button title="Go to Home" onPress={handleHome} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  homeContainer: {
    alignItems: 'center',
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  homeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default App;


//REFERENCE LINKS USED TO CREATE PAGES.

//https://youtube.com/shorts/FvgqACEbTr0?si=P_TM_fYjjoKgxCnF

//https://youtube.com/shorts/36_SdDVHPHM?si=GXeErAZ48sfWeVP6

//https://www.youtube.com/live/yyGS0adZdsU?si=XLzxs42TbOfds_6Y

