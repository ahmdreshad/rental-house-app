
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB55LS5XrzyOeE56XTuluDdZKmRF9IkWC8',
  authDomain: 'reshad-house.firebaseapp.com',
  projectId: 'reshad-house',
  storageBucket: 'reshad-house.appspot.com',
  messagingSenderId: '884253674516',
  appId: '1:884253674516:web:ea4e5e2dac2224a2dc6b01',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
