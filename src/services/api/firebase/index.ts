import 'firebase/app'
import { initializeApp } from 'firebase/app'

import 'firebase/storage'
import { getStorage } from 'firebase/storage'

const firebaseConfig = initializeApp({
   apiKey: 'AIzaSyCPgf3KAk0VAgNB7E1ZteMN8xEVl3VQ81w',
   authDomain: 'portfolio-26b59.firebaseapp.com',
   projectId: 'portfolio-26b59',
   storageBucket: 'portfolio-26b59.appspot.com',
   messagingSenderId: '367269729136',
   appId: '1:367269729136:web:cfb2f7f1253fd6c95335b5',
})

const storage = getStorage(firebaseConfig)

export default storage
