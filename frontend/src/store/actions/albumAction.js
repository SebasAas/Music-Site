import {
  FETCH_ALL_ALBUMS,
} from './actionTypes';

import axios from 'axios';

export const getAllAlbums = () => (dispatch) => {

  axios.get(`${process.env.REACT_APP_BACKEND_URL}/album`, { "Access-Control-Allow-Origin": "*" })
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: FETCH_ALL_ALBUMS,
          payload: res.data
        });
      } else {
        console.log(res);
      }
    })
    .catch(err => {
      console.log(err)
    })
}