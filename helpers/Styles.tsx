import {StyleSheet} from 'react-native';
export const Styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    backgroundCard: {
      flex: 1,
      flexDirection: 'column',
      padding: 20,
      backgroundColor: 'white',
    },
    textCard: {
      color: 'black',
      fontSize: 18,
      marginBottom: 5,
    },
    buttonContainer: {
      width: 600,
      flex: 2,
      flexDirection: 'row',
    },
    buttonDelete: {
      borderColor: 'red',
      backgroundColor: 'red',
      borderRadius: 3,
      borderWidth: 1,
      padding: 7,
    },
    buttonText: {
      color: 'black',
      fontSize: 14,
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
  });
