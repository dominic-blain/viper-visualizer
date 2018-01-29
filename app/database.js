import firebase from 'firebase';
import { FIREBASE_DB_CONFIG } from './config';

firebase.initializeApp(FIREBASE_DB_CONFIG);
const Database = firebase.database();

export default Database;