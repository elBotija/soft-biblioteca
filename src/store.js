import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'

//firestore
const firebaseConfig = {
    apiKey: "AIzaSyD93ZAqPYTq5YtJjjXG7_R5w5TrcnHU1R0",
    authDomain: "soft-biblioteca-121.firebaseapp.com",
    databaseURL: "https://soft-biblioteca-121.firebaseio.com",
    projectId: "soft-biblioteca-121",
    storageBucket: "soft-biblioteca-121.appspot.com",
    messagingSenderId: "79315197671",
    appId: "1:79315197671:web:5626c53bb9def005"
}

//iniciar firebase
firebase.initializeApp(firebaseConfig)

//configuracion de reactRedux
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForPRofile: true
}

//Crear el enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore)

//reducers
const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore: firestoreReducer
})

// State inicial
const initialState = {}

//create el store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store