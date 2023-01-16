import * as SQLite from 'expo-sqlite';

export default function SQLiteProvider() {

  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        }
      }
    }
  };

  const db = SQLite.openDatabase("klokkeLocalStorage.db");
  return db;
};

// This is an example of what goes in files which import SQLiteProvider()
// import SQLiteProvider from 'sqlite_db';
// const db = SQLiteProvider();