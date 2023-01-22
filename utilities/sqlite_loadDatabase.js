import * as SQLite from 'expo-sqlite';
import * as FS from "expo-file-system";
import { Asset } from "expo-asset";

async function loadDatabase() {
  if (!(await FS.getInfoAsync(FS.documentDirectory + 'SQLite')).exists) {
    await FS.makeDirectoryAsync(FS.documentDirectory + 'SQLite');
  };
  await FS.downloadAsync(
    Asset.fromModule(require('../assets/klokkeDatabase.db')).uri,
    FS.documentDirectory + 'SQLite/klokkeDatabase.db'
  );
  return SQLite.openDatabase('klokkeDatabase.db');
};

export {
  loadDatabase
};

// This is an example of what goes in files which need to access the local db
// import { loadDatabase } from './utilities/sqlite_loadDatabase';
// const db = loadDatabase(pathToDatabaseFile[ i.e. ./assets/klokkeDatabase]);