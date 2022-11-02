import {useEffect, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export const Styles = (isDarkMode: boolean): any => {
  const [width, setWidth] = useState(Dimensions.get('window').width - 10);

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setWidth(Dimensions.get('window').width - 10);
    });
  }, []);

  return StyleSheet.create({
    backgroundCard: {
      flex: 1,
      flexDirection: 'column',
      padding: 20,
      backgroundColor: 'white',
      marginTop: 15,
    },
    homeButtonContainer: {
      height: 50,
      marginTop: 15,
    },
    textCard: {
      color: 'black',
      fontSize: 18,
      marginBottom: 5,
    },
    buttonContainer: {
      width: 600,
      flex: 4,
      flexDirection: 'row',
    },
    buttonDelete: {
      borderColor: 'red',
      backgroundColor: 'red',
      borderRadius: 3,
      borderWidth: 1,
      padding: 7,
    },
    buttonCreate: {
      borderColor: 'green',
      backgroundColor: 'green',
      borderRadius: 11,
      borderWidth: 1,
      padding: 7,
    },
    buttonAccept: {
      borderColor: 'aqua',
      backgroundColor: 'aqua',
      borderRadius: 11,
      width: (width - 170) / 2,
      borderWidth: 1,
      padding: 7,
      marginEnd: 5,
    },
    buttonCancel: {
      borderColor: 'aqua',
      backgroundColor: 'aqua',
      borderRadius: 11,
      width: (width - 140) / 2,
      borderWidth: 1,
      padding: 7,
      marginStart: 5,
    },
    buttonText: {
      color: isDarkMode ? 'white' : 'black',
      fontSize: 14,
      fontWeight: '700',
      marginBottom: 5,
    },
    buttonFormText: {
      color: isDarkMode ? 'white' : 'black',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: '700',
      marginBottom: 5,
    },
    buttonEdit: {
      borderColor: 'orange',
      backgroundColor: 'orange',
      borderRadius: 3,
      borderWidth: 1,
      marginStart: 5,
      padding: 7,
    },
    headerHome: {
      display: 'flex',
      justifyContent: 'space-between',
      width: width,
      flex: 2,
      flexDirection: 'row',
      paddingStart: 5,
    },
    headerTitle: {
      width: 200,
      fontSize: 27,
      fontWeight: '700',
      color: isDarkMode ? 'white' : 'black',
    },
    formCard: {
      padding: 9,
      marginTop: 12,
      backgroundColor: isDarkMode ? 'white' : 'black',
      marginStart: 15,
      marginEnd: 15,
      height: 250,
    },
    formText: {
      fontSize: 14,
      fontWeight: '700',
      color: isDarkMode ? 'black' : 'white',
      marginTop: 5,
      marginBottom: 5,
    },
    formInput: {
      borderBottomWidth: 2,
      borderColor: isDarkMode ? 'black' : 'white',
      color: isDarkMode ? 'black' : 'white',
      marginBottom: 10,
      fontSize: 18,
    },
  });
};
