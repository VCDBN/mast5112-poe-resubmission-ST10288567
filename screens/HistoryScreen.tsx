//Hisroty page

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';


const sampleBooks = [
  { title: 'Romance lane', date: '2023-04-11' },

  { title: 'Fantasy 2', date: '2023-05-25' },

  { title: 'Dawn 3', date: '2023-06-10' },
 
];

const HistoryScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    return setBooks(sampleBooks);
  }, []);

  const renderBooks = () => {
    return books.map((item, index) => (
      <View key={index} style={styles.item}>
        

        

      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> History Page</Text>
      <ScrollView style={styles.scrollView}>
        {books.length > 0 ? renderBooks() : <Text style={styles.subtitle}>No books read yet</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',

    marginBottom: 20,
    color: '#3498db',
  },
  scrollView: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#777',
  },
});

export default HistoryScreen;

//REFERENCE LINKS USED TO CREATE PAGES.

//https://youtube.com/shorts/FvgqACEbTr0?si=P_TM_fYjjoKgxCnF

//https://youtube.com/shorts/36_SdDVHPHM?si=GXeErAZ48sfWeVP6

//https://www.youtube.com/live/yyGS0adZdsU?si=XLzxs42TbOfds_6Y