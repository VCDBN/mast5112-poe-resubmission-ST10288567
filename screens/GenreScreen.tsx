//Genre page

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GenrePage = () => {
  const genres = [
    { name: 'Fantasy', booksRead: 1 },

    { name: 'Mystery', booksRead: 1 },

    { name: 'Romance', booksRead: 1 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Genre</Text>

      {genres.map((genre, index) => (
        <View key={index} style={styles.genreContainer}>

          <Text style={styles.genreName}>{genre.name}</Text>
          <Text style={styles.booksRead}>{genre.booksRead} books read</Text>


        </View>

      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,

    color: 'black',
  },
  genreContainer: {
    marginBottom: 15,

  },


  genreName: {
    fontSize: 18,

    fontWeight: 'bold',
    color: 'purple',
  },
  booksRead: {
    fontSize: 16,
    color: 'grey',
  },
});

export default GenrePage;

//REFERENCE LINKS USED TO CREATE PAGES.

//https://youtube.com/shorts/FvgqACEbTr0?si=P_TM_fYjjoKgxCnF

//https://youtube.com/shorts/36_SdDVHPHM?si=GXeErAZ48sfWeVP6

//https://www.youtube.com/live/yyGS0adZdsU?si=XLzxs42TbOfds_6Y

