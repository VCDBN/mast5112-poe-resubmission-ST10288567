//Library page
////85 241 jpcc5
import React, { useState } from 'react';
import {
  TextInput,
  Button,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface BookDetails {
  title: string;
  author: string;
  genre: string;
  pages: number;
}





const HomePage = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const [bookGenre, setBookGenre] = useState('Pick a Genre');

  const [bookPages, setBookPages] = useState('');

  const [lastBookDetails, setLastBookDetails] =
    useState<BookDetails | null>(null);
  const [totalPagesRead, setTotalPagesRead] = useState(0);
  const [numberOfBooks, setNumberOfBooks] = useState(0);

  const predefinedGenres = [
    
    'Action',
    'Mystery',
    'Fantasy',
  ];

  const addBook = () => {
    if (!isFormValid()) {
      return;
    }

    const newBook: BookDetails = {
      title: bookTitle,
      author: bookAuthor,
      genre: bookGenre,
      pages: parseInt(bookPages, 10),
    };

    setLastBookDetails(newBook);
    setTotalPagesRead(totalPagesRead + newBook.pages);
    setNumberOfBooks(numberOfBooks + 1);

    clearForm();
  };







  const isFormValid = () => {
    if (
      !bookTitle ||
      !bookAuthor ||
      bookGenre === 'Pick a Genre' ||
      !bookPages
    ) {
      Alert.alert(
        'Empty',
        'Fill in please'
      );
      return false;
    }





    return true;
  };

  const clearForm = () => {
    setBookTitle('');
    setBookAuthor('');
    setBookGenre('Pick a Genre');
    setBookPages('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={bookTitle}
        onChangeText={(text) => setBookTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={bookAuthor}
        onChangeText={(text) => setBookAuthor(text)}
      />
      <Picker
        style={styles.input}
        selectedValue={bookGenre}
        onValueChange={(itemValue) => setBookGenre(itemValue)}
      >
        {predefinedGenres.map((genre, index) => (
          <Picker.Item key={index} label={genre} value={genre} />
        ))}




      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Pages read"
        value={bookPages}
        onChangeText={(text) => setBookPages(text)}
        keyboardType="numeric"
      />



      <Button
        title="Enter"
        onPress={addBook}
        
        color={'grey'}
      />

      {lastBookDetails && (
        <View style={styles.bookDetails}>
          <Text style={styles.detailsTitle}>Last Book Details:</Text>
          <Text>Ttle: {lastBookDetails.title}</Text>
          <Text>Athor: {lastBookDetails.author}</Text>
          <Text>Genr: {lastBookDetails.genre}</Text>
          <Text>Pages: {lastBookDetails.pages}</Text>
        </View>
      )}



      <View style={styles.statistics}>
        <Text style={styles.statsTitle}>
           Pages Read totaled: {totalPagesRead}
        </Text>
        <Text>
          Average Pages  per Book read:{' '}
          {numberOfBooks > 0
            ? Math.round(totalPagesRead / numberOfBooks)
            : 0}
        </Text>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',

    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 80,
    fontSize: 16,
    borderColor: 'purple',

    borderWidth: 1,
    width: 300,
    marginTop: 110,

    paddingHorizontal: 10,
    borderRadius: 5,

    backgroundColor: 'grey',
    color: 'purple',
   
  },



  EnterButton: {
    marginTop: 101,
    height: 72,
    width: 64,
    color: 'purple',
  },
  bookDetails: {
    marginTop: 20,
  },
  detailsTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statistics: {
    marginTop: 20,
  },
  statsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  
});

export default HomePage;



//REFERENCE LINKS USED TO CREATE PAGES.

//https://youtube.com/shorts/FvgqACEbTr0?si=P_TM_fYjjoKgxCnF

//https://youtube.com/shorts/36_SdDVHPHM?si=GXeErAZ48sfWeVP6

//https://www.youtube.com/live/yyGS0adZdsU?si=XLzxs42TbOfds_6Y