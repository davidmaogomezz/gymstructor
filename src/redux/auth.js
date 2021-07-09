import axios from 'axios';
// const
const dataInitial = {
  headers: null,
  user: null,
  message: '',
  type: ''
}

const SET_USER = 'SET_USER'
const SET_HEADERS = 'SET_HEADERS'
const LOGOUT = 'LOGOUT'
const SET_MESSAGE = 'SET_MESSAGE'
const SET_TYPE = 'SET_TYPE'

// reducers
export default function userReducer(state = dataInitial, action){
  switch (action.type) {
    case SET_HEADERS:
      return {...state, headers: action.payload}
    case SET_USER:
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
  axios.post('http://127.0.0.1:3000/api/v1/users/sign_in', { user: { email: email, password: password } }).then(response => {
    if (response.status === 200) setVarsAuth(response, dispatch)
  }).catch(err => {
    dispatch({ type: SET_MESSAGE, payload: err.message })    
    dispatch({ type: SET_TYPE, payload: 'error' })    
  })
}

export const signUpAction = (email, password) => (dispatch) => {
  axios.post('http://127.0.0.1:3000/api/v1/users', { user: { email: email, password: password } }).then(response => {
    if (response.status === 200) setVarsAuth(response, dispatch)
  }).catch(err => {
    dispatch({ type: SET_MESSAGE, payload: err.message })    
    dispatch({ type: SET_TYPE, payload: 'error' })    
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
  const headers = localStorage.getItem('headers')
  const user = localStorage.getItem('user')
  if(localStorage.getItem('user')){
    dispatch({ type: SET_HEADERS, payload: headers })
    dispatch({ type: SET_USER, payload: user })
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


// functions own
const setVarsAuth = (response, dispatch) => {
  const headers = JSON.stringify(response.headers)
  const user = JSON.stringify(response.data.user)
  dispatch({ type: SET_HEADERS, payload: headers })
  dispatch({ type: SET_USER, payload: user })      
  localStorage.setItem('headers', headers)
  localStorage.setItem('user', user)
  window.location.href = '/home'
}
