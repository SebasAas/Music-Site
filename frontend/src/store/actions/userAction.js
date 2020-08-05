import {
  FETCH_CURRENT_USER,
  USER_DESCRIPTION,
} from './actionTypes';

import axios from 'axios';

export const signIn = (currentUser) => async (dispatch) => {

  const data = currentUser

  axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, data, { "Access-Control-Allow-Origin": "*" })
    .then((res) => {
      if (res.data.code === 200) {
        dispatch({
          type: FETCH_CURRENT_USER,
          payload: res.data
        })
      }
    })
    .catch((err) => {
      alert(err.response);
    })
}

export const signOut = () => async (dispatch) => {
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: {}
  })
  localStorage.removeItem('persist:root')
}