import {Alert} from 'react-native';
import {useState} from 'react';

export const InsertContact = async (db: any, contact: Contact) => {
  const query = `INSERT INTO CONTACTS(name,phone) values('${contact.name}','${contact.phone}')`;
  return db.executeSql(query);
};

export const getAllContact = async (db: any) => {
  const contacts: Contact[] = [];
  const query = `SELECT * FROM CONTACTS`;

  const response = await db.executeSql(query);
  response.forEach((res: any) => {
    for (let index = 0; index < res.rows.length; index++) {
      const contact: Contact = {
        id: res.rows.item(index)['id'],
        name: res.rows.item(index)['name'],
        phone: res.rows.item(index)['phone'],
      };
      contacts.push(contact);
    }
  });

  db.close();
  return contacts;
};

export const getById = async (db: any, contactId: any) => {
  const [Contacts, setContacts] = useState<any>();

  const query = `SELECT * FROM CONTACTS WHERE id = ${contactId}`;

  const response = await db.executeSql(query);

  console.log(response);
};

export const UpdateContact = async (
  db: any,
  newContactInfo: Contact,
  contactId: number,
) => {
  const query = `UPDATE CONTACTS SET name = '${newContactInfo.name}', phone = '${newContactInfo.phone}'  WHERE id = ${contactId}`;

  return await db.executeSql(query);
};

export const DeleteContact = async (db: any, contactId: number) => {
  const query = `DELETE FROM CONTACTS WHERE id = ${contactId}`;
  return db.executeSql(query);
};

export class Contact {
  id: any;
  name: any;
  phone: any;

  constructor(id: any, name: any, phone: any) {
    (this.id = id), (this.name = name), (this.phone = phone);
  }
}
