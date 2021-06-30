import {auth} from "../db/auth";
// const
const dataInitial = {
  user: null,
  message: '',
  variant: ''
}

const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'
const SET_MESSAGE = 'SET_MESSAGE'
const SET_VARIANT = 'SET_VARIANT'

// reducers
export default function userReducer(state = dataInitial, action){
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
      return {...state, user: action.payload}
    case SET_MESSAGE:
      return {...state, message: action.payload}
    case SET_VARIANT:
      return {...state, variant: action.payload}
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
      type: SET_VARIANT,
      payload: 'danger'
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
      type: SET_VARIANT,
      payload: 'danger'
    })
  })    
}

export const messageAction = (message) => (dispatch) => {
  dispatch({
    type: SET_MESSAGE,
    payload: message
  })
}

export const variantAction = (variant) => (dispatch) => {
  dispatch({
    type: SET_MESSAGE,
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
