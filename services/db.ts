import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

enablePromise(true);

const DATABASE_NAME = 'prueba.db';

export const getConnection = async () : Promise<SQLiteDatabase> => {
    const db = await openDatabase({name:DATABASE_NAME,location:'Documents'});
    return db;
}

export const createTable = async (db:any) =>{
    const query = 
    `CREATE TABLE IF NOT EXISTS CONTACTS(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(150), phone varchar(18))`;
    return db.executeSql(query);
}

export const initializeDatabase = async () => {
    const db = await getConnection();
    await createTable(db);
    db.close();
}