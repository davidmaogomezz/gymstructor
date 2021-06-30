import firebase from 'firebase/app'
import 'firebase/auth'
import config from './config'

const fire = firebase.initializeApp(config)
const auth = fire.auth()

export {auth}
