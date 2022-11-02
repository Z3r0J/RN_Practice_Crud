import {useEffect, useState} from 'react';
import {View, Text, Alert, useColorScheme, Button} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Styles} from '../../helpers/Styles';
import {
  Contact,
  getAllContact,
  InsertContact,
} from '../../services/ContactServices';
import {getConnection} from '../../services/db';
import {ContactsItem} from './ContactsItem';
import Icon from 'react-native-vector-icons/Ionicons';

export const renderContactsComponent = (item: any) => {
  return <ContactsItem item={item.item} />;
};

export const HomeComponent = ({navigation}: any) => {
  const [contact, setContact] = useState([{}]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const getConn = await getConnection();
        const contactos = await getAllContact(getConn);
        setContact(contactos);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <View style={Styles(isDarkMode).homeButtonContainer}>
        <ScrollView contentContainerStyle={Styles(isDarkMode).headerHome}>
          <Text style={Styles(isDarkMode).headerTitle}>Contactos</Text>
          <TouchableOpacity
            style={Styles(isDarkMode).buttonCreate}
            onPress={() => navigation.navigate('Add')}>
            <Icon name="add" color={isDarkMode ? 'white' : 'black'} size={24} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <FlatList
        data={contact}
        renderItem={renderContactsComponent}
        keyExtractor={item => {
          return item.id;
        }}
        style={{marginTop: 5}}
      />
    </>
  );
};
