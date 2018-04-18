import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyAFwmILHGMUh-k2JbaPgLZRpB215hvNq08',
  authDomain: 'cli-phonebook2.firebaseapp.com',
  databaseURL: 'https://cli-phonebook2.firebaseio.com',
  projectId: 'cli-phonebook2',
  storageBucket: 'cli-phonebook2.appspot.com',
  messagingSenderId: '28993053688'
})

export const db = app.database()
export const phonesRef = db.ref('phones')
