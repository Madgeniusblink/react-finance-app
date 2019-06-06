import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABSE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default  }




// // Child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // Child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // Child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//     })

// database.ref('expenses)
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })



// database.ref('expenses').push({
//     description: 'New shoes',
//     note: 'memorial day weekend shoes for pool part',
//     amount: 15.96,
//     createdAt: 987655
// })


// database.ref('notes').push({
//     title: 'New note',
//     body: 'Everyone needs to love',
//     time: 123456
// })



// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//     console.log(snapshot.val().job.title)
//     console.log(val.name,'is a', val.job.title)
//     console.log(val)
// }, (e) => {
//     console.log('Error with data fetching', e)
// })






// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })





// database.ref().set({
//     name: 'Cristian Romero',
//     age: 33,
//     stressLevel: 5,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Miami',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('error:', error)
// })

// database.ref()
//     .update({
//         'job/company': 'Amazon',
//         stressLevel: 9,
//         'location/city': 'Seattle'
// }).then(() => {
//     console.log('data saved')
// }).catch((error) => {
//     console.log('Error:', error)
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data saved')
//     }).catch((error) => {
//         console.log('Error:', error)
//     })

