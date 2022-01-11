import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnSxPTqNdYvlbYymT5OUIhuLwHX90I3fQ',
  authDomain: 'house-marketplace-3187c.firebaseapp.com',
  projectId: 'house-marketplace-3187c',
  storageBucket: 'house-marketplace-3187c.appspot.com',
  messagingSenderId: '926205786466',
  appId: '1:926205786466:web:676736bdfa1dc3f34bd43b',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
