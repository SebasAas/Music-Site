import {
  FECTH_ALL_SONGS,
  FETCH_SONGS_ALBUM,
  FETCH_SONG,
} from '../actions/actionTypes';

const initialState = {
  songs: [],
  albumRelatedSongs: {},
  acatualSong: {},
  idAlbum: '',
}

export default function (state = initialState, action) {

  switch (action.type) {
    case FETCH_SONGS_ALBUM:

      const { album, songs } = action.payload;

      return {
        ...state,
        songs,
        albumRelatedSongs: album,
        idAlbum: album._id
      }
    default:
      return state;
  }
}