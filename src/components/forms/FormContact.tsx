import React, {useState} from 'react';
import {
  Text,
  TextInput,
  useColorScheme,
  View,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Styles} from '../../helpers/Styles';
import {Contact, InsertContact} from '../../services/ContactServices';
import {getConnection} from '../../services/db';

export const FormContact = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [Usuario, setUsuario] = useState<Contact>({id: 0, name: '', phone: ''});

  const handleAddContact = async () => {
    try {
      if (Usuario.name === '' || Usuario.phone === '') {
        Alert.alert('Error', 'Complete todo los campos');
        return;
      }

      const db = await getConnection();

      await InsertContact(db, Usuario);

      Alert.alert(
        'Agregado Correctamente',
        'Su contacto fue agregado correctamente',
      );
      navigation.navigate('Home');
    } catch (error) {}
  };

  return (
    <View style={Styles(isDarkMode).formCard}>
      <Text style={Styles(isDarkMode).formText}>Digite un Nombre: </Text>
      <TextInput
        value={Usuario.name}
        onChangeText={e => {
          setUsuario({...Usuario, name: e});
        }}
        style={Styles(isDarkMode).formInput}
      />
      <Text style={Styles(isDarkMode).formText}>
        Digite un numero de Telefono:{' '}
      </Text>
      <TextInput
        value={Usuario.phone}
        onChangeText={e => {
          setUsuario({...Usuario, phone: e});
        }}
        style={Styles(isDarkMode).formInput}
      />

      <ScrollView
        contentContainerStyle={Styles(isDarkMode).buttonContainer}
        style={{display: 'flex'}}>
        <TouchableOpacity
          style={Styles(isDarkMode).buttonAccept}
          onPress={() => handleAddContact()}>
          <Text style={Styles(isDarkMode).buttonFormText}>Aceptar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles(isDarkMode).buttonCancel}
          onPress={() => navigation.navigate('Home')}>
          <Text style={Styles(isDarkMode).buttonFormText}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
