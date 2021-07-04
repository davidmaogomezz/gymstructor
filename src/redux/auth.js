import {auth} from "../db/auth";
// const
const dataInitial = {
  user: null,
  message: '',
  type: ''
}

const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'
const LOGOUT = 'LOGOUT'
const SET_MESSAGE = 'SET_MESSAGE'
const SET_TYPE = 'SET_TYPE'

// reducers
export default function userReducer(state = dataInitial, action){
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
    case LOGOUT:
      return {...state, user: action.payload}
    case SET_MESSAGE:
      return {...state, message: action.payload}
    case SET_TYPE:
      return {...state, type: action.payload}
    default:
      return state
  }
}

// actions
export const signInAction = (email, password) => (dispatch) => {
  auth.signInWithEmailAndPassword(email, password).then(response => {
    const user = response.user
    dispatch({
      type: SIGN_IN,
      payload: user
    })
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = '/home'
   }).catch(err => {
    dispatch({
      type: SET_MESSAGE,
      payload: err.message
    })    
    dispatch({
      type: SET_TYPE,
      payload: 'error'
    })
  })    
}

export const signUpAction = (email, password) => (dispatch) => {
  auth.createUserWithEmailAndPassword(email, password).then(response => {
    const user = response.user
    dispatch({
      type: SIGN_IN,
      payload: user
    })
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = '/home'
  }).catch(err => {
    dispatch({
      type: SET_MESSAGE,
      payload: err.message
    })    
    dispatch({
      type: SET_TYPE,
      payload: 'error'
    })
  })    
}

export const messageAction = (message) => (dispatch) => {
  dispatch({
    type: SET_MESSAGE,
    payload: message
  })
}

export const typeAction = (variant) => (dispatch) => {
  dispatch({
    type: SET_TYPE,
    payload: variant
  })
}

export const readUserAction = () => (dispatch) => {
  const user = localStorage.getItem('user')
  if(localStorage.getItem('user')){
    dispatch({
      type: SIGN_IN,
      payload: user
    })    
  }
}

export const logoutAction = () => (dispatch) => {
  localStorage.clear()
  dispatch({
    type: LOGOUT,
    payload: null
  })
  window.location.href = '/sign-in'
}
