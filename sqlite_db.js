import * as SQLite from 'expo-sqlite';
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

function SQLiteProvider() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        }
      }
    }
  };
  const db = SQLite.openDatabase("klokkeDatabase.db");
  return db;
};

async function openDatabase(pathToDatabaseFile) {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require(pathToDatabaseFile)).uri,
    FileSystem.documentDirectory + 'SQLite/klokkeDatabase.db'
  );
  return SQLite.openDatabase('klokkeDatabase.db');
}

export {
  SQLiteProvider,
  openDatabase,
}

// This is an example of what goes in files which need to access the local db
// import { openDatabase } from 'sqlite_db';
// const db = openDatabase(pathToDatabaseFile[ i.e. ./assets/klokkeDatabase]);