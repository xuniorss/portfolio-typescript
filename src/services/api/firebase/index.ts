import 'firebase/app'
import { initializeApp } from 'firebase/app'

import 'firebase/storage'
import { getStorage } from 'firebase/storage'

const firebaseConfig = initializeApp({
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: '367269729136',
   appId: '1:367269729136:web:cfb2f7f1253fd6c95335b5',
})

const storage = getStorage(firebaseConfig)

export default storage
