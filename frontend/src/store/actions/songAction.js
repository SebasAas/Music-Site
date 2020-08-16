import {
  FECTH_ALL_SONGS,
  FETCH_SONGS_ALBUM,
  FETCH_SONG,
} from './actionTypes';

import axios from 'axios';

export const getSongByAlbum = (id) => async (dispatch) => {
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/album/${id}`, { "Access-Control-Allow-Origin": "*" })
    .then(res => {
      dispatch({
        type: FETCH_SONGS_ALBUM,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
}