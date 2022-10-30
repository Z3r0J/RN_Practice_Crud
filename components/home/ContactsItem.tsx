import React from 'react';
import {
  Alert,
  Button,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Styles} from '../../helpers/Styles';

export const ContactsItem = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ScrollView style={Styles(isDarkMode).backgroundCard} key={props.item.id}>
      <View style={{flexDirection: 'column'}}>
        <Text style={Styles(isDarkMode).textCard}>{props.item.name}</Text>
        <Text style={Styles(isDarkMode).textCard}>{props.item.phone}</Text>
      </View>
      <ScrollView
        contentContainerStyle={Styles(isDarkMode).buttonContainer}
        style={{display: 'flex'}}>
        <TouchableOpacity style={Styles(isDarkMode).buttonDelete}>
          <Text style={Styles(isDarkMode).buttonText}>DELETE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles(isDarkMode).buttonEdit}>
          <Text style={Styles(isDarkMode).buttonText}>EDIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};
