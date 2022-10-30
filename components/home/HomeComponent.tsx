import { useEffect, useState } from "react"
import { View, Text, Alert } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Contact, getAllContact, InsertContact } from "../../services/ContactServices"
import { getConnection } from "../../services/db"
import { ContactsItem } from "./ContactsItem"

export const renderContactsComponent = (item:any) => {
  return (
    <ContactsItem item={item.item}/>
  )
}

export const HomeComponent = () => {
  
  const [contact,setContact] = useState([{}]);
  
  useEffect(() => {
    const getAll = async () => {
      try {
        const getConn = await getConnection();
        const contactos = await getAllContact(getConn);
          setContact(contactos);
      } catch (error) {
        console.log(error);
      }

    }
    getAll();
  }, [])
  

  return (
    <FlatList data={contact} renderItem={renderContactsComponent} keyExtractor={(item)=>{return item.id}}/>
  )
}
