import * as Firebase from 'firebase'

let HAS_INITIALIZED = false

const initFirebase = () => {
    if (!HAS_INITIALIZED) {
        const config = {
            apiKey: 'AIzaSyDS8NjYoi3sETSbXONu2rJPskkvhRnX-mw',
            authDomain: 'girisyapmauygulamasi.firebaseapp.com',
            databaseURL: 'https://girisyapmauygulamasi.firebaseio.com',
            projectId: 'girisyapmauygulamasi',
            storageBucket: 'girisyapmauygulamasi.appspot.com',
            messagingSenderId: '337208108607',
            appId: "1:337208108607:web:00a050029af9c57f8e3a8a",
            measurementId: "G-5TZW6EM1LP",
        }

        Firebase.database.enableLogging(true)
        Firebase.initializeApp(config)
        HAS_INITIALIZED = true
    }
}

export const getDatabase = () => {
    initFirebase()
    return Firebase.database()
}